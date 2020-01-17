<template>
    <div>
        <fieldset>
            <h5>Your Personal Info</h5>
            <div>
                <label>Full Name</label>
                <input class="u-full-width" type="text" name="basics.name" value="" placeholder="Kumar Chhetri">
            </div>
            <div>
                <label>Email</label>
                <input class="u-full-width" type="text" name="basics.email" value="" placeholder="kumarchhetri@somemail.com"></div>
            <div>
                <label>Phone Number</label>
                <input class="u-full-width" type="text" name="basics.phone" value="" placeholder="(977) 123-456789"></div>
            <div>
                <label>Location</label>
                <input class="u-full-width" type="text" name="basics.location.address" value="" placeholder="Kathmandu, Nepal"></div>
            <div>
                <label>Link</label>
                <input class="u-full-width" type="text" name="basics.website" value="" placeholder="myportfolio.com/myname"></div>
        </fieldset>
    </div>
</template>

<script>
    export default {
        name: "BasicProfileForm",
    }
</script>

<style scoped>

</style>
