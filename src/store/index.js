import { createStore } from 'vuex'

export default createStore({

  state: {
    showExtraImagesNavBar: false,
    result: [],
    request:[] 
  },

  getters: {
    showExtraImagesNavBar(state){
      return state.showExtraImagesNavBar
    },
    showResult(state){
      let sum = state.result.reduce((acc, item) => item + acc, 0)
      console.log(sum)
      if(sum === 5) {return '100%'}
      if(sum < 5 && sum >= 4) {return '80%'}
      if(sum < 4 && sum >= 3) {return '60%'}
      if(sum < 3 && sum >= 2) {return '40%'}
      if(sum < 2 && sum > 1) {return '20%'}
      if(sum <= 1 && sum > 0) {return '10%'}
      if(sum === 0) {return '0%'}
    }
  },

  mutations: {
    showExtraImagesNavBar(state, bul){
      state.showExtraImagesNavBar = bul
    },
    addAnswer(state, answer){
      state.result.push(answer)
    },
    addRequest(state, item){
      state.request.push(item)
    }
  },

  actions: {
    async getRequest({commit}){
      console.log('eeeeeeeppppppppp')
      let result = await fetch("https://swapi.dev/api/planets/1/")
      
      if (result.status >= 200 && result.status < 300) {
        let response = await result.json()
        console.log(response, 'response!!!!!!!!!')
        commit('addRequest', response);
    } else {
        console.log('errr')
    }
    },
    // getRequest({commit}){
    // //   fetch('https://swapi.dev/api/people/1/')
    // //   .then((resp) => {
    // //     let json = resp.json(); // there's always a body
    // //     console.log(json)
    // //     if (resp.status >= 200 && resp.status < 300) {
    // //       console.log('111111111111')
    // //         commit('addRequest', json);
    // //     } else {
    // //         console.log('errr', json.then(err => {throw err}))
    // //       return json.then(err => {throw err})
    // //     }
    // //   }, (reject) => {console.log('ccccc')})
    // // }
    // },
  },
  modules: {
  }
})
