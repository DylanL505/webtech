import { createRouter, createWebHistory} from "vue-router";
//main pages
import Home from "@/views/Home.vue";
import News from "@/views/News.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/signup.vue"
import Account from "@/views/Account.vue";
import About from "@/views/About.vue";
import Admin from "@/views/Admin.vue"

//news subpages
import WWENews from "@/views/WWENews.vue";
import AEWNews from "@/views/AEWNews.vue";
import TNANews from "@/views/TNANews.vue";
import INDYNews from "@/views/INDYNews.vue";

//sub-sub pages
import wwenews1 from "@/views/wwenews1.vue";
import aewnews1 from "@/views/aewnews1.vue";
import tnanews1 from "@/views/tnanews1.vue";
import indynews1 from '@/views/indynews1.vue';

import setStory from "@/views/setStory.vue";

export default createRouter( {
  history: createWebHistory(),
  routes: [
      { path: '/', component: Home},
      { path: '/news', component: News},
      { path: '/login', component: Login},
      { path: '/signup', component: Signup},
      { path: '/account', component: Account},
      { path: '/about', component: About},
      { path: '/admin', name: 'Admin', component: Admin, meta: {title: 'Admin Panel' }},

      { path: '/news/wwe', component: WWENews},
      { path: '/news/aew', component: AEWNews},
      { path: '/news/tna', component: TNANews},
      { path: '/news/indy', component: INDYNews},

      { path: '/news/news/wwe/wwenews1', component: wwenews1},
      { path: '/news/news/aew/aewnews1', component: aewnews1},
      { path: '/news/news/tna/tnanews1', component: tnanews1},
      { path: '/news/news/indy/indynews1', component: indynews1},

      { path: '/recent-news', component: setStory}
  ]
})