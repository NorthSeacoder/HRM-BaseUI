import request from '@/common/utils/request'

export function getList(params) {
  return request({
    url: '/employee/list',
    method: 'get',
    params
  })
}

export function getDetail(id) {
  return request({
    url: '/employee/list',
    method: 'get',
    params: { id }
  })
}

export function addEmployee(data) {
  return request({
    url: '/employee/add',
    method: 'post',
    data
  })
}
export function addEmployeeList(data) {
  return request({
    url: '/employee/addlist',
    method: 'post',
    data
  })
}

export function updateEmployee(data) {
  return request({
    url: '/employee/update',
    method: 'post',
    data
  })
}

export function deleteEmployee(data) {
  return request({
    url: '/employee/delete',
    method: 'post',
    data
  })
}
export function getBlock() {
  return request({
    url: '/api/getBlock',
    method: 'get'
  })
}
export default {getList,getDetail,getBlock}


