import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';
import Header from './components/Header.vue';


//set up routes. could have set them up in main.js. After setting up routes here, register them in main.js
export const routes = [ //routes array with a couple of different objects. each object represents a route.

    //each route needs a path. Path is what is appended to url to your domain(after your domain). eg if domain is example.com and path is set as '/user': domain will look like example.com/#/user
    { path: '', name: 'home', components: {//set up component to load when you visit said path. import user component above
        default: Home, //home is
        'header-top': Header //named router view in app.vue. The header will be displayed in the home page and not user
    } },
    { path: '/user', components: { //'/:id' is making id dynamic
        default: User,
        'header-bottom': Header //header section will be displayed at bootom of user pag
    }, children: [//child routes. nested routes. routes in
        { path: '', component: UserStart },  //when path left like path:'', it willuse path of parent element. path:'/user/:id/'
        { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                console.log('inside route setup');// beforeEnter used to guard path locally
                next();
            } }, //:id is making id dynamic
        { path: ':id/edit', component: UserEdit, name: 'userEdit' } //name is name of path
    ] },

    //redirecting
    { path: '/redirect-me', redirect: { name: 'home' } }, //could be redirect: '/' . redirect:{ name: 'home' }is an object that goes to named path set above

    //redirect when usser enters path not found in our routes. * catches all routes
    { path: '*', redirect: '/' }
];