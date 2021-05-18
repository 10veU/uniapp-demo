<template>
	<view>
		这是A组件
		<button @click="changeB">修改B组件数据</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			changeB(){
				uni.$emit('updateNum',10)
			}
		}
	}
</script>

<style>

</style>
