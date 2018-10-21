import Vue from "vue";
import Router from "vue-router";
import Buefy from "buefy";
import Homepage from "@/components/home";
import OurTeam from "@/components/team";

import "buefy/dist/buefy.css";
import "../assets/stylesheet/style.css";

Vue.use(Router);
Vue.use(Buefy);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage
    },
    {
      path: "/our-team",
      name: "OurTeam",
      component: OurTeam
    }
  ]
});
