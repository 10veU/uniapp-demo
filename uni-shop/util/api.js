const BASE_URL = 'https://api-hmugo-web.itheima.net'
export const apiRequest = (option)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL + option.url,
			method:option.method ||'GET',
			data:option.data || {},
			success: res => {
				if(res.data.meta.status!==200){
					uni.showToast({
						title:'获取数据失败！'
					})
				}
				resolve(res)
			},
			fail:(err) => {
				uni.showToast({
					title:'获取数据失败！'
				})
				reject(err)
			}
		})
	})
}