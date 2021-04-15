<template>
  <div class="page">
    <navbar />
    <div>
      <header class="content-logos">
        <logo />
        <span class="plus">+</span>
        <VuesaxLogo />
      </header>
      <h1 class="title">Nuxt.js + Vuesax</h1>
      <h2 class="subtitle">
        <a href="https://vuesax.com/">Vuesax</a> is a framework of ui components
        for <a href="https://vuejs.org/">Vuejs</a>, It was created to make new
        interfaces that have a new trend and are visually beautiful
      </h2>
      <nuxt-link to="/login">ログイン画面へ</nuxt-link>
      <div class="links">
        <h3 class="h3">Vuesax</h3>
        <a
          href="https://vuesax.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://discordapp.com/invite/9dsKtvB"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          Discord
        </a>
        <a
          href="https://github.com/lusaxweb/vuesax"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <div class="links">
        <h3 class="h3">Nuxt.js</h3>
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
