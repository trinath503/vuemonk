import Vue from 'vue';
import Vuex from 'vuex';
import User from './modules/user';
import Video from './modules/video';
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        User,
        Video
    }
});