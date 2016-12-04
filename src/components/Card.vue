<template>
	<div class="gif mdl-card mdl-shadow--2dp">
		<div class="mdl-card__title mdl-card--expand">
			<img class="image-gif" :src="gif.images.fixed_height.url" alt="" />
		</div>
		<div class="mdl-card__actions">
			<span class="filename">{{gif.slug}}</span>
			<i class="material-icons material-icons--favorite">favorite</i>
		</div>
	</div>
</template>

<style>
.gif {
	display: flex;
	justify-content:space-between;
	margin: 0 auto 30px;
	width: 80%;
}
.gif.mdl-card {
	height: 256px;
}
.gif> .mdl-card__actions {
	height: 52px;
	padding: 16px;
	background: rgba(0, 0, 0, 0.2);
}
.image-gif {
	margin:  0 auto;
}
.filename {
	color: #fff;
	font-size: 18px;
	line-height: 1;
}
.material-icons--favorite {
	position: absolute;
	right: 10px;
	cursor: pointer;
	color: #ffffff;
}
</style>

<script>
export default {
	props: {
		gif: Object
	}
}
</script>