import request from '@/utils/request'

// 查询商品类型列表
export function listSkuClass(query) {
  return request({
    url: '/manage/skuClass/list',
    method: 'get',
    params: query
  })
}

// 查询商品类型详细
export function getSkuClass(classId) {
  return request({
    url: '/manage/skuClass/' + classId,
    method: 'get'
  })
}

// 新增商品类型
export function addSkuClass(data) {
  return request({
    url: '/manage/skuClass',
    method: 'post',
    data: data
  })
}

// 修改商品类型
export function updateSkuClass(data) {
  return request({
    url: '/manage/skuClass',
    method: 'put',
    data: data
  })
}

// 删除商品类型
export function delSkuClass(classId) {
  return request({
    url: '/manage/skuClass/' + classId,
    method: 'delete'
  })
}
