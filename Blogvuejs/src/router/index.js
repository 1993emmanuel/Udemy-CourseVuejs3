import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import ForgotPassword from '../views/ForgotPassword.vue';
import Admin from '../views/Admin.vue';
import Profile from '../views/Profile.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      title:  'HOME',
    }
  },
  {
    path : '/blogs',
    name : 'Blogs',
    component: Blogs,
    meta :{
      title : 'BLOGS',
    }
  },
  {
    path: '/login',
    name : 'Login',
    component: Login,
    meta : {
      title : 'LOGIN',
    }
  },
  {
    path : '/register',
    name : 'Register',
    component : Register,
    meta : {
      title : 'REGISTER',
    }
  },
  {
    path : '/forgot-password',
    name : 'ForgotPassword',
    component: ForgotPassword,
    meta : {
      title : 'FORGOTPASSWORD',
    }
  },
  {
    path : '/admin',
    name : 'Admin',
    component : Admin,
    meta : {
      title : 'ADMIN',
    }
  },
  {
    path : '/profile',
    name : 'Profile',
    component : Profile,
    meta : {
      title : 'PROFILE',
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to,from,next)=>{
  document.title = `${to.meta.title} | FireBlog `;
  next();
});

export default router;
