import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://3iq.ca/wp-content/uploads/2018/01/Blockchain_Basics_Cover2-1200x675.jpg',
        id: 'afajfjadfaadfa323',
        title: 'Meetup in New York',
        date: '2019-07-17'
      },
      {
        imageUrl: 'https://g3.dcdn.lt/images/pix/12d795ad5ec28e1bdf-77732867.jpg',
        id: 'aadsfhbkhlk1241',
        title: 'Meetup in Denver',
        date: '2019-07-19'
      }
    ],
    user: {
      id: 'ajaldslfalsk12',
      registeredMeetups: ['aadsfhbkhlk1241']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
