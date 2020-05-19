export default {
  async setMenuDrawer({ commit }, data) {
    await commit('SET_MENUDRAWER', data)
  }
}
