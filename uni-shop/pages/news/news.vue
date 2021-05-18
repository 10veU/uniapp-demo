<template>	
	<view>
		<news-list></news-list>
	</view>
</template>

<script>
	import newsList from '../../components/news-list/news-list.vue'
	export default {
		components:{'news-list': newsList},
		data() {
			return {
			}
		},
		methods: {			
		}
	}
</script>

<style>

</style>
