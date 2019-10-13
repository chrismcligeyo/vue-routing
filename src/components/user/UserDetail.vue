<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <router-link
                tag="button"
                :to="link"
                class="btn btn-primary"><!--:to was previously :to="{ name: 'userEdit', params: { id: $route.params.id }, query: { locale: 'en', q: 100 } }"-->Edit User</router-link><!--name is name of path set in route.js. query is query parameters. are parameters that come after domain seperated by ?.?locale=en&q=100.  http://localhost:8080/user/3/edit?locale=en&q=100-->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                link: {
                    name: 'userEdit',
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        locale: 'en',
                        q: 100
                    },
                    hash: '#data'
                }
            }
        },
        //another way to guard route in the component itself(locally). can be done in main.js globally, and route.js at the path locally.
        beforeRouteEnter(to, from, next) {
            if (true) {
                next();
            } else {
                next(false); //aborts
            }
        }
    }
</script>