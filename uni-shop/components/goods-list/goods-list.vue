<template>
	<view class="goods_list" >
		<view class="good_item" v-for="item in goods" :key="item.goods_id" @click="goGoodsDetail(item.goods_id)">
			<image :src="item.goods_big_logo"></image>
			<view class="price">
				<text>￥{{item.goods_price}}</text>
				<text>￥{{item.goods_price}}</text>
			</view>
			<view class="name">
				{{item.goods_name}}
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:['goods'],
		data() {
			return {
				
			}
		},
		methods: {
			goGoodsDetail(goodsId){
				uni.navigateTo({
					url:'../../pages/goods/goods-detail?goods_id='+Number(goodsId)
				})  
			}
		}
	}
</script>

<style lang="scss">
.goods_list{
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.goods_item{
			background-color: #fff;
			width: 355rpx;
			margin: 10rpx 0;
			padding:15rpx;
			box-sizing: border-box;
			image{
				width: 80%;
				height: 150px;
				display: block;
				margin: auto;
			}
		}
		.price{
			color:#d81e06;
			font-size: 36rpx;
			text:nth-child(2){
				color: #ccc;
				font-size: 28rpx;
				margin-left: 17rpx;
				text-decoration: line-through;
			}
		}
		.name{
			font-size: 28rpx;
			line-height: 50rpx;
			padding-top: 10rpx;
			padding-bottom: 15rpx;
		}
	}
</style>
