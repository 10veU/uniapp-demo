<template>
	<view>
		hello uni-app!
		// 上传图片 参考：https://uniapp.dcloud.net.cn/api/media/image
		<view>
			<button type="default" @click="chooseImg">上传图片</button>
			<image v-for="item in imgPathArr" :src="item"   mode="aspectFit" @click="priviewImg(item)"></image>
		</view>
		// 条件编译 参考：https://uniapp.dcloud.io/platform?id=%e6%9d%a1%e4%bb%b6%e7%bc%96%e8%af%91
		<!-- #ifdef H5 -->
		<view class="box">H5</view>
		<!-- #endif-->
		<!-- #ifdef MP-WEIXIN -->
		<view class="box">WECHAT</view>
		<!-- #endif -->
	</view>	
</template>

<script>
	export default {
		data() {
			return {
				imgPathArr:[]
			}
		},
		onLoad(){
			// #ifdef H5
			console.log("H5")
			// #endif
			// #ifdef MP-WEIXIN
			console.log("WECHAT")
			// #endif
		},
		methods: {
			chooseImg(){
				uni.chooseImage({
					count:6,
					success: res=> {
						console.log(res)
						this.imgPathArr = res.tempFilePaths
					}
				})
			},
			priviewImg(current){
				uni.previewImage({
					current,
					urls:this.imgPathArr,
					loop:true
				})
			},
			
		}
	}
</script>

<style>
	
.box{
	/* #ifdef H5*/
	background-color: #007AFF;
	/* #endif */
	/*#ifdef MP-WEIXIN*/
	background-color: #4CD964;
	/* #endif */
	}
</style>
