<template>
    <div>
        <div id="cover" class="hero is-fullheight">
           <div class="hero-overlay"></div>
           <Navbar/> 
           <Body_hero/>
        </div> 
    </div> 
</template>

<script>
import Navbar from "./navbar";
import Body_hero from "./body_hero";
import $ from "jquery";
export default {
    name: "homepage",
    data(){
        return{
            msg :"Welcome to Buefy"
        }
    },
    components : {
        Navbar,
        Body_hero
    }
}

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
</script>

<style>
    #cover { 
    background: url(../assets/home.jpg) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
    box-shadow: 0 5px 5px -3px gray;
  }  
    

#cover .hero-overlay {
    position: absolute;
    display: block;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    
}
#app.container{
    max-width: none !important;
    width: 100%; 
}



</style>
