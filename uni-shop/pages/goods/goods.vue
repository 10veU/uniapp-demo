<template>
	<view>
		<good-list :goods='goods'></good-list>
		<view class="isOver" v-if="isOverFlag"> —— 我是有底线的 —— </view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		components:{
			'good-list':goodsList
		},
		data() {
			return {
				goods:[],
				pagenum:1,
				pagesize:10,
				isOverFlag:false
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		onPullDownRefresh() {
			this.pagenum = 1
			this.goods=[]
			this.isOverFlag = false
			this.getGoodsList()
		},
		onReachBottom(){
			if(this.goods.length > 30){ //模拟数据加载条数大于总条数
				return this.isOverFlag = true	
			}
			this.pagenum++
			this.getGoodsList(()=>{
				uni.stopPullDownRefresh()
			})
		},
		methods: {
			async getGoodsList(callBack){
				const res = await this.$apiRequest ({
					url:'/api/public/v1/goods/search?pagenum = '+ this.pagenum+'&pagesize='+this.pagesize
				})
				console.log(res)
				this.goods = [...this.goods, ...res.data.message.goods]
				callBack && callBack()
			}
		}
	}
</script>

<style lang="scss">
	.goods_list{
		background-color: #eee;
	}
	.isOver{
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		background-color: #fff;
		color: #C0C0C0;
		font-size: 28rpx;
	}
</style>
