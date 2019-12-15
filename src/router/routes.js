//注册路由

import Msite from "@/pages/Msite/Msite.vue";
import Search from "@/pages/Search/Search.vue";
import Order from "@/pages/Order/Order.vue";
import Profile from "@/pages/Profile/Profile.vue";
import Login from "@/pages/Login/Login.vue";
export default[
  //注册路由
  {
    path:"/msite",
    component:Msite,
    //路由元信息
    meta:{
      isShowFooter:true
    }
  },
  {
    path:"/search",
    component:Search,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:"/order",
    component:Order,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:"/profile",
    component:Profile,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:"/login",
    component:Login
  },

  {
    path:'/',
    redirect:'/msite'
  }

]