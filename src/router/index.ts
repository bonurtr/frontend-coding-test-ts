import type { App } from 'vue'
import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router'
import LayoutMain from '../components/layout/LayoutMain.vue'
import Error from '../views/Error.vue'
import Home from '../views/Home.vue'
import ExerciseOne from '../views/ExerciseOne.vue'
import StarWars from '../views/StarWars.vue'



const mainRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home,
  },
  {
    path: '/exerciseone',
    name: 'ExerciseOne',
    props: true,
    component: ExerciseOne,
  },
  {
    path: '/swapi',
    name: 'swapi',
    props: true,
    component: StarWars,
  },
]

const routes: RouteRecordRaw[] = [
 
  {
    path: '/error',
    alias: '/:pathMatch(.*)*',
    name: 'Error',
    props: true,
    component: Error,
  },
  {
    path: '/',
    props: true,
    component: LayoutMain,
    children: mainRoutes,
  },
]

export default function initializeRouter(app: App): Router {
  const router: Router = createRouter({
    history: createWebHistory(),
    routes,
  })



  app.use(router)

  return router
}
