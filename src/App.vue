<template>
  <div id="app">
    <div id="ss" @click="s" style="margin-left:300px">
      11111
    </div>
  </div>
</template>

<script>
import Signature from "./lib/index.js"

export default {
  mounted () {

  },
  methods: {
    s () {
      this.$nextTick(() => {
        const testSignature = new Signature("ss")
        testSignature.signature()
      })
    },
  }
}
</script>

<style>

</style>
