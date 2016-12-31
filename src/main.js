import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.root = 'static/api'
var router = new VueRouter()
Vue.http.options.emulateJSON = true
// 这里组件不要用异步加载的
router.map({
  titleFromBackendResponse: {
    name: 'titleFromBackendResponse',
    component: require('./views/TitleFromBackendResponse.vue')
  },
  titleFromRouterDefine: {
    name: 'titleFromRouterDefine',
    title: '这个页面的标题是从路由定义中的',
    component: require('./views/TitleFromRouterDefine.vue')
  },
  contentFromRouterDefine: {
    name: 'contentFromBackendResponse',
    title: '这个网页的内容是异步获取的',
    component: require('./views/ContentFromBackendResponse.vue')
  }
})
// why? https://prerender.io/documentation/best-practices
router.beforeEach(function (transition) {
  window.document.title = transition.to.title || 'Default page title'
  window.prerenderReady = false
})
router.afterEach(function (transition) {
  window.prerenderReady = true
})

router.start(App, 'app')
