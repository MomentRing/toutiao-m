import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storage'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户的登录状态信息
    user: getItem('TOUTIAO_USER')
  },
  getters: {},
  mutations: {
    setUser (state, user) {
      state.user = user
      setItem('TOUTIAO_USER', user)
    }
  },
  actions: {},
  modules: {}
})
