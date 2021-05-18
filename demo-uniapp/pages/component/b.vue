<template>
	<view>
		这是B组件数据：
		{{num}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num:10
			}
		},
		created() {
			uni.$on('updateNum',num=>{
				this.num+=num
			})
		},
	}
</script>

<style>

</style>
