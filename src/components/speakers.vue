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
                                <img class="is-rounded" src="https://res.cloudinary.com/dxrxviiv8/image/upload/v1542877925/ncdevfest2018/speakers/fola.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Fola Olatunji-David</h1>
                        <p>Googler</p>
                        <p class="speaker-topic">Keynote</p>
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
                                <img class="is-rounded" src="https://res.cloudinary.com/dxrxviiv8/image/upload/v1541672747/ncdevfest2018/bulama.3b174ba.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Bulama Yusuf</h1>
                        <p>Lead, GDG Abuja</p>
                        <p class="speaker-topic">Keynote</p>
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
                                <img class="is-rounded" src="https://res.cloudinary.com/dxrxviiv8/image/upload/v1542551630/ncdevfest2018/speakers/Robert_John.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Robert John</h1>
                        <p>Data Science Officer, EnterFive</p>
                        <p class="speaker-topic">Machine Learning with tf.keras</p>
                        <p>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" href="https://twitter.com/robert_thas">
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
            <div class="columns">
                <div class="column ">
                    <div class="member-card">
                        <br>
                        <div class="member-card-image">
                        <figure class="image is-128x128">
                                <img class="is-rounded" src="https://res.cloudinary.com/dxrxviiv8/image/upload/v1542291103/ncdevfest2018/farida.621ac72.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Farida Kabir</h1>
                        <p>CEO, Otrac NG</p>
                        <p class="speaker-topic">MC</p>
                        <p>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" href="https://twitter.com/Kingsmentor">
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
                                <img class="is-rounded" src="https://res.cloudinary.com/dxrxviiv8/image/upload/v1542551617/ncdevfest2018/speakers/Shuaib_Afegbua.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Shuaib Afegbua</h1>
                        <p>Resident Dreamer, Ectorium/Code Kraft</p>
                        <p class="speaker-topic">The Flutter revolution - Recipe for building apps without pain.</p>
                        <p>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" href="https://twitter.com/@afegbuas">
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
                                <img class="is-rounded" src="https://res.cloudinary.com/dxrxviiv8/image/upload/v1542551630/ncdevfest2018/speakers/Wisdom_Arerosuoghene.png">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Wisdom Arerosuoghene</h1>
                        <p>CTO, SprintHub Innovation</p>
                        <p class="speaker-topic">Firebase Authentication: The Server-side Story</p>
                        <p>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" href="https://twitter.com/itswisdomagain">
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
            <div class="columns">
                <div class="column ">
                    <div class="member-card">
                        <br>
                        <div class="member-card-image">
                        <figure class="image is-128x128">
                                <img class="is-rounded" src="https://res.cloudinary.com/dxrxviiv8/image/upload/v1542551618/ncdevfest2018/speakers/Jeremiah_Jacob.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Jeremiah Jacob</h1>
                        <p>DSC Lead, IBB University</p>
                        <p class="speaker-topic">Managing your Digital Wellbeing</p>
                        <p>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" href="https://twitter.com/am_jaykon">
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
                                <img class="is-rounded" src="https://res.cloudinary.com/dxrxviiv8/image/upload/c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1542963040/ncdevfest2018/speakers/shaheeda.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Asma'u Shaheedah</h1>
                        <p>Fullstack Developer</p>
                        <p class="speaker-topic">Building Applications For Poor Signal Locations</p>
                        <p>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" href="https://twitter.com/SwitSlim">
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
                                <img class="is-rounded" src="https://res.cloudinary.com/dxrxviiv8/image/upload/c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1542551618/ncdevfest2018/speakers/Banso_God_sWisdom_Daniel.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Banso God'sWisdom Daniel</h1>
                        <p>Software Engineer,Cashcrow</p>
                        <p class="speaker-topic">Deep Learning at a glance</p>
                        <p>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" href="https://twitter.com/overrideveloper">
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
            <div class="columns">
                <div class="column ">
                    <div class="member-card">
                        <br>
                        <div class="member-card-image">
                        <figure class="image is-128x128">
                                <img class="is-rounded" src="https://res.cloudinary.com/dxrxviiv8/image/upload/c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1542551627/ncdevfest2018/speakers/Habeeb_Bombata.jpg">

                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Habeeb Bombata</h1>
                        <p>Product designer,Verifi</p>
                        <p class="speaker-topic">Essential Principles Every UI/UX Designer should Know</p>
                        <p>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" href="https://twitter.com/nottherealilest">
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
                                <img class="is-rounded" src="https://res.cloudinary.com/dxrxviiv8/image/upload/c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1542551634/ncdevfest2018/speakers/Peace_Ojemeh.png">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Peace Ojemeh</h1>
                        <p>Designer,Sugar Labs</p>
                        <p class="speaker-topic">Design with inclusion</p>
                        <p>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" href="https://twitter.com/Peace_Ojemeh">
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
                                <img class="is-rounded" src="https://res.cloudinary.com/dxrxviiv8/image/upload/v1542551622/ncdevfest2018/speakers/Adaobi_Frank.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Adaobi Frank</h1>
                        <p>FullStack Engineer, Modus Create</p>
                        <p class="speaker-topic">Much ado about Web Components</p>
                        <p>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" href="https://twitter.com/droidada">
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
            <div class="columns">
                <div class="column ">
                    <div class="member-card">
                        <br>
                        <div class="member-card-image">
                        <figure class="image is-128x128">
                                <img class="is-rounded" src="https://res.cloudinary.com/dxrxviiv8/image/upload/v1542551593/ncdevfest2018/speakers/Belvi_Nosakhare.png">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Belvi Nosakhare</h1>
                        <p>Senior Mobile Developer, Intelia</p>
                        <p class="speaker-topic">Winning with Android Architecture Components</p>
                        <p>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" href="https://twitter.com/Kingsmentor">
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
                                <img class="is-rounded" src="https://res.cloudinary.com/dxrxviiv8/image/upload/c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1542551633/ncdevfest2018/speakers/Samuel_Omole.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Samuel Omole</h1>
                        <p>Software Engineer</p>
                        <p class="speaker-topic">Build Modern Web Applications with Webpack</p>
                        <p>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" href="https://twitter.com/AjeboDeveloper">
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
                                <img class="is-rounded" src="https://res.cloudinary.com/dxrxviiv8/image/upload/v1542551630/ncdevfest2018/speakers/Chizoba_Ogbonna.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Chizoba Ogbonna</h1>
                        <p>Android Developer, Paylater</p>
                        <p class="speaker-topic">Architecting Android Apps the Clean Way</p>
                        <p>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" href="https://twitter.com/techietoby">
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
            <div class="columns">
                <div class="column ">
                    <div class="member-card">
                        <br>
                        <div class="member-card-image">
                        <figure class="image is-128x128">
                                <img class="is-rounded" src="https://res.cloudinary.com/dxrxviiv8/image/upload/c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1542551619/ncdevfest2018/speakers/Nsikak_Thompson.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Nsikak Thompson</h1>
                        <p>Android Developer, Start Innovation Hub & Alta Labs</p>
                        <p class="speaker-topic">Background Work with WorkManager - Kotlin</p>
                        <p>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" href="https://twitter.com/thompson_nsikak">
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
                                <img class="is-rounded" src="https://res.cloudinary.com/dxrxviiv8/image/upload/v1542551630/ncdevfest2018/speakers/Ifeora_Okechukwu.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Ifeora Okechukwu</h1>
                        <p>Frontend Developer, Oparand</p>
                        <p class="speaker-topic">Application State Design for Web Applications</p>
                        <p>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" href="https://twitter.com/isocroft">
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
                                <img class="is-rounded" src="https://res.cloudinary.com/dxrxviiv8/image/upload/c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1542551627/ncdevfest2018/speakers/Hamza_Bashir.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Bashir Hamza</h1>
                        <p>Frontend Engineer, Intellectual Apps</p>
                        <p class="speaker-topic">Intro to Angular and What's new in Angular 7</p>
                        <p>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" href="https://twitter.com/Bamoohaa">
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
            speakers: null
        }
    },components : {
        Navbar,
        Pagefooter
    },

}
</script>
