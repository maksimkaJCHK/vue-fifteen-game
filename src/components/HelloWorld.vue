<template>
  <h1>{{ msg }}</h1>
</template>

<script setup>
  import { ref, inject } from 'vue'

  defineProps({
    msg: String,
  })
</script>

<style lang="scss">

</style>
