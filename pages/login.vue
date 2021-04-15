<template>
  <div>
    <navbar />
    <main class="page">
      <h1>ログイン画面</h1>
      <vs-button gradient v-on:click="discordAuthenticate"> Discord </vs-button>
    </main>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      active: 0,
    }
  },
  methods: {
    discordAuthenticate() {
      this.$auth.loginWith('discord')
    },
  },
}
</script>
