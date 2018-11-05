import Vue from "vue";
import Router from "vue-router";
import Buefy from "buefy";
import Homepage from "@/components/home";
import OurTeam from "@/components/team";
import Schedule from "@/components/schedules";
import Speakers from "@/components/speakers";

import "buefy/dist/buefy.css";
import "../assets/stylesheet/style.css";

Vue.use(Router);
Vue.use(Buefy);

export default new Router({
  mode: "history",
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
    },
    {
      path: "/schedule",
      name: "Schedule",
      component: Schedule
    },
    {
      path: "/speakers",
      name: "Speakers",
      component: Speakers
    }
  ]
});
