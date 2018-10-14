<template>
    <div>
        <section class="hero">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        GDG NORTH CENTRAL DEVFEST 2018 
                    </h1>
                    <div class="subtitle level event_link">
                        <a style="color: #fff;" href="#" class="level-item">
                            <span class="is-vertical event_info_link" >WATCH TRAILER</span> 
                            <b-icon icon="arrow-right-bold-circle" class="event_link_icon"></b-icon>
                        </a> 
                    </div>
                </div>
            </div>
        </section>
        <section class="content">
            <div class="columns is-tablet">
                <div class="column is-half-tablet">
                    <h1 class="title">ORGANIZING CHAPTERS</h1>
                    <p class="body">
                        GDG Abuja, GDG Keffi, GDG Lafia, GDG Makurdi, GDG Minna 
                    </p>
                </div>
                <div class="column is-half-tablet">
                    <h1 class="title">WHAT IS GDG?</h1>
                    <p class="body">
                        Google Developers Group (GDG) - is open and volunteer geek community 
                        who create exciting projects and share experience about Google technologies 
                        with a passion 
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
.hero{
    background: #673AB7;
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
</style>
