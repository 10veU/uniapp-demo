<template>
	<view>
		<view>导航跳转的学习</view>
		// 导航跳转 参考：https://uniapp.dcloud.net.cn/component/navigator
		<navigator url="../detail/detail">跳转到详情页</navigator>
		<navigator url="../message/message" open-type="switchTab">跳转到信息页</navigator>
		<navigator url="../detail/detail" open-type="redirect">跳转到详情页</navigator>
		<button type="primary" @click="godetail()">跳转到详情页</button>
		<button type="primary" @click="gomessage()">跳转到信息页</button>
		<button type="primary" @click="redirectdetail()">跳转到详情页</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onUnload() {
			console.log("导航页面卸载了！")
		},
		methods: {
			godetail(){
				uni.navigateTo({
					url:'/pages/detail/detail',
					success() {
						console.log("godetail success!")
					}
				})
			},
			gomessage(){
				uni.switchTab({
					url:'/pages/message/message',
					success() {
						console.log("switchTab success!")
					}
				})
			},
			redirectdetail(){
				uni.redirectTo({
					url:'/pages/detail/detail',
					success() {
						console.log("redirectdetail success!")
					}
				})
			}
		}
	}
</script>

<style>

</style>
