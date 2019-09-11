<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">VueMonk</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/contactus" activeClass="active" tag="li"><a>Contact Us</a></router-link>
                    <router-link to="/userslist" activeClass="active" tag="li"><a>userslist</a></router-link>
                    <router-link to="/video" activeClass="active" tag="li"><a>video</a></router-link>
                    <!-- <router-link to="/images" activeClass="active" tag="li"><a>Images</a></router-link> -->
                </ul>
                <button class="navbar-text navbar-right" @click="logout">Logout</button>
                <!-- <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click="endDay">End Day</a></li>
                    <li
                            class="dropdown"
                            :class="{open: isDropdownOpen}"
                            @click="isDropdownOpen = !isDropdownOpen">
                        <a
                                href="#"
                                class="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false">Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#" @click="saveData">Save Data</a></li>
                            <li><a href="#" @click="fetchData">Load Data</a></li>
                        </ul>
                    </li>
                </ul> -->
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
    // import {mapActions} from 'vuex';
    // import axios from 'axios';
    export default {
        data(){
            return {
                isDropdownOpen: false
            }
        },
        computed: {
            cmtd(){
                
            }
        },methods: {
            // ...mapActions(['randomizeStocks','loadData']),
            // endDay(){
            //     this.randomizeStocks();
            // }
            logout(){
                this.$store.dispatch('UserLogout');
                this.$router.push({
                    name : 'Login'
                });
            }
            
        }
    }
</script>