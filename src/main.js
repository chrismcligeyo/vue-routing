import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'; // after npm install vue-router, import it to file you will use it in. In this case main is where i use it

//import routes constant from routes.js. You set up your routes in file created(routes.js). We do so sa as not to conjest main.js file coz routes can be many, so we create own file for them and import here so as to register routes here.

//Registering routes
import { routes } from './routes';

Vue.use(VueRouter); // enables you to use package VueRouter. Similar process to VueResource. Routing enabled
//After this setup routes. could set them up here, but are setup in own file (routes.js) and imported here. Make sure to register route in this vue instance

//Pass your routes to your VueRouter. create object router using VueRouter(class) from vue-router package installed through npm install
const router = new VueRouter({
  routes: routes, //key is routes, value is routes. value routes being routes imported from routes.js> ES6 shortcut would be righting it as just routes, instead of routes: routes,
  mode: 'history', // 2 modes. hash and history. default is hash. which set domain as example.com/#/user. History sets domain as example.com/user, which is prettier

  //addedto affect scroll behaviour after adding hash to user detail
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return {x: 0, y: 0};
  }

});

//executed on each routing action. protects routes globally. can be done in component itself, userdetail, or the path in routes.js
router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next(); //allows routing action to continue. you can pass nothing, pass false it will abort
});

Vue.config.productionTip = false

//after passing routes to VueRouter,i.e(router object), pass the router object instantiated above to your Vue instance
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
