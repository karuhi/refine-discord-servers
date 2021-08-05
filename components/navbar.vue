<template>
  <div class="center navbarMain">
    <vs-navbar fixed shadow-scroll shadow not-line square center-collapsed>
      <template #left>
        <img src="@/static/icon.png" alt="" style="height: 44px" />
        <NuxtLink to="/">Refine Discord Servers</NuxtLink>
      </template>
      <template #right>
        <vs-button v-if="!loggedIn" @click="login">Login</vs-button>
        <vs-button v-if="loggedIn" @click="dashboard">Dashboard</vs-button>
        <vs-button flat v-if="loggedIn" @click="logout">Logout</vs-button>
      </template>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    value: '',
  }),
  computed: {
    loggedIn() {
      return this.$auth.loggedIn
    },
  },
  methods: {
    login() {
      this.$router.push('/login')
    },
    dashboard() {
      this.$router.push('/dashboard')
    },
    logout() {
      this.$auth.logout()
    },
  },
}
</script>
