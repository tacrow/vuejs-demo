<template>
	<div class="mdl-textfield mdl-js-textfield">
    <!-- @changeイベントでCHANGE_KEYWORD、@keyup.enterイベントでSEARCHを実行 -->
		<input @change="CHANGE_KEYWORD($event.target.value)" @keyup.enter="SEARCH" class="mdl-textfield__input" type="text" id="sample1" placeholder="keyword">
    <!-- @clickイベントでSEARCHを実行 -->
		<i @click="SEARCH" class="material-icons material-icons--search">search</i>
	</div>
</template>

<script>
import {mapActions} from 'vuex'
import {CHANGE_KEYWORD, SEARCH} from '../vuex/mutation-types'

export default {
	methods: {
    // storeで定義したactionsを利用できるようにする
		...mapActions([
			CHANGE_KEYWORD, SEARCH
		])
	}
}
</script>

<style media="screen">
.mdl-textfield {
	display: flex;
	width: 60%;
	margin: 30px auto;
	padding: 0;
	background-color: #f6f6f6;
}
.material-icons--search {
	cursor: pointer;
}
</style>
