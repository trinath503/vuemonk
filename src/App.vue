<template>
  <div id="app">
    
    <app-nav-bar v-show="showNavBar"></app-nav-bar>
    <router-view></router-view>

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    appNavBar: NavBar
  },
  computed:{
    showNavBar() {
      let hiddeRouteNames = ["Login"];
      return hiddeRouteNames.indexOf(this.$route.name) === -1;
    }
  },
  created(){
    this.$store.dispatch('SetLoginDetails');
    if(this.$store.getters.isUserLoggedIn=="undefined"){
      this.$store.dispatch('InitalizeUser');
    }
    if(this.$store.getters.isUserLoggedIn!='true'){
      //check whether the user is already in loggin page
      if(this.$route.name!="Login"){
        this.$router.push({
                    name : 'Login'
                });
      }
      console.log('User has to loggin');
    }else{
      //User already loggedIn
      this.$router.push({
                    name : 'Home'
                });
    }
    
    console.log(localStorage);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #00adef;
}
</style>
