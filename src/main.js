import Vue from 'vue'
import App from './App'
import store from './vuex/store'

/* eslint-disable no-new */
new Vue({
	store,
	el: '#app',
	template: '<App/>',
	components: { App },
  /**
   * 【ライフサイクルインスタンス】
   * 参照: https://jp.vuejs.org/v2/guide/instance.html#%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AB%E3%83%80%E3%82%A4%E3%82%A2%E3%82%B0%E3%83%A9%E3%83%A0
   *
   * created: インスタンスが生成された後にコードを実行する
   * ライフサイクルインスタンスではアロー関数は使用しない
   *
   * ×: created: () => { console.log('test') }
   * ○: created: function() { console.log('test') }
   *
   * 初期ロード時に初期値のstate.keywordで検索を実行
   * Vuexのアクションはstore.dispatchがトリガーとなって実行される
   */
  created: function() {
    store.dispatch('SEARCH')
  }
})
