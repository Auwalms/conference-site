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
                        09
                    </span>
                    <span class="minute">
                        00
                    </span>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isRegModalActive = true">
                        <div class="card-content">
                            <p class="schedule-title" >Check-in and Registration</p>
                            <p>English/Main Hall</p>
                        </div>
                        <small class="time-taken">
                            1 Hour
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
                            <p>English/Main Hall</p>
                        </div>
                        <div class="speaker-wrapper speaker-wrapper-general level">
                            <div class="level-left">
                                <div class="speaker-detail">
                                    <div style="margin-right:10px">
                                        <b-icon
                                            icon="account">
                                        </b-icon>
                                    </div>
                                    <span >Fola Olatunji David
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
                                        <small>GDG Abuja / Nigeria</small>
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
                    <div class="card card-wrapper" @click="isNetModalActive = true">
                        <div class="card-content">
                            <p class="schedule-title" >Meet Our Partners</p>
                            <p>English/Main Hall</p>
                        </div>
                        <small class="time-taken">
                            30 mins
                        </small>
                        <br><br>
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
                    <div class="card card-wrapper" @click="isNetModalActive = true">
                        <div class="card-content">
                            <p class="schedule-title" >Networking</p>
                            <p>English/Main Hall</p>
                        </div>
                        <small class="time-taken">
                            30 mins
                        </small>
                        <br><br>
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
                    <div class="card card-wrapper" @click="isSessionOneModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Firebase Authentication: The Server-side Story</p>
                            <p>English / Beginner / Hall A</p>
                        </div>
                        <small class="track-tag">
                            <b-icon icon="tag" size="is-small"></b-icon>
                            Cloud
                        </small>
                        <div class="speaker-wrapper speaker-wrapper-android level">
                            <div class="level-left">
                                <div class="speaker-detail">
                                    <div style="margin-right:10px">
                                        <b-icon
                                            icon="account">
                                        </b-icon>
                                    </div>
                                    <span >Wisdom Arerosuoghene
                                        <br>
                                        <small>SprintHub Innovation / Porthacourt</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isSessionOneModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Building Applications For Poor Signal Locations</p>
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
                                    <span >Asma'u Shaheedah
                                        <br>
                                        <small>Fullstack Developer/Abuja</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isSessionOneModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Design with inclusion</p>
                            <p>English / Intermediate / Hall C</p>
                        </div>
                        <small class="track-tag">
                            <b-icon icon="tag" size="is-small"></b-icon>
                            UI/UX
                        </small>
                        <div class="speaker-wrapper speaker-wrapper-cloud level">
                            <div class="level-left">
                                <div class="speaker-detail">
                                    <div style="margin-right:10px">
                                        <b-icon
                                            icon="account">
                                        </b-icon>
                                    </div>
                                    <span >Peace Ojemeh
                                        <br>
                                        <small>Sugar Labs / Porthacourt</small>
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
                        45
                    </span>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isSessionOneModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Architecting Android Apps the Clean Way</p>
                            <p>English / Intermediate / Hall A</p>
                        </div>
                        <small class="track-tag">
                            <b-icon icon="tag" size="is-small"></b-icon>
                            Cloud
                        </small>
                        <div class="speaker-wrapper speaker-wrapper-android level">
                            <div class="level-left">
                                <div class="speaker-detail">
                                    <div style="margin-right:10px">
                                        <b-icon
                                            icon="account">
                                        </b-icon>
                                    </div>
                                    <span >Chizoba Ogbonna
                                        <br>
                                        <small>Paylater / Lagos</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isSessionOneModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Application State Design for Web Applications</p>
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
                                    <span >Ifeora Okechukwu
                                        <br>
                                        <small>Oparand / Abuja</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isSessionOneModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Machine Learning with tf.keras</p>
                            <p>English / Intermediate / Hall C</p>
                        </div>
                        <small class="track-tag">
                            <b-icon icon="tag" size="is-small"></b-icon>
                            AI/ML
                        </small>
                        <div class="speaker-wrapper speaker-wrapper-cloud level">
                            <div class="level-left">
                                <div class="speaker-detail">
                                    <div style="margin-right:10px">
                                        <b-icon
                                            icon="account">
                                        </b-icon>
                                    </div>
                                    <span >Robert John
                                        <br>
                                        <small>EnterFive / Kaduna</small>
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
                    <div class="card card-wrapper" @click="isRegModalActive = true">
                        <div class="card-content">
                            <p class="schedule-title" >LUNCH</p>
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
                        02
                    </span>
                    <span class="minute">
                        30
                    </span>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isSessionOneModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >The Flutter revolution - Recipe for building apps without pain.</p>
                            <p>English / Beginner / Hall A</p>
                        </div>
                        <small class="track-tag">
                            <b-icon icon="tag" size="is-small"></b-icon>
                            Cloud
                        </small>
                        <div class="speaker-wrapper speaker-wrapper-android level">
                            <div class="level-left">
                                <div class="speaker-detail">
                                    <div style="margin-right:10px">
                                        <b-icon
                                            icon="account">
                                        </b-icon>
                                    </div>
                                    <span >Shuaib Afegbua
                                        <br>
                                        <small>Ectorium & Code Kraft / Abuja</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isSessionOneModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Much ado about Web Components</p>
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
                                    <span >Adaobi Frank
                                        <br>
                                        <small>Modus Create / Abuja</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isSessionOneModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Essential Principles Every UI/UX Designer should Know</p>
                            <p>English / Intermediate / Hall C</p>
                        </div>
                        <small class="track-tag">
                            <b-icon icon="tag" size="is-small"></b-icon>
                            UI/UX
                        </small>
                        <div class="speaker-wrapper speaker-wrapper-cloud level">
                            <div class="level-left">
                                <div class="speaker-detail">
                                    <div style="margin-right:10px">
                                        <b-icon
                                            icon="account">
                                        </b-icon>
                                    </div>
                                    <span >Habeeb Bombata
                                        <br>
                                        <small>Verifi / Lagos</small>
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
                        03
                    </span>
                    <span class="minute">
                        15
                    </span>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isSessionOneModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Winning with Android Architecture Components</p>
                            <p>English / Intermediate / Hall A</p>
                        </div>
                        <small class="track-tag">
                            <b-icon icon="tag" size="is-small"></b-icon>
                            Cloud
                        </small>
                        <div class="speaker-wrapper speaker-wrapper-android level">
                            <div class="level-left">
                                <div class="speaker-detail">
                                    <div style="margin-right:10px">
                                        <b-icon
                                            icon="account">
                                        </b-icon>
                                    </div>
                                    <span >Belvi Nosakhare
                                        <br>
                                        <small>Intelia / Lagos</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isSessionOneModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Build Modern Web Applications with Webpack</p>
                            <p>English / Beginner / Hall B</p>
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
                                    <span >Samuel Omole
                                        <br>
                                        <small>Software Engineer / Abuja</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isSessionOneModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Managing your Digital Wellbeing</p>
                            <p>English / Intermediate / Hall C</p>
                        </div>
                        <small class="track-tag">
                            <b-icon icon="tag" size="is-small"></b-icon>
                            Community
                        </small>
                        <div class="speaker-wrapper speaker-wrapper-cloud level">
                            <div class="level-left">
                                <div class="speaker-detail">
                                    <div style="margin-right:10px">
                                        <b-icon
                                            icon="account">
                                        </b-icon>
                                    </div>
                                    <span >Jeremiah Jacob
                                        <br>
                                        <small>DSC Lead / IBB University</small>
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
                        04
                    </span>
                    <span class="minute">
                        00
                    </span>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isSessionOneModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Background Work with WorkManager - Kotlin</p>
                            <p>English / Intermediate / Hall A</p>
                        </div>
                        <small class="track-tag">
                            <b-icon icon="tag" size="is-small"></b-icon>
                            Cloud
                        </small>
                        <div class="speaker-wrapper speaker-wrapper-android level">
                            <div class="level-left">
                                <div class="speaker-detail">
                                    <div style="margin-right:10px">
                                        <b-icon
                                            icon="account">
                                        </b-icon>
                                    </div>
                                    <span >Nsikak Thompson
                                        <br>
                                        <small>Start Innovation Hub & Alta Labs / Uyo</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isSessionOneModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Intro to Angular and What's new in Angular 7</p>
                            <p>English / Beginner / Hall B</p>
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
                                    <span >Hamza Bashir
                                        <br>
                                        <small>Intellectual Apps / Abuja</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="column">
                    <div class="card card-wrapper" @click="isSessionOneModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Deep Learning at a glance</p>
                            <p>English / Intermediate / Hall C</p>
                        </div>
                        <small class="track-tag">
                            <b-icon icon="tag" size="is-small"></b-icon>
                            AI/ML
                        </small>
                        <div class="speaker-wrapper speaker-wrapper-cloud level">
                            <div class="level-left">
                                <div class="speaker-detail">
                                    <div style="margin-right:10px">
                                        <b-icon
                                            icon="account">
                                        </b-icon>
                                    </div>
                                    <span >Banso God'sWisdom Daniel
                                        <br>
                                        <small>Cashcrow / Abuja</small>
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
                        04
                    </span>
                    <span class="minute">
                        45
                    </span>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isCardModalActive = true">
                        <div class="card-content">
                            <p class="schedule-title" >Closing Remark</p>
                            <p>English / Main Hall</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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

