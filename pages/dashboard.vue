<template>
  <div>
    <h1>ログインしました</h1>
    <p>Hello, {{ $store.state.auth.user }}さん</p>
    <!-- <P>Hello, {{ $auth.$state.user.username }}さん</P> -->
    <button @click="logout">ログアウト</button>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  methods: {
    logout() {
      this.$auth.logout()
    },
  },
}
</script>
