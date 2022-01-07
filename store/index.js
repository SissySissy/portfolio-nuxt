export const state = () => ({
  pageBackgroundColor: '#222222',
  pageNoScroll: false,
  hoveringOnProject: false,
  menuIsExpanded: false
})

export const mutations = {
  setPageNoScroll (state, payload) {
    state.pageNoScroll = payload
  },
  changePageColor (state, payload) {
    state.pageBackgroundColor = payload
  },
  toggleHoveringOnProject (state, payload) {
    state.hoveringOnProject = !state.hoveringOnProject
  },
  toggleMenuIsExpanded (state) {
    state.menuIsExpanded = !state.menuIsExpanded
  }
}
