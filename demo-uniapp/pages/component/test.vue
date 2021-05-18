<template>
	<view>
		<button type="primary">我是test组件</button>
		这是父组件传递的数据：{{parent}}
		<button @click="transferDataToParentComp">给父组件传值</button>
	</view>
</template>

<script>
	export default {
		props:[
			'parent'
		],
		data() {
			return {
				num:6,
			}
		},
		beforeCreate() {
			console.log("beforeCreate",this.num)
		},
		created() {
			console.log("created",this.num)
		},
		beforeMount() {
			console.log("beforeMount",document.getElementById('view'))
		},
		mounted() {
			console.log("mounted",document.getElementById('view'))
		},
		beforeDestroy() {
			console.log("beforeDestroy")
		},
		destroyed() {
			console.log("destroyed")
		},
		methods: {
			transferDataToParentComp(){
				console.log('给父组件传值!')
				this.$emit("event",this.num)
			}
		}
	}
</script>

<style>

</style>
