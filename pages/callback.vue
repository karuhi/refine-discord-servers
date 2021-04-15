<template>
  <div ref="target" id="target" class="center"></div>
</template>

<script>
export default {
  mounted() {
    const loading = this.$vs.loading({
      text: '読み込み中…',
    })
    setTimeout(() => {
      loading.close()
    }, 10000)
  },
}
</script>
