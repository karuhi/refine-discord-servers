<template>
  <div>
    <navbar />
    <main class="page">
      <h1>ログインしました</h1>
      <p>Hello, {{ user }}さん</p>
      <div>guilds{{ guilds }}</div>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  middleware: 'auth',
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    guilds() {
      return this.$store.state.discordApi.guilds
    },
  },
  data: function () {
    return {
      test: '',
    }
  },
  mounted() {
    this.getGuild()
  },
  methods: {
    ...mapActions({
      getGuild: 'discordApi/getGuild',
    }),
  },
}
</script>
