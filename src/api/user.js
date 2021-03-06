import request from '@/utils/request'
// import store from "@/store";

export const login = (data) => {
  return request({
    method: 'POST',
    url: '/v1_0/authorizations',
    data: data
  })
}

// 发送验证码
export const getSmsCode = (mobile) => {
  return request({
    method: 'GET',
    url: `/v1_0/sms/codes/${mobile}`
  })
}

// 获取用户信息
export const getUserInfo = () => {
  return request({
    method: 'get',
    url: '/v1_0/user/profile'
    /* headers: {
      // 注意：该接口需要授权才能访问
      //       token的数据格式：Bearer token数据，注意 Bearer 后面有个空格
      Authorization: `Bearer ${store.state.user.token}`,
    }, */
  })
}
