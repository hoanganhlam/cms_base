import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4980b008 = () => interopDefault(import('../pages/_publication/_post_type/_id.vue' /* webpackChunkName: "pages/_publication/_post_type/_id" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/:publication?/:post_type?/:id?",
    component: _4980b008,
    name: "publication-post_type-id"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
