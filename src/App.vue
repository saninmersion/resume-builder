<template>
    <div id="app">
        <ResumeBuilder/>
    </div>
</template>

<script>
    import ResumeBuilder from "./components/ResumeBuilder.vue"

    export default {
        name: "app",
        components: {
            ResumeBuilder,
        },
    }
</script>

<style>
    html,
    body {
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
    }
    ul {
        list-style: none;
    }
    a {
        color: #fcb54c;
    }
</style>
