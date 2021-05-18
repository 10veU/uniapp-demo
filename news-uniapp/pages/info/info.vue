<template>
	<view class="content">
		<view class="title">
			{{title}}
		</view>
		<view class="art-content">
			<rich-text class="richText" :nodes="strings"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'',
				strings:''
			}
		},
		onLoad:function(e){
			console.log(e)
			uni.showLoading({
				title:'加载中...'
			})
			uni.request({
				url: 'http://v.juhe.cn/toutiao/content',
				method: 'GET',
				data: {
					uniquekey:e.uniquekey,
					key:'639381dabc2167ac27d651fc630bdb50'
				},
				success: res => {
					uni.hideLoading()
					console.log(res.data.result)
					this.title = res.data.result.detail.title
					this.strings = res.data.result.content
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			
		}
	}
</script>

<style>
.content{padding: 10upx 2%;width: 96%;flex-wrap: wrap;}
.title{line-height: 2em;font-weight: 700;font-size: 38upx;}
.art-content{line-height: 2em;}
</style>
