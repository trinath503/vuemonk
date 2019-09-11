const state = {
    videoAnnotations:[]
};


const mutations = {
    'INIT_ANNOTATION'(state){
        state.videoAnnotations = [];
    },
    'ADD_ANNOTATION'(state,annDetails){
        state.videoAnnotations.push(annDetails);   
    },
    
};


const actions = {
    InitalizeAnnotations: ({commit}) =>{
        commit('INIT_ANNOTATION');
    },
    AddAnnotations: ({commit},annDetails) =>{
        commit('ADD_ANNOTATION', annDetails);
    }

}

const getters = {
    getAnnotationDetails: state =>{
        return state.videoAnnotations;
    },
}


export default {
    state,
    mutations,
    actions,
    getters
}