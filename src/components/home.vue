<template>
    <div class="container-fluid">
        <div id="cover" class="hero is-fullheight">
           <div class="hero-overlay"></div>
           <Navbar/>
           <Body_hero/>

        </div>
        <event_info/>
        <organizers/>
        <chapters/>
        <registration/>
        <latestnews/>
        <eventmap/>
        <sponsors/>
        <pagefooter/>
    </div>
</template>

<script>
import Navbar from "./navbar";
import Body_hero from "./body_hero";
import Event_info from "./event_info";
import Organizers from "./organizers";
import Chapters from "./chapters";
import Registration from "./registration";
import Latestnews from "./latestnews";
import Eventmap from "./map";
import Sponsors from "./sponsors";
import Pagefooter from "./footer"
import $ from "jquery";
export default {
    name: "homepage",
    data(){
        return{
        }
    },
    components : {
        Navbar,
        Body_hero,
        Event_info,
        Organizers,
        Chapters,
        Registration,
        Latestnews,
        Eventmap,
        Sponsors,
        Pagefooter
    }
}

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
</script>

