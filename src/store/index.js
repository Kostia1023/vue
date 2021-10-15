import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    PersonCardList: [
      {
        id: 1,
        houseNumber: 10,
        listNewspaper: ["Newspaper1-1", "Newspaper2-1", "Newspaper3-1"]
      },
      {
        id: 2,
        houseNumber: 11,
        listNewspaper: ["Newspaper1-2", "Newspaper2-2", "Newspaper3-2"]
      },
      {
        id: 3,
        houseNumber: 12,
        listNewspaper: ["Newspaper1-3", "Newspaper2-3", "Newspaper3-3"]
      },
    ],
  },
  getters: {
    getPersonCardList: ({ PersonCardList }) => PersonCardList,
  },
  mutations: {
    addNewPersonCard(state, dataObj) {
      state.PersonCardList.push({
        id: uuidv4(),
        ...dataObj,
      })
    },
    removeCard(state, dataObj) {
      state.PersonCardList = state.PersonCardList.filter((card) => card.id != dataObj.id)
    }
  },
  actions: {
    addPersonCard({ commit }, data) {
      commit('addNewPersonCard', data)
    },
    removePersonCard({ commit }, data) {
      commit('removeCard', data)
    }
  },
})

export default store
