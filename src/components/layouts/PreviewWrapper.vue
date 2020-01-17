<template>
    <div class="resume-wrapper">
        <article class="paper">
            <header>
                <div class="header-content">
                    <div class="header-text">
                        <p>
                            {{ data.basics.name}}
                        </p>
                        <p class="subtitle"> {{ data.basics.label }} </p>
                    </div>
                </div>
            </header>
            <div class="content-wrapper">
                <!-- CONTACT -->
                <section class="content">
                    <div class="row">
                        <div class="content-cat">
                            Contact
                        </div>
                        <div class="content-text">
                            <ul>
                                <li>Website</li>
                                <li>{{ data.basics.website }}</li>
                            </ul>
                            <ul>
                                <li>Email</li>
                                <li>
                                    <a :href="'mailto:'+data.basics.email"> {{ data.basics.email }}</a>
                                </li>
                            </ul>
                            <ul>
                                <li>Phone</li>
                                <li>{{ basics.data.phone }}</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <!-- LOCATION -->
                <section class="content">
                    <div class="row">
                        <div class="content-cat">
                            Location
                        </div>
                        <div class="content-text">
                            <ul>
                                <li>Address</li>
                                <li>2712 Broadway St</li>
                            </ul>
                            <ul>
                                <li>Postal Code &amp; City</li>
                                <li>CA 94115 San Francisco</li>
                            </ul>
                            <ul>
                                <li>Region</li>
                                <li>California</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section class="content">
                    <div class="row">
                        <div class="content-cat big-text">
                            Work  Experience
                            <p>2013-12-01 till 2014-12-01</p>
                        </div>
                        <div class="content-text work-listing education-listing">
                            <p style="margin-top:2.4em;">
                                <strong>CEO/President</strong>
                                at <strong><a href="http://piedpiper.com">Pied Piper:</a></strong>
                            </p>
                            <p>Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores™ that are not merely competitive, but approach the theoretical limit of lossless compression.</p>
                            <p class="highlight">Build an algorithm for artist to detect if their music was violating copy right infringement laws</p>
                            <p class="highlight">Successfully won Techcrunch Disrupt</p>
                            <p class="highlight">Optimized an algorithm that holds the current world record for Weisman Scores</p>
                        </div>
                    </div>
                </section>

                <section class="content">
                    <div class="row">
                        <div class="content-cat big-text">
                            CoderDojo
                            <p>2012-01-01 till 2013-01-01</p>
                        </div>
                        <div class="content-text work-listing">
                            <p>
                                Global movement of free coding clubs for young people.
                            </p>
                            <p class="highlight">Awarded 'Teacher of the Month'</p>
                        </div>
                    </div>
                </section>

                <section class="content">
                    <div class="row">
                        <div class="content-cat big-text">
                            Education
                            <p>2011-06-01 till 2014-01-01</p>
                        </div>
                        <div class="content-text work-listing education-listing">
                            <p class="heading" style="margin-top:2.35em;">University of Oklahoma</p>
                            <p class="highlight">
                                Bachelor:
                                <i>Information Technology (4.0)</i>
                            </p>
                        </div>
                    </div>
                </section>

                <section class="content">
                    <div class="row">
                        <div class="content-cat big-text">
                            Awards
                            <p>Digital Compression Pioneer Award</p>
                            <p style="margin-top:0.25em;">2014-11-01</p>
                        </div>
                        <div class="content-text work-listing">
                            <strong><p class="heading">Techcrunch</p></strong>
                            <p class="highlight">There is no spoon.</p>
                        </div>
                    </div>
                </section>

                <section class="content">
                    <div class="row">
                        <div class="content-cat">
                            Skills
                        </div>
                        <div class="content-text skills-listing">
                            <p>
                    <span class="name">
                        <strong>
                          Web Development
                        </strong>
                    </span>
                                <span>(Master):</span>
                                HTML, CSS, Javascript
                            </p>
                            <p>
                    <span class="name">
                        <strong>
                          Compression
                        </strong>
                    </span>
                                <span>(Master):</span>
                                Mpeg, MP4, GIF
                            </p>
                        </div>
                    </div>
                </section>

                <!-- LANGUAGE -->
                <section class="content">
                    <div class="row">
                        <div class="content-cat">
                            Languages
                        </div>
                        <div class="content-text">
                            <ul>
                                <li>English</li>
                                <li>Native speaker</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <!-- PROFILES -->
                <section class="content profiles">
                    <div class="row">
                        <div class="content-cat">
                            Profiles
                        </div>
                        <div class="content-text profiles-listing">
                            <ul>
                                <li>
                                    <a href="" target="_blank">
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="https://soundcloud.com/dandymusicnl" target="_blank">
                                        SoundCloud
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section class="content">
                    <div class="row">
                        <div class="content-cat">
                            Interests
                        </div>
                        <div class="content-text skills-listing">
                            <p>
                      <span class="name">
                          <strong>
                            Wildlife:
                          </strong>
                      </span>
                                Ferrets, Unicorns
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </article>
    </div></template>

<script>
    export default {
        name: "PreviewWrapper",
        components: { },
        props: {
            data: { type: Object, required: true },
            headings: { type: Object, required: true },
        },
    }
</script>

<style>
    .paper {
        margin: 1em auto;
        background-color: white;
        width: 80%;
        padding: 0.5em 0 0.5em 0;
        border-top: 1px solid #e0e0e0;
        border-left: 1px solid #e0e0e0;
        border-right: 1px solid #e0e0e0;
        border-bottom: 3px solid #e0e0e0;
        border-radius: 3px;
    }
    header {
        width: 100%;
        vertical-align: middle;
        text-align: center;
    }
    .header-content {
        display: inline-block;
    }
    .header-text {
        margin-top: 0.5em;
        margin-left: 1em;
    }
    header p {
        text-align: center;
        margin: 0;
        color: #212121;
    }
    .subtitle {
        padding-top: .3em;
        font-size: 0.55em;
        font-weight: 500;
        color: #424242;
    }
    .content-wrapper {
        padding-right: 7.25%;
    }
    .content {
        display: table;
        width: 100%;
        padding-top: 1.5em;
        /* border-top: 1px solid #eeeeee; */
    }
    .row {
        display: table-row;
    }
    .row div {
        display: table-cell;
    }
    .content-cat {
        font-variant: small-caps;
        font-weight: 300;
        letter-spacing: 1px;
        color: #212121;
        font-size: 0.975em;
        text-align: center;
        vertical-align: middle;
        padding-left: 6.66%;
        width: 30%;
    }
    .content-text {
        border-left: 1px solid #e0e0e0;
        transition: border 0.66s ease-in;
    }
    .content-text ul {
        padding: 0;
        margin: 0.15em 0 0 1.5em;
        width: 85%;
    }
    .content-text ul li {
        font-size: 0.7em;
        display: inline-block;
    }
    .content-text ul li:first-child {
        width: 35%;
        color: #424242;
        font-weight: 600;
    }
    .content-cat {
        font-variant: small-caps;
        font-weight: 300;
        letter-spacing: 1px;
        color: #212121;
        font-size: 0.975em;
        text-align: center;
        vertical-align: middle;
        padding-left: 6.66%;
        width: 30%;
    }
    .big-text {
        vertical-align: top;
    }
    .highlight {
        transition: border .33s ease-in;
    }
    .work-listing p {
        font-size: 0.7em;
        color: #424242;
        margin-left: 2em;
        margin-top: 0.45em;
        margin-bottom: 0.45em;
    }
    .work-listing .highlight {
        font-size: 0.7em;
        font-weight: 400;
        color: #424242;
        margin-left: 3.25em;
        padding-left: 0.5em;
        border-left: 1px solid #e0e0e0;
    }
    .education-listing > .highlight {
        margin-left: 3.25em;
    }
    div.content-text.skills-listing > p {
        font-size: 0.7em;
        font-weight: 400;
        margin-left: 2em;
        margin-top: 0.45em;
        margin-bottom: 0.45em;
    }
</style>
