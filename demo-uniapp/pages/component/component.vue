<template>
	<view>
		<view>组件的学习</view>
		// vue组件   参考： https://uniapp.dcloud.net.cn/vue-components
		// 组件概述   参考：https://uniapp.dcloud.net.cn/component/vue-component
		// 组件生命周期  参考： https://uniapp.dcloud.net.cn/collocation/frame/lifecycle?id=%e7%bb%84%e4%bb%b6%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f
		<view id="view">
			<test  v-if="flag" :parent='parent' @event="getNum"></test>
		</view>
		<button @click="checkTest">显示/隐藏test组件</button>	
		这是子组件传递给父组件的数据：{{childrenNum}}
		<test-a></test-a>
		<test-b></test-b>
	</view>	
</template>

<script>
	import test from './test.vue'
	import testA from './a.vue'
	import testB from './b.vue'
	export default {
		components:{
			test,
			testA,
			testB
		},
		data() {
			return {
				flag:true,
				parent:'parent',
				childrenNum:0
			}
		},	
	
		methods: {
			checkTest(){
				this.flag = !this.flag
			},
			getNum(num){
				console.log("父组件获取num"+num)
				this.childrenNum = num
			}
		}
	}
</script>

<style>

</style>
