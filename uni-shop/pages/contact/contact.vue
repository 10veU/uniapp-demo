<template>
	<view class="contact">
		<image src="../../static/aboutus.jpeg"></image>
		<view class="info">
			<view @click="phone">联系电话:180-9149-1209(点击拨打)</view>
			<view>地址:陕西省咸阳市秦都区统一西路与同德路交叉口西南角</view>
		</view>
		<map class="map" :latitude="latitude" :longitude="longitude" :scale="scale" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 34.298013,
				longitude: 108.712683,
				scale:13,
				markers:[
					{
						latitude: 34.298013,
						longitude: 108.712683,
						iconPath:'../../static/location.png',
						width:30,
						height:30
					}
				]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber:'18091491209'
				})
			}
		}
	}
</script>

<style lang="scss">
.contact{
	width: 750rpx;
	height: 320rpx;
	.info{
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		.view{
			line-height: 80rpx;
			border-bottom: 1px solid #eee;
		}
	}
}
.map{
	width: 100%;
	height: 750rpx;
}
</style>
