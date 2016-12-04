import Vuex from 'vuex'
import Vue from 'vue'
import {
	CHANGE_KEYWORD,
	SEARCH
} from './mutation-types'
import fetch from 'isomorphic-fetch'

Vue.use(Vuex)

function getGIFs(query) {
	const params = encodeURIComponent(query).replace(/%20/g, '+')
	return fetch('http://api.giphy.com/v1/gifs/search?q=' + params + '&api_key=dc6zaTOxFJmzC').then(res => res.json())
}

const state = {
	keyword: '',
	gifs: []
}
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
const mutations = {
	[CHANGE_KEYWORD](state, keyword) {
		state.keyword = keyword
	},
	[SEARCH](state, gifs) {
		state.gifs = gifs.data
	}
}
const getters = {
	gifs: state => state.gifs
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
})
