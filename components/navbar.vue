<template>
  <div class="center navbarMain">
    <vs-navbar
      fixed
      shadow-scroll
      shadow
      not-line
      square
      center-collapsed
      v-model="active"
    >
      <template #left>
        <img src="@/static/icon.png" alt="" style="height: 44px" />
      </template>
      <template #right>
        <vs-button v-if="!loggedIn" @click="login">Login</vs-button>
        <vs-button flat v-if="loggedIn" @click="logout">Logout</vs-button>
      </template>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  computed: {
    loggedIn() {
      return this.$auth.loggedIn
    },
  },
  methods: {
    login() {
      this.$router.push('/login')
    },
    logout() {
      this.$auth.logout()
    },
  },
}
</script>
<style scoped>
.navbarMain {
  padding-top: 44px;
}
</style>
