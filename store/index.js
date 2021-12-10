export const state = () => ({
  pageBackgroundColor: '#F1F1F1',
  headerContent: {}
})

export const mutations = {
  changePageColor (state, payload) {
    state.pageBackgroundColor = payload
  },
  saveDataHeader (state, payload) {
    state.headerContent = payload
  }
}

export const getters = {
  getDataHeader (state) {
    return state.headerContent
  }
}
