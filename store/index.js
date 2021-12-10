export const state = () => ({
  pageBackgroundColor: '#F1F1F1',
  pageNoScroll: false
})

export const mutations = {
  setPageNoScroll (state, payload) {
    state.pageNoScroll = payload
  },
  changePageColor (state, payload) {
    state.pageBackgroundColor = payload
  }
}
