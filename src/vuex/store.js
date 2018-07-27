import Vuex from 'vuex'
import Vue from 'vue'
import {
	CHANGE_KEYWORD,
	SEARCH
} from './mutation-types'
import fetch from 'isomorphic-fetch'

Vue.use(Vuex)

/**
 * APIからgif画像を取得する関数
 */
function getGIFs(query) {
	const params = encodeURIComponent(query).replace(/%20/g, '+')
	return fetch('http://api.giphy.com/v1/gifs/search?q=' + params + '&api_key=dc6zaTOxFJmzC').then(res => res.json())
}

/**
 * state（情報源）
 *
 * keyword: 検索キーワード
 * gifs: 検索結果[array]
 */
const state = {
	keyword: 'us',
	gifs: []
}

/**
 * action（ユーザーからの入力、外部API呼び出し）
 *
 * CHANGE_KEYWORD: フォームでの検索キーワードの入力or変更
 * SEARCH: APIを呼びdataという変数でコミット
 *
 * 第1引数（commit）: 変更をアプリケーションの状態にcommitする（stateを書き換える）
 * 第2引数（keyword）: 検索ワード
 */
const actions = {
	[CHANGE_KEYWORD]({commit}, keyword) {
		commit(CHANGE_KEYWORD, keyword)
	},
	[SEARCH]({commit}, keyword) {
		getGIFs(state.keyword).then(data => {
			commit(SEARCH, data)
		})
	}
}

/**
 * mutations（状態の変更、情報の変更）
 *
 * state.keywordの変更
 * state.gifsの変更
 */
const mutations = {
	[CHANGE_KEYWORD](state, keyword) {
		state.keyword = keyword
	},
	[SEARCH](state, gifs) {
		state.gifs = gifs.data
	}
}

/**
 * stateに保存された値をコンポーネント側に渡すためのもの
 *
 * ここではgifsというメソッドを定義して、state.gifsを返す
 */
const getters = {
	gifs: state => state.gifs
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
})
