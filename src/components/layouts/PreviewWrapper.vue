<template>
    <div class="resume-wrapper">
        <article class="paper">
            <header>
                <div class="header-content">
                    <div class="header-text">
                        <p>
                            {{ resume.basics.name}}
                        </p>
                        <p class="subtitle"> {{ resume.basics.label }} </p>
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
                                <li>{{ resume.basics.website }}</li>
                            </ul>
                            <ul>
                                <li>Email</li>
                                <li>
                                    <a :href="'mailto:' + resume.basics.email"> {{ resume.basics.email }}</a>
                                </li>
                            </ul>
                            <ul>
                                <li>Phone</li>
                                <li>{{ resume.basics.phone }}</li>
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

                <!-- Work -->
                <section class="content">
                    <div class="row">
                        <div class="content-cat big-text">
                            Work Experience
                            <p v-for="(work, index) in resume.work" :key="'work_dates_' + index">{{ work.startDate }}till {{ work.endDate }}</p>
                        </div>
                        <div v-for="(work, index) in resume.work" :key="'resume_work_' + index" class="content-text work-listing education-listing">
                            <p style="margin-top:2.4em;">
                                <strong>{{ work.position }}</strong>
                                &nbsp; at &nbsp;<strong>{{ work.company }}</strong>
                            </p>

                            <p v-for="(highlight, index) in work.highlights" :key="'work_highlight_' + index" class="highlight">{{ highlight }}</p>
                        </div>
                    </div>
                </section>

                <!-- Projects -->
                <section class="content">
                    <div class="row">
                        <div class="content-cat big-text">
                            Projects
                        </div>
                        <div v-for="(project, index) in resume.projects" :key="'resume_project_' + index"
                             class="content-text work-listing education-listing">
                            <p style="margin-top:0.25em;">
                                <strong><a :href="project.url">{{ project.name }}</a></strong>
                                &nbsp; at &nbsp;<strong>{{ project.description }}</strong>
                            </p>

                            <p v-for="(highlight, index) in project.highlights" :key="'project_highlight_' + index" class="highlight">{{ highlight }}</p>
                        </div>
                    </div>
                </section>

                <section class="content">
                    <div class="row">
                        <div class="content-cat big-text">
                            Volunteer Work
                            <p v-for="(volunteer, index) in resume.volunteer" :key="'volunteer_dates_' + index">{{ volunteer.startDate }}till {{ volunteer.endDate }}</p>
                        </div>
                        <div v-for="(volunteer,index) in resume.volunteer" :key="'preview_volunteer_' + index" class="content-text work-listing">
                            <p style="margin-top:2.4em;">
                                <strong>
                                    {{ volunteer.position }}
                                </strong>
                                &nbsp; at &nbsp;<strong>{{ volunteer.organization }}</strong>
                            </p>
                            <p class="highlight"> {{ volunteer.summary }} </p>
                        </div>
                    </div>
                </section>

                <section class="content">
                    <div class="row">
                        <div class="content-cat big-text">
                            Education
                            <p v-for="(education, index) in resume.education" :key="'education_dates_' + index">{{ education.startDate }} till {{ education.endDate }}</p>
                        </div>
                        <div v-for="(education, educationIndex) in resume.education" :key="'preview_education_' + educationIndex" class="content-text work-listing education-listing">
                            <p class="heading" style="margin-top:2.35em;">{{education.institution}} <span v-if="education.location">, {{education.location}}</span></p>
                            <p class="highlight">
                                {{ education.studyType }}:
                                <i>{{ education.area }} ({{education.gpa}})</i>
                            </p>
                        </div>
                    </div>
                </section>

                <section class="content">
                    <div class="row">
                        <div class="content-cat big-text">
                            Awards
                            <div v-for="(award,index) in resume.awards" :key="'preview_awards_date' + index">
                                <p style="margin-top:0.25em; margin-bottom: 0.25em">{{ award.title }}</p>
                                <p>{{ award.date}}</p>
                            </div>
                        </div>
                        <div v-for="(award,index) in resume.awards" :key="'preview_awards_' + index" class="content-text work-listing">
                            <strong><p style="margin-top:2.5em;" class="heading">{{ award.awarder }}</p></strong>
                            <p class="highlight">{{ award.summary }}</p>
                        </div>
                    </div>
                </section>

                <section class="content">
                    <div class="row">
                        <div class="content-cat">
                            Skills
                        </div>
                        <div v-for="(skill, index) in resume.skills" :key="'skills_'+index" class="content-text skills-listing">
                            <p>
                                <span class="name">
                                    <strong>
                                      {{ skill.name }}
                                    </strong>
                                </span>
                                <span>( {{ skill.level }} ):</span>
                                {{ skill.keywords.join(",")}}
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
                            <ul v-for="(language,index) in resume.languages" :key="'preview_languages_date' + index">
                                <li> {{ language.language }}</li>
                                <li> {{ language.fluency }}</li>
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
                            <p v-for="(interest,index) in resume.interests" :key="'preview_interest_' + index">
                              <span class="name">
                                  <strong>
                                    {{ interest.name }}:
                                  </strong>
                              </span>
                                {{ interest.keywords.join(", ")}}
                            </p>
                        </div>
                    </div>
                </section>

                <section class="content">
                    <div class="row">
                        <div class="content-cat big-text">
                            References
                        </div>
                        <div v-for="(reference,index) in resume.references" :key="'preview_reference_' + index" class="content-text work-listing education-listing">
                            <p class="heading">{{ reference.name }}</p>
                            <p class="highlight">
                                {{ reference.reference }}
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </article>
    </div>
</template>

<script>
    export default {
        name: "PreviewWrapper",
        components: {},
        props: {
            resume: { type: Object, required: true },
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
