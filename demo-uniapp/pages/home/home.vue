<template>
	
	<view>
		<view>数据绑定的学习</view>
		<view>{{msg}}</view>
		<view>{{msg + 2021}}</view>
		<view>{{2021 + 2021}}</view>
		<view>{{flag?"真的":"假的"}}</view>
		<view>
			<image v-bind:src="image" mode="aspectFit"></image>
		</view>
		<div v-for="item in arr" :key="item.id">
			序号：{{ item.id }} 姓名 ：{{item.name}} 年龄：{{item.age}}
		</div>
		<button type="primary" @click="click(20,$event)">按钮</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg:'hello uni-app!',
				flag:true,
				image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F26250081fd4cc1704ec1666f7d2b3c5b98c9f79a9f98-BB3Kj0_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621869861&t=dbceff4ab40ba0e841cfeaa722abaf1b',
				arr:[
					{
						id:10,
						name:'张三',
						age:'18'
					},{
						id:20,
						name:'赵四',
						age:'19'
					},{
						id:30,
						name:'王五',
						age:'20'
					}
				]
			}
		},
		methods: {
			click(num,event){
				console.log("点击我了！",num,event)
			}
		}
	}
</script>

<style>

</style>
