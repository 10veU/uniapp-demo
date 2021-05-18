<template>
	<view class="goods_detail">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in goodsDetail.pics" :key="index">
				<image :src="item.pics_sma_url" mode="aspectFit"></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>￥{{goodsDetail.goods_price}}</text>
				<text>￥{{goodsDetail.goods_price}}</text>
			</view>
			<view class="goods_name">{{goodsDetail.goods_name}}</view>			
		</view>
		<view class="line"></view>
		<view class="box2">
			<view>货号：{{goodsDetail.goods_cat}}</view>
			<view>库存：{{goodsDetail.goods_number}}</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="title">详情介绍</view>
			<view class="content">
				<rich-text :nodes="goodsDetail.goods_introduce"></rich-text>
			</view>
		</view>
		<view>
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
	    components: {uniGoodsNav},
		data() {
			return {
				goodsDetail:[],
				options: [{
				            icon: 'headphones',
				            text: '客服'
				        }, {
				            icon: 'shop',
				            text: '店铺',
				            info: 2,
				            infoBackgroundColor:'#007aff',
				            infoColor:"red"
				        }, {
				            icon: 'cart',
				            text: '购物车',
				            info: 2
				        }],
				        buttonGroup: [{
				          text: '加入购物车',
				          backgroundColor: '#ff0000',
				          color: '#fff'
				        },
				        {
				          text: '立即购买',
				          backgroundColor: '#ffa200',
				          color: '#fff'
				        }
				        ]
			}
		},
		onLoad(e) {
			this.getGoodsDetail(e)
		},
		methods: {
			async getGoodsDetail(e){
				const res = await this.$apiRequest({
					url:'/api/public/v1/goods/detail?goods_id='  + e.goods_id
				})
				debugger
				this.goodsDetail = res.data.message
			},
			 onClick (e) {
				uni.showToast({
				  title: `点击${e.content.text}`,
				  icon: 'none'
				})
			  },
			  buttonClick (e) {
				console.log(e)
				this.options[2].info++
			  }
			
		}
	}
</script>

<style lang="scss">
.goods_detail{
	swiper{
		height: 700rpx;
		image{
			width: 100%;
			height:100%;
		}
	}
	.box1{
		padding:  10px;
		.price{
			font-size: 35rpx;
			color: #b50e03;
			line-height: 80rpx;
			text:nth-child(2){
				text-decoration: line-through;
				color:#ccc;
				font-size: 28rpx;
				margin-left: 20rpx;
			}
		}
		.goods_name{
			font-size: 32rpx;
			line-height: 60rpx;
		}
	}
	.line{
		height: 15rpx;
		width: 750rpx;
		background-color: #eee;
	}
	.box2{
		padding: 0 10px;
		font-size: 32rpx;
		line-height: 70rpx;
	}
	.box3{
		padding-bottom: 50px;
		.title{
			font-size: 32rpx;
			padding-left: 10px;
			border-bottom: 1px solid #eee;
			line-height: 40rpx;
		}
		.content{
			font-size: 28rpx;
			color: #333;
		}
	}
	uni-goods-nav{
		position: fixed;
		bottom: 0;
		width: 100%;
	}
}
</style>
