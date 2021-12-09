export const state = () => ({
  pageBackgroundColor: '#F1F1F1'
})
export const mutations = {
  changePageColor (state, payload) {
    state.pageBackgroundColor = payload
  }
}
