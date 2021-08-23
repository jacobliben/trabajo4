
// 查询字典数据列表
export function listData(query) {
  return this.$request({
    url: '/system/dict/data/list',
    method: 'get',
    params: query
  })
}

// 查询字典数据详细
export function getData(dictCode) {
  return this.$request({
    url: '/system/dict/data/' + dictCode,
    method: 'get'
  })
}

// 根据字典类型查询字典数据信息
export function getDicts(dictType) {
  return this.$request({
    url: '/system/dict/data/type/' + dictType,
    method: 'get'
  })
}

// 新增字典数据
export function addData(data) {
  return this.$request({
    url: '/system/dict/data',
    method: 'post',
    data: data
  })
}

// 修改字典数据
export function updateData(data) {
  return this.$request({
    url: '/system/dict/data',
    method: 'put',
    data: data
  })
}

// 删除字典数据
export function delData(dictCode) {
  return this.$request({
    url: '/system/dict/data/' + dictCode,
    method: 'delete'
  })
}

// 导出字典数据
export function exportData(query) {
  return this.$request({
    url: '/system/dict/data/export',
    method: 'get',
    params: query
  })
}

// 注册使用 ：根据字典类型查询字典数据信息
export function getRegistDicts(dictType) {
  return this.$request({
    url: '/system/dict/data/registType/' + dictType,
    method: 'get'
  })
}

var authorization = uni.getStorageSync("token")
// 获取路由
export function getRouters(){
  return this.$request({
    url: '/getRouters',
    method: 'get',
	header:{
		Authorization:authorization,
	},
  })
}
