<template>
    <div class=" content">
        <h1 class="title">ORGANIZERS</h1>
        <div class="columns">
            <div class="column is-6">
                <div class="columns is-mobile">
                    <div class="column is-6">
                        <figure class="image is-128x128">
                            <img class="is-rounded" src="../assets/people/auwal.jpg">
                            <h3>Auwal MS</h3>
                            <p class="organizers_desc">Lafia, Nigeria</p>
                        </figure>
                        
                    </div>
                    <div class="column is-6">
                        <figure class="image is-128x128">
                            <img class="is-rounded" src="../assets/people/bulama.jpg">
                            <h3>Bulama Yusuf</h3>
                            <p class="organizers_desc">Abuja, Nigeria</p>
                        </figure>
                        
                    </div>
                </div>
            </div>
            <div class="column is-6">
                <div class="columns is-mobile">
                    <div class="column is-6">
                        <figure class="image is-128x128">
                            <img class="is-rounded" src="../assets/people/abdullahi.jpeg">
                            <h3>Abdullahi Aliyu</h3>
                            <p class="organizers_desc">Lafia, Nigeria</p>
                        </figure>   
                    </div>
                    <div class="column is-6">
                        <figure class="image is-128x128">
                            <img class="is-rounded" src="../assets/people/umar.png">
                            <h3>Umar Saidu Auna</h3>
                            <p class="organizers_desc">Minna, Nigeria</p>
                        </figure>    
                    </div>
                </div>
            </div>
        </div>
        <div class="level event_info_wrapper">
            <div class="level-left event_link">
                <a target="_blank" href="#" class="level-item ">
                    <span class="is-vertical event_info_link" >VIEW ALL SPEAKERS</span> 
                    <b-icon icon="arrow-right-bold-circle" class="event_link_icon"></b-icon>
                </a> 
            </div>
        </div>    
    </div>
</template>

<style>
.content figure {
    margin: auto;
    text-align: center;
    margin-bottom: 60px;
}
figure .gdg-logo{
    height: 16px;
}

.content h3, .content .organizers_desc{
    margin: auto;
    font-family: "roboto", sans-serif;
    text-align: center;  
}
.content h1, .content h2, .content h3, .content h4, .content h5, .content h6 {
    color: #4d4d4d;
    font-weight: normal;
    margin-top: 30px;
}
.content h3{
    font-size: 20px;
}
.content h3:not(:first-child){
    margin-top: 0px;
}
.content .organizers_desc{
    font-size: 12px;
    color: #4d4d4d;
}
.event_link{
    padding: 10px;
    font-size: 14px;
}
.event_link a{
    color: #673AB7;
}
.event_link:hover{
    background: lightgray;
    -webkit-transition: background 0.5s; /* Safari */
    transition: background 0.5s;
}
.event_info_link:hover{
    margin-right: 8px;
    -webkit-transition: margin-right 0.5s; /* Safari */
    transition: margin-right 0.5s;
}
.event_link_icon{
    margin-left: 8px;      
}
.event_link_icon:hover{
    margin-left: 16px; 
    -webkit-transition: margin-left 0.5s; /* Safari */
    transition: margin-left 0.5s;     
}
@media screen and (max-width: 767px){
    .image.is-128x128 {
        height: 80px;
        width: 80px;
    }
    .content h3{
        font-size: 14px;
    }
}
</style>
