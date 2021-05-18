<template>
	<view class="content">
		<view class="uni-list">			
			<view class="uni-list-cell" hover-class= "uni-list-cell-hover" v-for="(item,index) in news" :key="index" @tap="openinfo(item.uniquekey)">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="item.thumbnail_pic_s"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">
							{{item.title}}
						</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">
							{{item.date}}
						</view>
					</view>
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
		onLoad() {
			uni.request({
				url: 'http://v.juhe.cn/toutiao/index',
				method: 'GET',
				data:{
					type:'top',
					key:'639381dabc2167ac27d651fc630bdb50'
				},
				success: res => {
					console.log(res.data)
					this.news = res.data.result.data
					
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			openinfo(uniquekey){
				console.log(uniquekey)
				uni.navigateTo({
					url: '../info/info?uniquekey='+ uniquekey,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
.uni-media-list-body{heigth:auto}
.uni-media-list-text-top{line-height: 1.6em;}
</style>
