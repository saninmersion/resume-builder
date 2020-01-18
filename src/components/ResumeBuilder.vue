<template>
    <div style="display: flex;">
        <!-- Sidebar -->
        <aside id="sidebar" style="width: 40%; background: #29233c; padding: 40px 20px;">
            <div style="display: flex;">
                <!-- Left content -->
                <sidebar style="flex: 1; height: 100vh;" @generate="handleFormChange" :active="activeTab"/>

                <!-- Right content -->
                <div style="flex: 2; overflow: auto;">
                    <basic-profile-form v-if="activeTab === 'basics'" :profile="resume.basics"/>
                    <education-form v-if="activeTab === 'education'" :education="resume.education"/>
                    <work-form v-if="activeTab === 'work'" :work="resume.work"/>
                    <volunteer-form v-if="activeTab === 'volunteer'" :volunteer="resume.volunteer"/>
                    <awards-form v-if="activeTab === 'awards'" :awards="resume.awards"/>
                    <project-form v-if="activeTab === 'projects'" :projects="resume.projects"/>
                    <skills-form v-if="activeTab === 'skills'" :skills="resume.skills"/>
                    <languages-form v-if="activeTab === 'languages'" :languages="resume.languages"/>
                    <interests-form v-if="activeTab === 'interests'" :interests="resume.interests"/>
                    <references-form v-if="activeTab === 'references'" :references="resume.references"/>
                </div>
            </div>
        </aside>

        <!-- Main -->
        <main style="flex: 1;overflow: auto;">
            <preview-wrapper :resume="resume" :headings="headings"/>
        </main>
    </div>
</template>

<script>
    import AwardsForm       from "./Forms/AwardsForm"
    import BasicProfileForm from "./Forms/BasicProfileForm"
    import EducationForm    from "./Forms/EducationForm"
    import InterestsForm    from "./Forms/InterestsForm"
    import LanguagesForm    from "./Forms/LanguagesForm"
    import ProjectForm      from "./Forms/ProjectForm"
    import ReferencesForm   from "./Forms/ReferencesForm"
    import SkillsForm       from "./Forms/SkillsForm"
    import VolunteerForm    from "./Forms/VolunteerForm"
    import WorkForm         from "./Forms/WorkForm"
    import PreviewWrapper   from "./layouts/PreviewWrapper"
    import Sidebar          from "./partials/Sidebar"

    export default {
        name: "ResumeBuilder",
        components: {
            PreviewWrapper,
            ProjectForm,
            ReferencesForm,
            InterestsForm,
            LanguagesForm,
            VolunteerForm,
            AwardsForm,
            SkillsForm,
            WorkForm,
            EducationForm,
            BasicProfileForm,
            Sidebar,
        },
        data() {
            return {
                resume: {
                    basics: {
                        name: "John Doe",
                        label: "Programmer",
                        picture: "",
                        email: "john@gmail.com",
                        phone: "(912) 555-4321",
                        website: "http://johndoe.com",
                        summary: "A summary of John Doe...",
                        location: {
                            address: "2712 Broadway St",
                            postalCode: "",
                            city: "",
                            countryCode: "",
                            region: "",
                        },
                        profiles: [
                            {
                                network: "Twitter",
                                username: "john",
                                url: "http://twitter.com/john",
                            }],
                    },
                    work: [
                        {
                            company: "Company",
                            position: "President",
                            website: "http://company.com",
                            startDate: "2013-01-01",
                            endDate: "2014-01-01",
                            summary: "Description...",
                            highlights: [
                                "Started the company",
                            ],
                        }],
                    volunteer: [
                        {
                            organization: "Organization",
                            position: "Volunteer",
                            website: "http://organization.com/",
                            startDate: "2012-01-01",
                            endDate: "2013-01-01",
                            summary: "Description...",
                            highlights: [
                                "Awarded 'Volunteer of the Month'",
                            ],
                        }],
                    education: [
                        {
                            institution: "University",
                            area: "Software Development",
                            studyType: "Bachelor",
                            startDate: "2011-01-01",
                            endDate: "2013-01-01",
                            gpa: "4.0",
                            courses: [
                                "DB1101 - Basic SQL",
                            ],
                        }],
                    awards: [
                        {
                            title: "Award",
                            date: "2014-11-01",
                            awarder: "Company",
                            summary: "There is no spoon.",
                        }],
                    projects: [
                        {
                            name: "Project",
                            description: "Description...",
                            url: "http://piperchat.com",
                            keywords: [],
                        }],
                    skills: [
                        {
                            name: "Web Development",
                            level: "Master",
                            keywords: [
                                "HTML",
                                "CSS",
                                "Javascript",
                            ],
                        }],
                    languages: [
                        {
                            language: "English",
                            fluency: "Native speaker",
                        }],
                    interests: [
                        {
                            name: "Wildlife",
                            keywords: [
                                "Ferrets",
                                "Unicorns",
                            ],
                        }],
                    references: [
                        {
                            name: "Jane Doe",
                            reference: "Reference...",
                        }],
                },
                categories: [
                    "basics", "work", "volunteer", "education", "awards", "projects", "skills", "language", "interests",
                    "references"],
                activeTab: "basics",
                headings: {
                    work: "Work Experience",
                    volunteer: "Volunteer Work ",
                    education: "Education",
                    awards: "Awards & Certifications ",
                    projects: "Projects",
                    skills: "Skills",
                    language: "Languages",
                    interests: "Interests",
                    references: "References",
                },
            }
        },
        methods: {
            handleFormChange(value) {
                // eslint-disable-next-line no-console
                console.log(value)
                this.activeTab = value
            },
        },
    }
</script>
<style>
    #app #sidebar {
        color: #fff;
    }
</style>
