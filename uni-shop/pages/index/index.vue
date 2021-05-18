<template>
	<!-- 轮播图 -->
	<view class="home">
		<swiper :indicator-dots="true" circular="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.image_src" ></image>
			</swiper-item>
		</swiper>
		<!-- 导航菜单 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="title">推荐商品</view>
			<!-- 商品列表 -->
			<goods-list :goods = goods></goods-list>
		</view>
	</view>	
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		components:{
			"good-list":goodsList
		},
		data() {
			return {
				swipers:[],
				goods:[],
				pagenum:1,
				pagesize:10,
				navs:[
					{
						icon:'iconfont iconsupermarket',
						title:'uni超市',
						path:'/pages/goods/goods',				
					},
					{
						icon:'iconfont iconzu2112',
						title:'联系我们',
						path:'/pages/contact/contact',				
					},
					{
						icon:'iconfont iconshangrenshequ_tupian',
						title:'社区图片',
						path:'/pages/pics/pics',				
					},
					{
						icon:'iconfont iconweixuexi',
						title:'学习视频',
						path:'/pages/videos/videos',				
					}
				],
			}
		},
		onLoad() {
			this.getSwipers()
			this.getHotGoodsList()
		},
		methods: {
			// 获取轮播图
			async getSwipers(){
				 uni.request({
				 	url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
				 	method:'GET',
				 	data: {},
				 	success: res => {
				 		console.log(res)
				 		if(res.data.meta.status!==200){
				 			uni.showToast({
				 				title:'获取数据失败！'
				 			})
				 		}
				 		this.swipers = res.data.message
				 	},
				 	fail: () => {},
				 	complete: () => {}
				 })
				const res = await this.$apiRequest({
					url:'/api/public/v1/home/swiperdata'
				})
				console.log(res)
				this.swipers = res.data.message
			},
			// 获取热门商品列表
			async getHotGoodsList(){
				const res = await this.$apiRequest ({
					url:'/api/public/v1/goods/search?pagenum = '+ this.pagenum+'&pagesize='+this.pagesize
				})
				console.log(res)
				this.goods = res.data.message.goods
			},
			// 导航点击的处理函数
			navItemClick(url){
				console.log(url)
				uni.navigateTo({
					url
				})
				
			}
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image:{
				width: 100%;
				height: 100%;
			}
		}
	}
	.nav {
		display: flex;
		.nav_item{
			width: 25%;
			text-align: center;
			view{
				width: 120rpx;
				height: 120rpx;
				background-color: #b50e03;
				border-radius: 60rpx;
				margin: 10px auto;
				line-height: 120rpx;
				color: #fff;
				font-size: 50rpx;
			}
			text{
				font-size: 30rpx;
			}
		}
	}
	.hot_goods{
		background-color: #eee;
		overflow: hidden;
		margin-top: 10px;
		.title{
			height: 50px;
			line-height: 50px;
			color:  #d81e06;
			text-align: center;
			letter-spacing: 20px;
			background-color: #fff;
			margin: 10rpx 0;
		}
	}
</style>
