<script setup>
import { ref, inject } from 'vue'

defineProps({
  msg: String,
})

</script>

<template>
  <h1>{{ msg }}</h1>

</template>

<style lang="scss">

</style>
