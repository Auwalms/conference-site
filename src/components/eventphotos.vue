<template>
    <section class="photo-block columns is-mobile" >    
        <div class="big-photo column is-two-third-tablet is-half-mobile"> </div>
        <div class="photo-block-overlay has-text-centered">
            <div id="overlay-text">
                <a target="_blank" href="https://photos.app.goo.gl/ExTDoMdQujsDwV5p1">Click here to view more pictures
                    <b-icon icon="open-in-new">
                    </b-icon>
                </a>
            </div>
        </div>
        <div class=" column is-one-third-tablet is-half-mobile">
            <div class="small-photo" id="small_one"></div>
            <div class="small-photo" id="small_two"></div>
        </div>
    </section>
</template>

<style>
.photo-block{
    height: 500px;
    margin-top: 50px;
    margin-bottom: 0px;
}

.photo-block .column{
    padding: 0;
    height: inherit;
}
.big-photo{
    background: url(../assets/event/2017_1.jpg) no-repeat center;
    background-size: cover;
}

.small-photo{
    height: 50%;
}

#small_one{
    background: url(../assets/event/2017_2.jpg) no-repeat center;
    background-size: cover;
}

#small_two{
    background: url(../assets/event/2017_3.jpg) no-repeat center;
    background-size: cover;
}

.photo-block .photo-block-overlay{
    position: absolute;
    display: block;
    width: inherit;
    height: inherit;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
}

.photo-block.columns:not(:last-child) {
    margin-bottom: 0px;
}

#overlay-text{
    margin-top: 25%;
}

#overlay-text a{
    color: #fff;
    font-size: 21px;
}

@media screen and (max-width: 768px) {
    .photo-block{
        height: 200px;
    }
    #small_one{
        height: 100%;
    }
    #small_two{
        visibility: hidden;
    }
}
</style>
