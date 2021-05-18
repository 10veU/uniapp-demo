<template>
	<view class="news">
		<view class="news_item" v-for="(item,index) in news" :key="index" @tap="openinfo(item.uniquekey)">
			<image :src="item.thumbnail_pic_s" />
			<view class="titleInfo">
				<view class="title">{{item.title}}</view>
				<view class="info">
					<text>信息来源:{{item.author_name}}</text>
					<text>发布时间:{{item.date}}</text>
				</view>				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				news:[]
			}
		},
		mounted() {
			this.getNews()
		},
		methods: {
			getNews(){
				uni.request({
					url: 'http://v.juhe.cn/toutiao/index',
					method: 'GET',
					data:{
						type:'top',
						key:'639381dabc2167ac27d651fc630bdb50'
					},
					success: res => {
						debugger
						console.log(res.data)
						this.news = res.data.result.data
						
					},
					fail: () => {},
					complete: () => {}
				});
			},
			openinfo(uniquekey){
				console.log(uniquekey)
				uni.navigateTo({
					url: '../../pages/news/info?uniquekey='+ uniquekey,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style lang="scss">
.news{
	.news_item{
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid #b50e03;
		image{
			min-width:200rpx;
			max-width:200rpx;
			height:150rpx;
		}
		.titleInfo{
			margin-left: 15rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.title{
				font-size: 30rpx;
			}
			.info{
				font-size: 24rpx;
				text:nth-child(2){
					margin-left: 30rpx;
				}
			}
		}
	}
}
</style>
