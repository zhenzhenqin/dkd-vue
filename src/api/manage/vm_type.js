import request from '@/utils/request'

// 查询设备类型管理列表
export function listVm_type(query) {
  return request({
    url: '/manage/vm_type/list',
    method: 'get',
    params: query
  })
}

// 查询设备类型管理详细
export function getVm_type(id) {
  return request({
    url: '/manage/vm_type/' + id,
    method: 'get'
  })
}

// 新增设备类型管理
export function addVm_type(data) {
  return request({
    url: '/manage/vm_type',
    method: 'post',
    data: data
  })
}

// 修改设备类型管理
export function updateVm_type(data) {
  return request({
    url: '/manage/vm_type',
    method: 'put',
    data: data
  })
}

// 删除设备类型管理
export function delVm_type(id) {
  return request({
    url: '/manage/vm_type/' + id,
    method: 'delete'
  })
}
