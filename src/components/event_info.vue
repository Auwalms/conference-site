<template>
    <div class="content">
        <div class="columns is-tablet">
            <div class="column is-half-tablet">
                <div class="event-info">
                    <h1 class="title">What you need to know, before you ask.</h1>
                    <p class="description">GDG DevFest North Central Nigeria brings together world class experts in Android, Web and Cloud technologies to Abuja for a days of sessions, workshops and showcases.</p>
                    <div class="level event_info_wrapper">
                        <div class="level-left event_link">
                            <a target="_blank" href="https://www.youtube.com/watch?v=mEbXofvoia0" class="level-item ">
                                <span class="is-vertical event_info_link" >EXPLORE TRAILER 2016</span>
                                <b-icon icon="arrow-right-bold-circle" class="event_link_icon"></b-icon>
                            </a>
                        </div>
                    </div>
                    <p class="description">The event is the biggest conference of its type in the region, our team work hard to make DevFest to be the best place for experience sharing in a phenomenal atmosphere.</p>
                    <div class="level event_info_wrapper">
                        <div class="level-left event_link">
                            <a target="_blank" href="https://www.youtube.com/watch?v=V_SMgQovLdM" class="level-item ">
                                <span class="is-vertical event_info_link" >WATCH RECAP 2015</span>
                                <b-icon icon="arrow-right-bold-circle" class="event_link_icon"></b-icon>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-half-tablet statistics-block">
                <div class="columns is-mobile">
                    <div class="column is-6">
                        <div class=" stat-numbers"><h1>600</h1></div>
                        <div class=" stat-name"><p>Attendees</p></div>
                    </div>
                    <div class="column is-6">
                        <div class=" stat-numbers"><h1>1</h1></div>
                        <div class=" stat-name"><p>Day</p></div>
                    </div>
                </div>
                <div class="columns is-mobile">
                    <div class="column is-6">
                        <div class=" stat-numbers"><h1>20</h1></div>
                        <div class=" stat-name"><p>Sessions</p></div>
                    </div>
                    <div class="column is-6">
                        <div class=" stat-numbers"><h1>2</h1></div>
                        <div class=" stat-name"><p>Tracks</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.content {
    margin-top: 0px;
    padding: 32px;
    padding-bottom: 0px;
}

.content h1,
h2,
h3,
h4,
h5,
h6,
p {
    color: #4d4d4d;
    font-weight: inherit;
}
.event-info {
    padding-right: 40px;
}
.event-info .title {
    margin-bottom: 24px;
    padding: 0;
    font-size: 32px;
}
.event-info .description {
    font-size: 16px;
    text-align: justify;
    line-height: 24px;
}

.event_link {
    padding: 10px;
    font-size: 14px;
}
.event_link a {
    color: #673ab7;
}
.event_link:hover {
    background: lightgray;
    -webkit-transition: background 0.5s; /* Safari */
    transition: background 0.5s;
}
.event_info_link:hover {
    margin-right: 8px;
    -webkit-transition: margin-right 0.5s; /* Safari */
    transition: margin-right 0.5s;
}
.event_link_icon {
    margin-left: 8px;
}
.event_link_icon:hover {
    margin-left: 16px;
    -webkit-transition: margin-left 0.5s; /* Safari */
    transition: margin-left 0.5s;
}
.stat-numbers {
    font-size: 30px;
}
.stat-numbers::after {
    content: "";
    display: block;
    height: 2px;
    width: 64px;
    background-color: #673ab7;
}
@media screen and (max-width: 768px) {
    .content {
        padding: 15px;
    }
    .event-info {
        padding-right: 0px;
    }
}
</style>
