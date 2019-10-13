<template>
    <!--navigating with router links-->

    <!--below nav links was previously

    <ul class="nav nav-pills">
  <li role="presentation"><a href="#">Home</a></li>
  <li role="presentation"><a href="#">Profile</a></li>

</ul>


    -->
    <!--

      <ul class="nav nav-pills">
  <li role="presentation"><router-link to="/">Home</router-link></li>
  <li role="presentation"><router-link to="/user">User</router-link></li>

</ul>

    -->
    <ul class="nav nav-pills">
        <!--a href attribute usable but removed, instead we use component called <router-link> shipped in with vue router. this does not send request to server like a href. thus page does not reload when link clicked, but domail url changes based on tab clicked-->
        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link><!--exact removes the active class from Home link when a new link is clicked, eg user below-->
        <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>

    </ul>
</template>