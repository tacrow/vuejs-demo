<template>
	<main class="mdl-layout__content">
		<div class="page-content">
			<search></search>
      <!-- v-for: 件数分を繰り返し -->
			<card v-for="gif in gifs" :gif="gif"></card>
		</div>
	</main>
</template>

<script>
import Search from './Search'
import Card from './Card'
import {mapGetters} from 'vuex'

export default {
	computed: {
    // storeで定義したgettersの値をコンポーネントから利用できるようにする
		...mapGetters(['gifs'])
	},
	components: {
		Search,
		Card
	}
}
</script>

<style>
main {
	width: 100%;
	margin: 0 auto;
	background-color: #f6f6f6;
}
.page-content {
	display: flex;
	flex-direction: column;
	padding-top: 60px;
}
</style>
