<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }}</p><!--displays Locale: en-->
        <p>Analytics: {{ $route.query.q }}</p><!--displays analytics: 100-->
        <hr>
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        <div style="height: 700px"></div>
        <p id="data">Some extra Data</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                confirmed: false
            }
        },
        //guard route.are you allowed to leave pah
        beforeRouteLeave(to, from, next) {
            if (this.confirmed) {//if confirmed button clicked you are allowed to leave, if not you are only allowed to leave if you click okay on confirm prompt
                next();// if you dont want to leave
            } else {
                if (confirm('Are you sure?')) {
                    next();
                } else {
                    next(false);
                }
            }
        }
    }
</script>