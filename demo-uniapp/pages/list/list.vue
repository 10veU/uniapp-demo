<template>
	<view>
		<view>这是列表页</view>
		// 数据缓存 参考：https://uniapp.dcloud.net.cn/api/storage/storage
		<button type="primary" @click="setStorage">存储数据</button>
		<button type="primary" @click="getStorage">获取数据</button>
		// 发起请求 参考：https://uniapp.dcloud.io/api/request/request
		<button @click="get()">发起请求</button>
		<view v-for="(item,index) in images" :key="item.goods_id">
			<image :src="item.image_src"></image>
		</view>
		<view v-for="(item,index) in list" :key="index" class="view">
			{{item}}
		</view>
		// 下拉刷新 参考：https://uniapp.dcloud.net.cn/api/ui/pulldown
		<button @click="pullDown">下拉刷新</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:['C','C#','Java','Python','GoLang'],
				images:[],
			}
		},
		onPullDownRefresh() {
			this.list = ['PHP','C++','Kotlin']
			uni.stopPullDownRefresh()
		},
		onReachBottom(){
			this.list.push(...this.list,...['C','C#','Java','Python','GoLang'])
		},
		methods: {
			pullDown(){
				uni.startPullDownRefresh()
			},
			get(){
				var that = this
				uni.request({
					url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
					method: 'GET',
					data: {},
					success: res => {
						that.images = res.data.message
					},
					fail: () => {},
					complete: () => {}
				});
			},
			setStorage(){
				uni.setStorage({
					key: 'hello',
					data: 'world',
					success: function () {
						console.log('缓存数据');
					}
				})
			},
			getStorage(){
				uni.getStorage({
					key: 'hello',
					success: function (res) {
						console.log("获取缓存数据",res.data);
					}
				})
			},
		}
	}
</script>

<style>
.view{
	line-height: 120px;
}
</style>
