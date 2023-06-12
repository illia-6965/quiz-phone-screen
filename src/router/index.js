import { createRouter, createWebHistory } from 'vue-router'
import PopUpWindow from '@/components/PopUpWindow'
import MainPage from '@/components/MainPage' 
import PagesWithQuestions from '@/components/pages/PagesWithQuestions'
const routes = [
  {
    name: 'MainPage',
    path: '/',
    component: MainPage
  },
  {
    path: '/WindowFromBurger',
    component: PopUpWindow
  },
  {
    path: '/passTest',
    component: PagesWithQuestions
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
