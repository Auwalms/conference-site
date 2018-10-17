<template>
    <nav class="navbar is-fixed-top ">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src="../assets/logo-monochrome.svg" alt="Bulma: a modern CSS framework based on Flexbox" width="150" height="32">
                </a>
                <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        
            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-start">
                </div>
        
                <div class="navbar-end">
                    <a class="navbar-item active" href="https://bulma.io/">
                        HOME
                    </a>
                    <a class="navbar-item" href="#">
                        SPEAKERS
                    </a>
                    <a class="navbar-item" href="#">
                        SCHEDULES
                    </a>
                    <a class="navbar-item" href="#">
                        TEAM
                    </a>
                    <a class="navbar-item" href="#">
                        BLOG
                    </a>
                    <div class="navbar-item">
                        <div class="field is-grouped">
                                <p class="control">
                                    <a class="button is-purple" href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
                                        <span>REGISTER</span>
                                    </a>
                                </p>
                            <p class="control">
                                <a class="bd-tw-button button is-info" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Yoo I'm attending North Central DEVFEST18 &amp;hashtags=ncDevFest18&amp;">
                                    <b-icon
                                        icon="twitter">
                                    </b-icon>
                                    <span>
                                        Tweet
                                    </span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

            // Add a click event on each of them
            $navbarBurgers.forEach( el => {
                el.addEventListener('click', () => {

                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');

                });
            });
    }

	});
</script>
<style>
.navbar {
    background-color: transparent;
    min-height: 65px;
    -webkit-transition: background-color 1s; /* Safari */
    transition: background-color 1s;
}
@media screen and (min-width: 1088px) {
    .navbar-item {
        color: #f5f5f5;
        font-size: 14px;
        font-weight: bold;
    }
    .navbar-item.active {
    border-bottom: 2px solid #673AB7;
}
}

.navbar-burger, .navbar-burger.is-active{
    color: #fff;
}
.navbar-item img {
max-height: 32px;
}
.navbar.scrolled {
background-color: #fff;
-webkit-transition: background-color 1s; /* Safari */
transition: background-color 1s;
}
.navbar.scrolled .navbar-item{
color: gray;
}

.navbar.scrolled .navbar-burger{
    color: gray;
}
	
  
 
</style>


