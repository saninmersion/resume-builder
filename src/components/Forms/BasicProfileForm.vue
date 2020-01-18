<template>
    <div>
        <fieldset>
            <h5>Your Personal Info</h5>
            <div>
                <label>Full Name</label>
                <input class="u-full-width" type="text" name="basics.name" v-model="profile.name" placeholder="Kumar Chhetri">
            </div>
            <div>
                <label>Email</label>
                <input class="u-full-width" type="text" name="basics.email" v-model="profile.email" placeholder="kumarchhetri@somemail.com"></div>
            <div>
                <label>Phone Number</label>
                <input class="u-full-width" type="text" name="basics.phone" v-model="profile.phone" placeholder="(977) 123-456789"></div>
            <div>
                <label>Location</label>
                <input class="u-full-width" type="text" name="basics.location.address" v-model="profile.location.address" placeholder="Kathmandu, Nepal"></div>
            <div>
                <label>Link</label>
                <input class="u-full-width" type="text" name="basics.website" v-model="profile.website" placeholder="myportfolio.com/myname"></div>
        </fieldset>
    </div>
</template>

<script>
    export default {
        name: "BasicProfileForm",
        props: {
            // name: "John Doe",
            // label: "Programmer",
            // picture: "",
            // email: "john@gmail.com",
            // phone: "(912) 555-4321",
            // website: "http://johndoe.com",
            // summary: "A summary of John Doe...",
            // location: {
            //     address: "2712 Broadway St",
            //     postalCode: "",
            //     city: "",
            //     countryCode: "",
            //     region: "",
            // },
            // profiles: [
            //     {
            //         network: "Twitter",
            //         username: "john",
            //         url: "http://twitter.com/john",
            //     }],
            profile: { type: Object, required: true, default: () => {} },
        },
    }
</script>

<style scoped>

</style>
