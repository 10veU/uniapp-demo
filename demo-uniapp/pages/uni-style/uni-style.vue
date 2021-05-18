<template>
	<view>
		<view>样式的学习</view>
		<view class="box">测试rpx</view>
		<view class="iconfont icon-bilibili"></view>
		<view class="iconfont icon-github"></view>
		<view class="iconfont icon-java"></view>
		<view class="iconfont icon-lianxiwo"></view>
		<text class="text">scss</text>
	</view>	
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	/* 引入外部CSS */
	@import url("./out.css");
	.box{
		width: 375rpx;
		height: 375rpx;
		background-color: #4CD964;
		color: #333333;
		font-size: 35rpx;
	}
	.text{
		color: $uni-color-success;
	}
</style>
