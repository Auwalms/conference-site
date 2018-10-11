<template>
    <div class="hero-body">
        <div class="container has-text-centered">
            <img class="title" id="img" alt="GDG DevFest Season 2018" src="../assets/logo.svg">
            <div class="title">
                North Central Nigeria. November 17, 2018 <br>
                Be a hero. Be a GDG!
            </div>
        </div>    
    </div>
</template>
<script>
export default {
    
}
</script>

<style>
.hero-body #img{
    max-width: 320px;
    width: 100%;
    height: 100%;
}
.hero-body .title{
    font-family: "Product Sans", arial, sans-serif;
    color: white;
    font-size: 28px;
    font-weight: 100;
}
@media screen and (max-width: 768px) {

    .hero-body #img{
        max-width: 240px;
    }
    .hero-body .title{
        font-size: 22px;
    }
}
</style>

