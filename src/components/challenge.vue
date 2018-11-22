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
                        Devfest Code Challenge
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
                    <div class=" has-text-justified">
<p>Africa's Talking and GDG have organized a pre-event code challenge to start on 20th to 22nd of November, with #50,000, #30,000, #20,000 NGN cash reward for 1st, 2nd and 3rd place winners respectively, plus PC and Phone Accessories accompanying each prize.</p>
<p>You don't want to miss out on this one.</p>
<p>Click the link: https://github.com/ATDevOutreach/DevFest-Abuja-Code-Challenge-2018 to enter the challenge.</p>
<p>Please pay careful attention to the rules listed.</p>
<p>The Challenge ends by 12-noon on Thursday 22nd November.</p>
<p>Thank You and Have Fun,</p>

                    </div>
                </div>
            </div>
        </section>
        <section class="team-members-wrapper has-text-centered content">
            <div class="columns">
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
