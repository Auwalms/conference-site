<template>
    <div class="container-fluid">
        <section style="box-shadow: 0 5px 6px -3px rgba(0, 0, 0, 0.4); font-weight: lighter;" class="hero is-medium">
            <!-- Hero head: will stick at the top -->
            <div class="hero-head">
                <navbar/>
            </div>

            <!-- Hero content: will be in the middle -->
            <div class="hero-body">
                <div class="container has-text-left">
                    <img style="width: 200px;" id="team-img" src="../assets/logos/logo-white.svg" alt="">
                    <p class="title">
                        Meet Our Speakers
                    </p>
                </div>
            </div>
            <!-- Hero footer: will stick at the bottom -->
            <div class="hero-foot">

            </div>
        </section>
        <section style="margin-top: 50px" class="hero is-light">
            <!-- Hero content: will be in the middle -->
            <div class="hero-body">
                <div class="container">
                    <div style="font-size: 14px" class=" has-text-justified">
                        <p> Hear from the Googlers, Partners, and Guest Speakers who are building the future with Cloud, Web, Android and Machine Learning. Anticipate amazing sessions from our speakers! Check back to see as we add more partners.
                        </p>

                    </div>
                </div>
            </div>
        </section>
        <section class="team-members-wrapper has-text-centered content">
            <div class="columns">
                <div class="column ">
                    <div class="member-card">
                        <br>
                        <div class="member-card-image">
                        <figure class="image is-128x128">
                                <img class="is-rounded" src="../assets/people/fola.jpeg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Fola Olatunji-David</h1>
                        <p>Google, Nigeria</p>
                        <p>
                            Fola leads the Subsaharan Africa Startup Launchpad team for at Google where he helps startups succeed.
                        </p>
                        <p>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" href="https://twitter.com/folasanwo">
                            <b-icon
                                icon="twitter"
                                size="is-small">
                            </b-icon>
                        </a>
                        </p>
                        <br>
                    </div>
                </div>
                <div class="column ">
                    <div class="member-card">
                        <br>
                        <div class="member-card-image">
                        <figure class="image is-128x128">
                                <img class="is-rounded" src="../assets/people/bulama.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Bulama Yusuf</h1>
                        <p>IntApps, Nigeria</p>
                        <p>
                            Bulama is the Founder/CEO of Intellectual Apps, a DevShop centered on building mobile and enterprise solutions
                        </p>
                        <p>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" href="https://twitter.com/bulsyusuf">
                            <b-icon
                                icon="twitter"
                                size="is-small">
                            </b-icon>
                        </a>
                        </p>
                        <br>
                    </div>
                </div>
                <div class="column ">
                    <div class="member-card">
                        <br>
                        <div class="member-card-image">
                        <figure class="image is-128x128">
                                <img class="is-rounded" src="../assets/logos/gdg-logo.png">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Robert John</h1>
                        <p>EnterFive, Nigeria</p>
                        <p>
                            Robert is a Google Developer Expert for Machine Learning, He serves as the CTO of CoLab_KD and EnterFive.
                        </p>
                        <p>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" href="https://twitter.com/bulsyusuf">
                            <b-icon
                                icon="twitter"
                                size="is-small">
                            </b-icon>
                        </a>
                        </p>
                        <br>
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
            msg: "Hello Team"
        }
    },
    components : {
        Navbar,
        Pagefooter
    }
}
</script>
