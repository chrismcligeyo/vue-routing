<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <p>Loaded ID: {{ id }}</p>
        <button @click="navigateToHome" class="btn btn-primary">Go to Home</button> <!--navigate to Home component-->
        <hr>
        <router-view></router-view><!--router view for child routes links  in userdetail, useredit, userstar -->
    </div>
</template>

<script>
    export default {
        //data and watch were introduced when we had two user tabs with diff ids. id was dynamically set in routes,js
        // data(){
        //     return {
        //       id: this.$route.params.id //id set up dynamically in routes.js , { path: ':id', component: UserDetail }
        //     }
        // },
        // //we introduce watch when you switching between 2 tabs with different ids,eg in header.vue, the two user tabs with different ids. without watch user 2 replicates id of user 1. watch enables user 2 to take its own id, and not copy id of user 1
        // watch : {
        //   '$route'(to,from){
        //       this.id = to.params.id; //new route that gets loaded.
        //   }
        // },
        methods: {
            navigateToHome() { //push route to array of existing routes
                // this.$router.push('/');
                // this.$router.push({ path: '/' });
                //above are two ways push works
                this.$router.push({ name: 'home' });
            }
        }
    }
</script>