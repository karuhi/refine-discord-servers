import axios from 'axios'

export const state = () => ({
  guilds: [],
  tags: [],
})

export const mutations = {
  setGuild(state, guildList) {
    state.guilds = guildList
  },
  setTag(state, tagList) {
    state.tags = tagList
  },
}

export const actions = {
  async getGuild({ commit }) {
    const res = await this.$axios.$get('/users/@me/guilds')
    let tagList = listUpTags(res)
    commit('setTag', tagList)
    commit('setGuild', res)
  },
}

function listUpTags(tagList) {
  var counts = {}
  let tags = []
  tagList.forEach((tag) => {
    if (tag.features.length > 0) {
      tag.features.forEach((feature) => {
        tags.push(feature)
      })
    }
  })
  for (var i = 0; i < tags.length; i++) {
    var key = tags[i]
    counts[key] = counts[key] ? counts[key] + 1 : 1
  }
  return counts
}
