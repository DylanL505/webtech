import { createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";
import News from "@/views/News.vue";
import Login from "@/views/Login.vue";
import Account from "@/views/Account.vue";
import About from "@/views/About.vue";

export default createRouter( {
  history: createWebHistory(),
  routes: [
      { path: '/', component: Home},
      { path: '/news', component: News},
      { path: '/login', component: Login},
      { path: '/account', component: Account},
      { path: '/about', component: About}
  ]
})