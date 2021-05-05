import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import data from './mockData/state_district_wise.json'
const data_uri = `https://api.covid19india.org/state_district_wise.json`
Vue.use(Vuex)

const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false,
  data: {},
  localData: data,
  data2: {},
  title: 'My Title',
  state_nav: [],
  stateNames: [],
  stateData: []
}

const mutations = {


  toggleSidebarDesktop(state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile(state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  set(state, [variable, value]) {
    state[variable] = value
  },
  SET_DATA: (state, payload) => {
    state.data = payload
  }

}
const actions = {
  FETCH_DATA: ({ commit }) => {
    axios
      .get(data_uri)
      .then(response => {
        console.log('online data');
       // console.log(response.data);
        //console.log(state.localData);
        state.localData = response.data;
      })
      .catch(error => {
        console.log(error)
        console.log('local data');
       //  commit('SET_DATA', state.localData);
      })
    
    commit('SET_DATA', state.localData);

  }
}






const getters = {
  GET_STATES: (state) => {
    return Object.keys(state.data)
  },
  GET_STATE_NAV: (state) => {     
    state.stateNames = Object.keys(state.data)
    state.stateNames.forEach(element => {
      state.state_nav.push({
        name: element.toUpperCase(),
        to: '/State/' + element,
      })

    })

    return state.state_nav;
  },

}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})