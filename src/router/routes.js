import { routerCollection } from '@oarepo/invenio-api-vuex'
import { query } from '@oarepo/vue-query-synchronizer'
import Error404 from 'pages/Error404'
import MainLayout from 'layouts/MainLayout'
import Logout from 'pages/Logout'

const routes = [
  routerCollection(
    {
      path: '/',
      name: 'index',
      component: MainLayout,
      meta: {
        preloader: {
          store: 'oarepoCollection'
        },
        title: 'Records'
      },
      props: query([
        '1000:string:q',
        'number:page:1',
        'array:creator',
        'array:title.lang'
      ], {
        collectionId: 'records'
      })
    }),
  {
    name: 'Error404',
    path: '/error/404',
    component: Error404
  },
  {
    name: 'Logout',
    path: '/logout',
    component: Logout
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
