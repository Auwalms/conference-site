<template>
    <div class="container-fluid">
        <section class="hero is-medium schedule-nav">
            <!-- Hero head: will stick at the top -->
            <div class="hero-head">
                <navbar/>
            </div>

            <!-- Hero content: will be in the middle -->
            <div class="hero-body">
                <div class="container has-text-left">
                    <img style="width: 200px;" id="team-img" src="../assets/logos/logo-white.svg" alt="">
                    <p class="title">    
                        Schedules
                    </p>
                </div>
            </div>
        </section>
        <section class="schedules-wrapper container">
            <div class="schedule-header card level">
                <div class="tabs" style="font-size: 14px;">
                <ul>
                    <li class="is-active"><a>November 24</a></li>
                </ul>
                </div>
            </div>
            <div style="padding-bottom:40px; font-size:12px;">
                <small>
                    <b-icon pack="fas" icon="circle" size="is-small" style="color:#737373"></b-icon>
                    General
                </small>
                <small>
                    <b-icon pack="fas" icon="circle" size="is-small" style="color:#78c257"></b-icon>
                    Android
                </small>
                <small>
                    <b-icon pack="fas" icon="circle" size="is-small" style="color:#2196f3"></b-icon>
                    Web
                </small>
                <small>
                    <b-icon pack="fas" icon="circle" size="is-small" style="color:#3f51b5"></b-icon>
                    Cloud
                </small>  
            </div>
            
                
            <div class="columns">
                <div class="column is-2 time has-text-right-desktop">
                    <span class="hour">
                        08
                    </span>
                    <span class="minute">
                        00
                    </span>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isImageModalActive = true">
                        <div class="card-content">
                            <p class="schedule-title" >Attendance Registration & Check-in</p> 
                            <p>English/Hall A</p>   
                        </div>
                        <small class="time-taken">
                            1 hour
                        </small>
                        <br><br>
                    </div>
                </div>
            </div>

            <div class="columns">
                <div class="column is-2 time has-text-right-desktop">
                    <span class="hour">
                        09
                    </span>
                    <span class="minute">
                        00
                    </span>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isImageModalActive = true">
                        <div class="card-content">
                            <p class="schedule-title" >Networking</p> 
                            <p>English/Hall A</p>    
                        </div>
                        <small class="time-taken">
                            1 hour
                        </small>
                        <br><br>
                    </div>
                </div>
            </div>

            <div class="columns">
                <div class="column is-2 time has-text-right-desktop">
                    <span class="hour">
                        10
                    </span>
                    <span class="minute">
                        00
                    </span>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isImageModalActive = true">
                        <div class="card-content">
                            <p class="schedule-title" >Keynote</p> 
                            <p>English/Hall A</p>  
                        </div>
                        <div class="speaker-wrapper speaker-wrapper-general level">
                            <div class="level-left">
                                <div class="speaker-detail">
                                    <div style="margin-right:10px">
                                        <b-icon 
                                            icon="account">
                                        </b-icon> 
                                    </div>
                                    <span >Aniedi Udo-Ubong
                                        <br>
                                        <small>Google / Nigeria</small>
                                    </span>
                                </div>
                                <div class="speaker-detail" >
                                    <div style="margin-right:10px">
                                        <b-icon 
                                            icon="account">
                                        </b-icon> 
                                    </div>
                                    <span >Bulama Yusuf
                                        <br>
                                        <small>GDG Abuja / Abuja, Nigeria</small>
                                    </span>
                                </div>
                            </div>   
                        </div>   
                    </div>
                </div>
            </div>

            <div class="columns">
                <div class="column is-2 time has-text-right-desktop">
                    <span class="hour">
                        11
                    </span>
                    <span class="minute">
                        00
                    </span>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isImageModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Kotlin, What's in it for Android Developers</p> 
                            <p>English / Intermediate / Hall A</p>      
                        </div>
                        <small class="track-tag">
                            <b-icon icon="tag" size="is-small"></b-icon>
                            Android
                        </small>
                        <div class="speaker-wrapper speaker-wrapper-android level">
                            <div class="level-left">
                                <div class="speaker-detail">
                                    <div style="margin-right:10px">
                                        <b-icon 
                                            icon="account">
                                        </b-icon> 
                                    </div>
                                    <span >Michael Obi
                                        <br>
                                        <small>GDG Abuja / Abuja, Nigeria</small>
                                    </span>
                                </div>
                            </div>   
                        </div>   
                    </div>
                    
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isImageModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Place Detection Using Vision API</p> 
                            <p>English / Intermediate / Hall B</p>      
                        </div>
                        <small class="track-tag">
                            <b-icon icon="tag" size="is-small"></b-icon>
                            Cloud, Machine Learning
                        </small> 
                        <div class="speaker-wrapper speaker-wrapper-cloud level">
                            <div class="level-left">
                                <div class="speaker-detail">
                                    <div style="margin-right:10px">
                                        <b-icon 
                                            icon="account">
                                        </b-icon> 
                                    </div>
                                    <span >Peter Adache
                                        <br>
                                        <small>Flexisaf Edusoft / Nigeria</small>
                                    </span>
                                </div>
                            </div>   
                        </div>   
                    </div>
                    
                </div>
            </div>
            
            <div class="columns">
                <div class="column is-2 time has-text-right-desktop">
                    <span class="hour">
                        11
                    </span>
                    <span class="minute">
                        30
                    </span>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isImageModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Faster Frontend Development with Vuejs</p> 
                            <p>English / Intermediate / Hall A</p>   
                        </div>
                        <small class="track-tag">
                            <b-icon icon="tag" size="is-small"></b-icon>
                            Web
                        </small> 
                        <div class="speaker-wrapper speaker-wrapper-web level">
                            <div class="level-left">
                                <div class="speaker-detail">
                                    <div style="margin-right:10px">
                                        <b-icon 
                                            icon="account">
                                        </b-icon> 
                                    </div>
                                    <span >Muhammed Kabir
                                        <br>
                                        <small>Code Craft / Nigeria</small>
                                    </span>
                                </div>
                            </div>   
                        </div>   
                    </div>
                    
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isImageModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Machine Learning at a Glance</p> 
                            <p>English / Intermediate / Hall B</p>       
                        </div>
                        <small class="track-tag">
                            <b-icon icon="tag" size="is-small"></b-icon>
                            Cloud, Machine Learning
                        </small>
                        <div class="speaker-wrapper speaker-wrapper-cloud level">
                            <div class="level-left">
                                <div class="speaker-detail">
                                    <div style="margin-right:10px">
                                        <b-icon 
                                            icon="account">
                                        </b-icon> 
                                    </div>
                                    <span >Banso D. Wisdom Adache
                                        <br>
                                        <small>Flexisaf Edusoft / Nigeria</small>
                                    </span>
                                </div>
                            </div>   
                        </div>   
                    </div>
                    
                </div>
            </div>
            <div class="columns">
                <div class="column is-2 time has-text-right-desktop">
                    <span class="hour">
                        12
                    </span>
                    <span class="minute">
                        00
                    </span>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isImageModalActive = true">
                        <div class="card-content">
                            <p class="schedule-title" >Lunch Break</p> 
                            <p>Hall A</p>    
                        </div>
                    </div>
                </div>
            </div>

            <div class="columns">
                <div class="column is-2 time has-text-right-desktop">
                    <span class="hour">
                        01
                    </span>
                    <span class="minute">
                        00
                    </span>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isImageModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Offline First and Mobile First: Moving From Website to Progressive Web App</p> 
                            <p>English / Intermediate / Hall A</p>      
                        </div>
                        <small class="track-tag">
                            <b-icon icon="tag" size="is-small"></b-icon>
                            Web, PWA
                        </small>
                        <div class="speaker-wrapper speaker-wrapper-web level">
                            <div class="level-left">
                                <div class="speaker-detail">
                                    <div style="margin-right:10px">
                                        <b-icon 
                                            icon="account">
                                        </b-icon> 
                                    </div>
                                    <span>Dimgba Kalu
                                        <br>
                                        <small> Projaro Abuja / Nigeria</small>
                                    </span>
                                </div>
                            </div>   
                        </div>   
                    </div>
                    
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isImageModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Let it Crash - Techniques for Building Highly Available Software</p> 
                            <p>English / Intermediate / Hall B</p>      
                        </div>
                        <small class="track-tag">
                            <b-icon icon="tag" size="is-small"></b-icon>
                            Web
                        </small> 
                        <div class="speaker-wrapper speaker-wrapper-web level">
                            <div class="level-left">
                                <div class="speaker-detail">
                                    <div style="margin-right:10px">
                                        <b-icon 
                                            icon="account">
                                        </b-icon> 
                                    </div>
                                    <span >Shuaib Afegbua
                                        <br>
                                        <small>ECTORIUM / Nigeria</small>
                                    </span>
                                </div>
                            </div>   
                        </div>   
                    </div>
                </div>
            </div>
            
            <div class="columns">
                <div class="column is-2 time has-text-right-desktop">
                    <span class="hour">
                        01
                    </span>
                    <span class="minute">
                        30
                    </span>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isImageModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >The Open Source Community</p> 
                            <p>English / Beginner / Hall A</p>     
                        </div>
                            <small class="track-tag">
                                <b-icon icon="tag" size="is-small"></b-icon>
                                General
                            </small> 
                        <div class="speaker-wrapper speaker-wrapper-general level">
                            <div class="level-left">
                                <div class="speaker-detail">
                                    <div style="margin-right:10px">
                                        <b-icon 
                                            icon="account">
                                        </b-icon> 
                                    </div>
                                    <span>Prosper Otemuyiwa
                                        <br>
                                        <small> Auth0 / Nigeria</small>
                                    </span>
                                </div>
                            </div>   
                        </div>   
                    </div>   
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isImageModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Moving to Kubernetes or not?</p> 
                            <p>English / Intermediate / Hall B</p>    
                        </div>
                        <small class="track-tag">
                            <b-icon icon="tag" size="is-small"></b-icon>
                            Cloud
                        </small>
                        <div class="speaker-wrapper speaker-wrapper-cloud level">
                            <div class="level-left">
                                <div class="speaker-detail">
                                    <div style="margin-right:10px">
                                        <b-icon 
                                            icon="account">
                                        </b-icon> 
                                    </div>
                                    <span >Abdulbasit Kabir
                                        <br>
                                        <small>Flexisaf / Nigeria</small>
                                    </span>
                                </div>
                            </div>   
                        </div>   
                    </div>
                </div>
            </div>

            <div class="columns">
                <div class="column is-2 time has-text-right-desktop">
                    <span class="hour">
                        02
                    </span>
                    <span class="minute">
                        00
                    </span>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isImageModalActive = true">
                        <div class="card-content">
                            <p class="schedule-title" >Closing Remark</p> 
                            <p>English/Hall A</p>    
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <b-modal :active.sync="isImageModalActive">
            <p class="image is-4by3">
                <img src="/static/img/placeholder-1280x960.png">
            </p>
        </b-modal>
        <div>
            <Pagefooter/>
        </div>
    </div>
    
</template>

<style>
section.schedules-wrapper{
    margin-top: 50px; 
    padding:10px;
}

section.schedule-nav{
    box-shadow: 0 5px 6px -3px rgba(0, 0, 0, 0.4); 
    font-weight: lighter;
}

div.time{
    color: #737373;
}

span.hour{
    font-family: sans-serif; 
    font-size: 56px; 
    font-weight: 100; 
    letter-spacing: -0.04em;
}

span.minute{
    margin-left: -10px; 
    font-size: 20px;
}

div.session-content{
    min-height: 150px;
}

p.schedule-title{
    font-size: 20px; 
    color: #212121;
    line-height: 22px;
    padding-bottom: 5px;
}

small.time-taken{
    padding: 24px;
    font-size:12px;
}

small.track-tag{
   font-size:11px;
   padding: 5px 20px;
}

div.card-wrapper:hover{
    box-shadow: 0 2px 3px rgba(0, 0 , 0, 0.7);
    cursor: pointer;
}
.card{
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 
                0 1px 5px 0 rgba(0, 0, 0, 0.12), 
                0 3px 1px -2px rgba(0, 0, 0, 0.2);
    -webkit-transition: box-shadow 0.4s; /* Safari */
    transition: box-shadow 0.4s;
}

div.speaker-wrapper{
    color: #fff; 
    line-height: 1;
}

div.speaker-wrapper-general{
    background: #737373; 
}

div.speaker-wrapper-cloud{
    background: #3f51b5; 
}

div.speaker-wrapper-web{
    background: #2196f3; 
}

div.speaker-wrapper-android{
    background: #78c257; 
}

div.speaker-detail{
    display: flex; 
    padding: 12px 24px;
}

</style>


<script>
import Navbar from "./navbar";
import Pagefooter from "./footer";
export default {
    name: "team",
    data(){
        return {
            msg: "Hello Team",
            isImageModalActive: false
        }
    },
    components : {
        Navbar,
        Pagefooter
    }
}
</script>
