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
                            <p class="schedule-title" >Check-in and Networking</p>
                            <p>English/Main Hall</p>
                        </div>
                        <small class="time-taken">
                            1hr30mins
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
                        30
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
                        10
                    </span>
                    <span class="minute">
                        30
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
                        00
                    </span>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isSessionOneModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Topic</p>
                            <p>English / Difficulty / Hall</p>
                        </div>
                        <small class="track-tag">
                            <b-icon icon="tag" size="is-small"></b-icon>
                            Track
                        </small>
                        <div class="speaker-wrapper speaker-wrapper-android level">
                            <div class="level-left">
                                <div class="speaker-detail">
                                    <div style="margin-right:10px">
                                        <b-icon
                                            icon="account">
                                        </b-icon>
                                    </div>
                                    <span >Speaker Name
                                        <br>
                                        <small>Company-Chapter / Location</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isSessionOneModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Topic</p>
                            <p>English / Difficulty / Hall</p>
                        </div>
                        <small class="track-tag">
                            <b-icon icon="tag" size="is-small"></b-icon>
                            Track
                        </small>
                        <div class="speaker-wrapper speaker-wrapper-android level">
                            <div class="level-left">
                                <div class="speaker-detail">
                                    <div style="margin-right:10px">
                                        <b-icon
                                            icon="account">
                                        </b-icon>
                                    </div>
                                    <span >Speaker Name
                                        <br>
                                        <small>Company-Chapter / Location</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card card-wrapper" @click="isSessionOneModalActive = true">
                        <div class="card-content session-content">
                            <p class="schedule-title" >Topic</p>
                            <p>English / Difficulty / Hall</p>
                        </div>
                        <small class="track-tag">
                            <b-icon icon="tag" size="is-small"></b-icon>
                            Track
                        </small>
                        <div class="speaker-wrapper speaker-wrapper-android level">
                            <div class="level-left">
                                <div class="speaker-detail">
                                    <div style="margin-right:10px">
                                        <b-icon
                                            icon="account">
                                        </b-icon>
                                    </div>
                                    <span >Speaker Name
                                        <br>
                                        <small>Company-Chapter / Location</small>
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
                        05
                    </span>
                    <span class="minute">
                        00
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
                                    Check-ins and Networking
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="card-content modal-content">
                    <h3> November 24, 08:00 - 09:30</h3>
                    <h3>Main Hall </h3>
                    <br>
                    <p class="has-text-justified" style="font-size: 14px">Check-ins and Networking</p>
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
                    <h3> November 24, 09:30 - 10:30</h3>
                    <h3>Main Hall </h3>
                    <br>
                    <hr>
                    <h1 style="padding-bottom: 10px;">Speakers</h1>
                    <div class="media columns">
                    <div class=" column">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img class="is-rounded" src="../assets/people/fola.jpeg" alt="Image">
                            </figure>
                        </div>

                        <div class="media-content">
                            <p class="title is-6">Fola Olatunji-David</p>
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
                            <p class="subtitle is-6">GDG Abuja / Nigeria</p>
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
                                    Session Topic
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="card-content modal-content">
                    <h3> November 24, Time</h3>
                    <h3>Hall </h3>
                    <h3>Content Level: </h3>
                    <br>
                    <p class="has-text-justified" style="font-size: 14px">Talk Summary</p>
                    <hr>
                    <h1 style="padding-bottom: 10px;">Speaker</h1>
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img class="is-rounded" src="../assets/people/auwal.jpg" alt="Image">
                            </figure>
                        </div>

                        <div class="media-content">
                            <p class="title is-6">Speaker Name</p>
                            <p class="subtitle is-6">Company-Chapter / Location</p>
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

