<template>
  <div>
    <h1>ログイン画面</h1>
    <button v-on:click="discordAuthenticate">Discord</button>
  </div>
</template>

<script>
export default {
  methods: {
    discordAuthenticate() {
      this.$auth.loginWith('discord')
    },
  },
}
</script>
