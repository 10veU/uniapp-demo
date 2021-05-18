<template>
	<view>
		// text组件 参考：https://uniapp.dcloud.io/component/text
		<view><text>详情页</text></view>
		<view><text selectable="true">详情页</text></view>
		<view><text space="emsp">详 情页</text></view>
		<view><text space="ensp">详 情页</text></view>
		<view><text space="nbsp">详 情页</text></view>
		<view><text>&amp;</text></view>
		// view 组件 参考：https://uniapp.dcloud.io/component/view
		<view class="outview" hover-class="hover-out-class">
			<view class="view" hover-class="hover-class" hover-stop-propagation="true" :hover-start-time="3000" :hover-stay-time="5000">我是view</view>
		</view>
		// 按钮组件 参考：https://uniapp.dcloud.io/component/image
		<button>按钮</button>
		<button type="primary">按钮</button>
		<button size="mini">按钮</button>
		<button plain="true">按钮</button>
		<button type="default" loading="true"></button>
		// img组件 参考：https://uniapp.dcloud.io/component/image
		<image src="../../static/tabBar/WORLD-ACTIVE.png" mode="aspectFit"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.view{
	width: 100px;
	height: 100px;
	background-color: #808080;
}
.hover-class{
	width: 100px;
	height: 100px;
	background-color: #4CD964;
}
.outview{
	width: 200px;
	height: 200px;
	background-color: #DD524D;
}
.hover-out-class{
	width: 200px;
	height: 200px;
	background-color: #007AFF
}
</style>
