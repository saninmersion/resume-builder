<template>
    <nav>
        <ul>
            <li><a :class="{'active' : active ==='basics'}" @mouseup="$emit('generate','basics')">Profile</a></li>
            <li><a :class="{'active' : active ==='education'}" @mouseup="$emit('generate','education')">Education</a></li>
            <li><a :class="{'active' : active ==='work'}" @mouseup="$emit('generate','work')">Work</a></li>
            <li><a :class="{'active' : active ==='volunteer'}" @mouseup="$emit('generate','volunteer')">Volunteer</a></li>
            <li><a :class="{'active' : active ==='awards'}" @mouseup="$emit('generate','awards')">Awards &amp; Certifications</a></li>
            <li><a :class="{'active' : active ==='projects'}" @mouseup="$emit('generate','projects')">Projects</a></li>
            <li><a :class="{'active' : active ==='skills'}" @mouseup="$emit('generate','skills')">Skills</a></li>
            <li><a :class="{'active' : active ==='languages'}" @mouseup="$emit('generate','languages')">Languages</a></li>
            <li><a :class="{'active' : active ==='interests'}" @mouseup="$emit('generate','interests')">Interests</a></li>
            <li><a :class="{'active' : active ==='references'}" @mouseup="$emit('generate','references')">References</a></li>
            <li><a :class="{'active' : active ==='templates'}" @mouseup="$emit('generate','templates')">Templates</a></li>
        </ul>
        <button class="button-primary" style="background-color: #f6875b; border-color: #f6875b;" type="submit">Create</button>
    </nav>
</template>

<script>
    export default {
        name: "Sidebar",
        props: {
            active: { type: String}
        }
    }
</script>

<style>
    a {
        cursor: pointer;
    }
    a.active {
        color: #fafafa;
        text-decoration: underline;
    }
</style>
