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
                        Meet the Team
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
                        <p> Google is known all around the world. Everyone is 'googling',
                            checking on 'maps' and communicating in 'gmail'. For simple
                            users, they are services that just works, but not for us.
                            Developers see much more: APIs, scalability issues, complex technology stacks.
                            And that is what GDG is about.
                        </p>
                        <br>
                        <p>
                            <a href="">GDG North CentralDevFest</a> - is open and volunteer geek community who create exciting
                            projects and share experience about Google technologies with a passion.
                        </p>
                        <br>
                        <p>
                            Our goal is to organize space to connect the best industry experts with our community audience to boost development of IT in Nigeria.
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
                                <img class="is-rounded" src="../assets/people/bulama.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Bulama Yusuf</h1>
                        <img class="gdg-logo" src="../assets/logos/gdg-logo.png" alt="">
                        <p>Abuja, Nigeria</p>
                        <p>
                            <a  style="color: #4d4d4d; padding:5px" target="_blank" rel="noopener" href="https://bitbucket.com/buls">
                                <b-icon
                                    pack="fab"
                                    icon="github"
                                    size="is-small">
                                </b-icon>
                            </a>
                            <a class="is-info" style="padding:5px" data-social-network="Twitter"
                            target="_blank" rel="noopener" href="https://twitter.com/bulsyusuf">
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
                                <img class="is-rounded" src="../assets/people/auwal.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Auwal MS</h1>
                        <img class="gdg-logo" src="../assets/logos/gdg-logo.png" alt="">
                        <p>Lafia-Abuja, Nigeria</p>
                        <p>
                            <a  style="color: #4d4d4d; padding:5px" target="_blank" rel="noopener" href="https://github.com/auwalms">
                                <b-icon
                                    pack="fab"
                                    icon="github"
                                    size="is-small">
                                </b-icon>
                            </a>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" rel="noopener" href="https://twitter.com/_auwalms">
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
                                <img class="is-rounded" src="../assets/people/umar.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Umar Saidu Auna</h1>
                        <img class="gdg-logo" src="../assets/logos/gdg-logo.png" alt="">
                        <p>Minna, Nigeria</p>
                        <p>
                            <a  style="color: #4d4d4d; padding:5px" target="_blank" rel="noopener" href="https://github.com/android200">
                                <b-icon
                                    pack="fab"
                                    icon="github"
                                    size="is-small">
                                </b-icon>
                            </a>

                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" rel="noopener" href="https://twitter.com/umarauna">
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
                                <img class="is-rounded" src="../assets/people/usman.jpeg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Usman Idris</h1>
                        <img class="gdg-logo" src="../assets/logos/gdg-logo.png" alt="">
                        <p>Keffi, Nigeria</p>
                        <p>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" rel="noopener" href="https://twitter.com/Majidadi_karami">
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
                                <img class="is-rounded" src="../assets/people/pius.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Pius Aboyi</h1>
                        <img class="gdg-logo" src="../assets/logos/gdg-logo.png" alt="">
                        <p>Makurdi, Nigeria</p>
                        <p>
                            <a  style="color: #4d4d4d; padding:5px" target="_blank" rel="noopener" href="https://github.com/buildbro">
                                <b-icon
                                    pack="fab"
                                    icon="github"
                                    size="is-small">
                                </b-icon>
                            </a>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" rel="noopener" href="https://twitter.com/ea_pius">
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
                                <img class="is-rounded" src="../assets/people/farida.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Farida Kabir</h1>
                        <img class="gdg-logo" src="../assets/logos/gdg-logo.png" alt="">
                        <p>Abuja, Nigeria</p>
                        <p>
                            <a  style="color: #4d4d4d; padding:5px" target="_blank" rel="noopener" href="https://github.com/reedahkh">
                                <b-icon
                                    pack="fab"
                                    icon="github"
                                    size="is-small">
                                </b-icon>
                            </a>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" rel="noopener" href="https://twitter.com/reedahkh">
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
                                <img class="is-rounded" src="../assets/people/abdullahi.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Abdullahi Aliyu</h1>
                        <img class="gdg-logo" src="../assets/logos/gdg-logo.png" alt="">
                        <p>Lafia, Nigeria</p>
                        <p>
                            <a  style="color: #4d4d4d; padding:5px" target="_blank" rel="noopener" href="https://github.com/abbaxee">
                                <b-icon
                                    pack="fab"
                                    icon="github"
                                    size="is-small">
                                </b-icon>
                            </a>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" rel="noopener" href="https://twitter.com/abba_xee">
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
                                <img class="is-rounded" src="../assets/people/mfawa.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Mfawa Alfred Onen</h1>
                        <img class="gdg-logo" src="../assets/logos/gdg-logo.png" alt="">
                        <p>Abuja, Nigeria</p>
                        <p>
                            <a  style="color: #4d4d4d; padding:5px" target="_blank" rel="noopener" href="https://github.com/muffycompo">
                                <b-icon
                                    pack="fab"
                                    icon="github"
                                    size="is-small">
                                </b-icon>
                            </a>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" rel="noopener" href="https://twitter.com/muffycompo">
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
                                <img class="is-rounded" src="../assets/people/farouq.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Farouq Rabo Agbo</h1>
                        <img class="gdg-logo" src="../assets/logos/gdg-logo.png" alt="">
                        <p>Keffi, Nigeria</p>
                        <p>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" rel="noopener" href="https://twitter.com/AFE933">
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
                                <img class="is-rounded" src="../assets/people/amama.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Amama Moses Anslem</h1>
                        <img class="gdg-logo" src="../assets/logos/gdg-logo.png" alt="">
                        <p>Makurdi, Nigeria</p>
                        <p>
                            <a  style="color: #4d4d4d; padding:5px" target="_blank" rel="noopener" href="https://github.com/TherealAMA">
                                <b-icon
                                    pack="fab"
                                    icon="github"
                                    size="is-small">
                                </b-icon>
                            </a>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" rel="noopener" href="https://twitter.com/TheReal_AMA">
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
                                <img class="is-rounded" src="../assets/people/issac.jpg">
                            </figure>
                        </div>
                        <h1 style="font-size: 24px">Isaac Markus</h1>
                        <img class="gdg-logo" src="../assets/logos/gdg-logo.png" alt="">
                        <p>Minna, Nigeria</p>
                        <p>
                            <a  style="color: #4d4d4d; padding:5px" target="_blank" rel="noopener" href="https://github.com/isaac2020">
                                <b-icon
                                    pack="fab"
                                    icon="github"
                                    size="is-small">
                                </b-icon>
                            </a>
                        <a class="is-info" style="padding:5px" data-social-network="Twitter"
                        target="_blank" rel="noopener" href="https://twitter.com/IsaacMarcusz">
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
