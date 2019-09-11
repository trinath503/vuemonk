const state = {
    isUserLoggedIn : false
};


const mutations = {
    'INIT_USER'(state){
        localStorage.isUserLoggedIn = false;
    },
    'USER_LOGIN'(state){
        state.isUserLoggedIn =true;
        localStorage.isUserLoggedIn = true;
    },
    'USER_LOGOUT'(state){
        state.isUserLoggedIn =false;
        localStorage.isUserLoggedIn = false;
    },
    'SET_LOGIN'(state){
        //This is not save in production, for development i am doing
        localStorage.LogginEmail = "trinathreddy158@gmail.com";
        localStorage.LogginPassword= "123456";
        
    }
};


const actions = {
    InitalizeUser: ({commit}) =>{
        commit('INIT_USER');
    },
    UserLogin: ({commit}) =>{
        commit('USER_LOGIN');
    },
    UserLogout: ({commit}) =>{
        commit('USER_LOGOUT');
    },
    SetLoginDetails:({commit}) =>{
        commit('SET_LOGIN')
    }

}

const getters = {
    isUserLoggedIn: state =>{
        return localStorage.isUserLoggedIn;
    },
    LoginValidation: (state)=> (userDetails) =>{
        console.log(userDetails,localStorage);
        if(userDetails.email==localStorage.LogginEmail && userDetails.password==localStorage.LogginPassword){
            return true;
        }else{
            return false;
        }
    },
    setObjStorage: (state) => (item,arr) =>{
        localStorage.setItem(item, JSON.stringify(arr));
    },
    getObjStorage: (state) => (item) =>{
        return JSON.parse(localStorage.getItem(item));
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}