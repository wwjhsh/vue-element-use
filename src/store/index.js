import Vuex from 'vuex';
import Vue from 'vue';
import tab from '@/store/modules/tab'
import user from '@/store/modules/user'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
Vue.use(Vuex);
const state = {
    clientWidth:0
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        tab,
        user
    }
})
