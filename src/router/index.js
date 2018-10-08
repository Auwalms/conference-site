import Vue from "vue";
import Router from "vue-router";
import Buefy from "buefy";
import Homepage from "@/components/home";

import "buefy/dist/buefy.css";

Vue.use(Router);
Vue.use(Buefy);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage
    }
  ]
});
