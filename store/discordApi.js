import axios from 'axios'

export const state = () => ({
  guilds: [],
})

export const mutations = {
  setGuild(state, guildList) {
    state.guilds = guildList
  },
}

export const actions = {
  async getGuild({ commit }) {
    const res = await this.$axios.$get('/users/@me/guilds')
    commit('setGuild', res)
  },
}
