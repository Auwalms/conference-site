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
                    <div class="card card-wrapper" @click="isRegModalActive = true">
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
                    <div class="card card-wrapper" @click="isNetModalActive = true">
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
                    <div class="card card-wrapper" @click="isKeynoteModalActive = true">
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
                    <div class="card card-wrapper" @click="isSessionOneModalActive = true">
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
                    <div class="card card-wrapper" @click="isSessionTwoModalActive = true">
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
                    <div class="card card-wrapper" @click="isSessionThreeModalActive = true">
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
                    <div class="card card-wrapper" @click="isCardModalActive = true">
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
                    <div class="card card-wrapper" @click="isCardModalActive = true">
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
                    <div class="card card-wrapper" @click="isCardModalActive = true">
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
                    <div class="card card-wrapper" @click="isCardModalActive = true">
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
                    <div class="card card-wrapper" @click="isCardModalActive = true">
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
                    <div class="card card-wrapper" @click="isCardModalActive = true">
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
                    <div class="card card-wrapper" @click="isCardModalActive = true">
                        <div class="card-content">
                            <p class="schedule-title" >Closing Remark</p> 
                            <p>English / Hall A</p>    
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Modal Section -->

        <!-- Registration modal -->
        <b-modal :active.sync="isRegModalActive" :width="640" scroll="keep">
            <div class="card">
                <div class="hero is-medium">
                    <section class="hero is-medium speaker-wrapper-general ">
                        <!-- Hero content: will be in the middle -->
                        <div class="hero-body">
                            <div class="container has-text-left">
                                <img class="modal-img" src="../assets/logos/logo-white.svg" alt="">
                                <p class="title">    
                                    Event Registration and Check-ins
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="card-content modal-content">
                    <h3> November 11, 08:00 - 09:00</h3>
                    <h3>Hall A </h3> 
                    <br>
                    <p class="has-text-justified" style="font-size: 14px">Attendees Regitration and check-ins</p>
                </div>
            </div>
        </b-modal>

        <!-- Networking Modal -->
        <b-modal :active.sync="isNetModalActive" :width="640" scroll="keep">
            <div class="card">
                <div class="hero is-medium">
                    <section class="hero is-medium speaker-wrapper-general ">
                        <!-- Hero content: will be in the middle -->
                        <div class="hero-body">
                            <div class="container has-text-left">
                                <img class="modal-img" src="../assets/logos/logo-white.svg" alt="">
                                <p class="title">    
                                    Networking
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="card-content modal-content">
                    <h3> November 11, 09:00 - 10:00</h3>
                    <h3>Hall A </h3> 
                    <br>
                    <p class="has-text-justified" style="font-size: 14px">Networking</p>
                </div>
            </div>
        </b-modal>

        <!-- Keynote Modal -->
        
        <b-modal :active.sync="isKeynoteModalActive" :width="640" scroll="keep">
            <div class="card">
                <div class="hero is-medium">
                    <section class="hero is-medium speaker-wrapper-general ">
                        <!-- Hero content: will be in the middle -->
                        <div class="hero-body">
                            <div class="container ">
                                <img class="modal-img" src="../assets/logos/logo-white.svg" alt="">
                                <p class="title">    
                                    Keynote
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="card-content modal-content">
                    <h3> November 11, 1:30 - 2:00</h3>
                    <h3>Hall A </h3>
                    <br>
                    <!-- <p class="has-text-justified" style="font-size: 14px">In this talk, Prosper Otemuyiwa will unleash the fire and inspire developers to contribute to Open Source and it's ecosystem. Using Open Source tools is a no brainer for most of us developers, but do we have the right attitude and passion to support and contribute back to the community? Don't miss this talk to find out.</p> -->
                    <hr>
                    <h1 style="padding-bottom: 10px;">Speakers</h1>
                    <div class="media columns">
                    <div class=" column">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img class="is-rounded" src="../assets/people/prosper.jpg" alt="Image">
                            </figure>
                        </div>
                        
                        <div class="media-content">
                            <p class="title is-6">Aniedi Udo Ubong</p>
                            <p class="subtitle is-6">Google / Nigeria</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img class="is-rounded" src="../assets/people/bulama.jpg" alt="Image">
                            </figure>
                        </div>
                        
                        <div class="media-content">
                            <p class="title is-6">Bulama Yusuf</p>
                            <p class="subtitle is-6">Intapps / Nigeria</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </b-modal>

        <!-- session one modal -->
        <b-modal :active.sync="isSessionOneModalActive" :width="640" scroll="keep">
            <div class="card">
                <div class="hero is-medium">
                    <section class="hero is-medium speaker-wrapper-android ">
                        <!-- Hero content: will be in the middle -->
                        <div class="hero-body">
                            <div class="container ">
                                <img class="modal-img" src="../assets/logos/logo-white.svg" alt="">
                                <p class="title">    
                                    Kotlin What's In For Android Developers
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="card-content modal-content">
                    <h3> November 11, 11:00 - 11:30</h3>
                    <h3>Hall A </h3> 
                    <h3>Content Level: Intermediate</h3> 
                    <br>
                    <p class="has-text-justified" style="font-size: 14px">In this talk, Prosper Otemuyiwa will unleash the fire and inspire developers to contribute to Open Source and it's ecosystem. Using Open Source tools is a no brainer for most of us developers, but do we have the right attitude and passion to support and contribute back to the community? Don't miss this talk to find out.</p>
                    <hr>
                    <h1 style="padding-bottom: 10px;">Speaker</h1>
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img class="is-rounded" src="../assets/people/prosper.jpg" alt="Image">
                            </figure>
                        </div>
                        
                        <div class="media-content">
                            <p class="title is-6">Micheal Obi</p>
                            <p class="subtitle is-6">GDG Abuja / Nigeria</p>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>        

        <!-- session two modal -->
        <b-modal :active.sync="isSessionTwoModalActive" :width="640" scroll="keep">
            <div class="card">
                <div class="hero is-medium">
                    <section class="hero is-medium speaker-wrapper-cloud ">
                        <!-- Hero content: will be in the middle -->
                        <div class="hero-body">
                            <div class="container ">
                                <img class="modal-img" src="../assets/logos/logo-white.svg" alt="">
                                <p class="title">    
                                    Place Detection with Vision API
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="card-content modal-content">
                    <h3> November 11, 11:00 - 11:30</h3>
                    <h3>Hall A </h3> 
                    <h3>Content Level: Intermediate</h3> 
                    <br>
                    <p class="has-text-justified" style="font-size: 14px">In this talk, Prosper Otemuyiwa will unleash the fire and inspire developers to contribute to Open Source and it's ecosystem. Using Open Source tools is a no brainer for most of us developers, but do we have the right attitude and passion to support and contribute back to the community? Don't miss this talk to find out.</p>
                    <hr>
                    <h1 style="padding-bottom: 10px;">Speaker</h1>
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img class="is-rounded" src="../assets/people/prosper.jpg" alt="Image">
                            </figure>
                        </div>
                        
                        <div class="media-content">
                            <p class="title is-6">Peter Adache</p>
                            <p class="subtitle is-6">FlexiSaf Edusoft / Nigeria</p>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>

        <b-modal :active.sync="isSessionThreeModalActive" :width="640" scroll="keep">
            <div class="card">
                <div class="hero is-medium">
                    <section class="hero is-medium speaker-wrapper-web ">
                        <!-- Hero content: will be in the middle -->
                        <div class="hero-body">
                            <div class="container ">
                                <img class="modal-img" src="../assets/logos/logo-white.svg" alt="">
                                <p class="title">    
                                    Faster frontend development with Vuejs
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="card-content modal-content">
                    <h3> November 11, 11:30 - 12:00</h3>
                    <h3>Hall A </h3> 
                    <h3>Content Level: Intermediate</h3> 
                    <br>
                    <p class="has-text-justified" style="font-size: 14px">In this talk, Prosper Otemuyiwa will unleash the fire and inspire developers to contribute to Open Source and it's ecosystem. Using Open Source tools is a no brainer for most of us developers, but do we have the right attitude and passion to support and contribute back to the community? Don't miss this talk to find out.</p>
                    <hr>
                    <h1 style="padding-bottom: 10px;">Speaker</h1>
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img class="is-rounded" src="../assets/people/prosper.jpg" alt="Image">
                            </figure>
                        </div>
                        
                        <div class="media-content">
                            <p class="title is-6">Muhammed Kabir</p>
                            <p class="subtitle is-6">Code Craft  / Nigeria</p>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>

        <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
            <div class="card">
                <div class="hero is-medium">
                    <section class="hero is-medium speaker-wrapper-general ">
                        <!-- Hero content: will be in the middle -->
                        <div class="hero-body">
                            <div class="container ">
                                <img class="modal-img" src="../assets/logos/logo-white.svg" alt="">
                                <p class="title">    
                                    The Open Source Community
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="card-content modal-content">
                    <h3> November 11, 1:30 - 2:00</h3>
                    <h3>Hall A </h3> 
                    <h3>Content Level: Beginner</h3> 
                    <br>
                    <p class="has-text-justified" style="font-size: 14px">In this talk, Prosper Otemuyiwa will unleash the fire and inspire developers to contribute to Open Source and it's ecosystem. Using Open Source tools is a no brainer for most of us developers, but do we have the right attitude and passion to support and contribute back to the community? Don't miss this talk to find out.</p>
                    <hr>
                    <h1 style="padding-bottom: 10px;">Speaker</h1>
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img class="is-rounded" src="../assets/people/prosper.jpg" alt="Image">
                            </figure>
                        </div>
                        
                        <div class="media-content">
                            <p class="title is-6">Prosper Otemuyiwa</p>
                            <p class="subtitle is-6">Auth0 / Nigeria</p>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>
        <div>
            <Pagefooter/>
        </div>
    </div>
    
</template>

<script>
import Navbar from "./navbar";
import Pagefooter from "./footer";
export default {
    name: "team",
    data(){
        return {
            msg: "Schedules",
            isRegModalActive: false,
            isNetModalActive: false,
            isKeynoteModalActive: false,
            isSessionOneModalActive: false,
            isSessionTwoModalActive: false,
            isSessionThreeModalActive: false,
            isCardModalActive: false
        }
    },
    components : {
        Navbar,
        Pagefooter
    }
}
</script>

