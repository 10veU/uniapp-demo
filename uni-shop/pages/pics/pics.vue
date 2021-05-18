<template>
	<view class="pics">
		<scroll-view class="left" scroll-y="true" >
			<view :class="active === index?'active':''" @click = 'leftClickHandler(index)' v-for="(item,index) in categorys" :key="item.name">{{item.name}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y="true">
			<view  v-for="item in images" :key="item.name">
				<image :src="item.image_src" mode="aspectFit" @click="previewImg(item.image_src)"></image>
				<text>{{item.name}}</text>
			</view>
			<text class = "noData" v-if="images.length === 0">暂无图片❗</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				categorys:[],
				active:0,
				images:[]
			}
		},
		onLoad() {
			this.getCategorys()
		},
		methods: {
			async getCategorys(){
				const res = await this.$apiRequest({
					url:'/api/public/v1/home/floordata'
				})
				res.data.message.forEach((floor)=>{
					console.log(floor.product_list)
					this.categorys= [...this.categorys,...floor.product_list]
				})
			},
			
			leftClickHandler(index){
				this.active = index
				this.images = [this.categorys[index]]
			},
			// 放大预览图片
			previewImg(imageUrl){
				uni.previewImage({
					urls: [imageUrl]
				})
				console.log("预览图片")
			}
		}
	}
</script>

<style lang="scss">
page{
	height: 100%;
}
.pics{
	height: 100%;
	display: flex;
	.left{
		width: 200rpx;
		height: 100%;
		border-right: 1px solid #eee;
		view{
			height: 60px;
			line-height: 60px;
			color: #333;
			text-align: center;
			font-size: 30rpx;
			border-top: 1px solid #eee;
		}
		.active{
			background-color:#b50e03;
			color: #fff;
		}
	}
	.right{
		width: 550rpx;		
		margin: 10rpx auto;
		.item{
			image{
				height: 530rpx;
				width: 530rpx;
				border-radius: 5px;
			}
			text{
				font-size: 30rpx;
				line-height: 60rpx;
			}
			padding-bottom: 10rpx;
		}
		
	}
	.noData{
		text-align: center;
		line-height: 750rpx;
		color: #999999;
		font-size: 60rpx;	
	}
}
scroll-view{
	display: inline !important;
}
</style>
