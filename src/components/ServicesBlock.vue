<template>
  <div class="services">
    <Button @click="newGame">
      New game
    </Button>
    <Button
      :disabled="count === 0"
      @click="reloadGame"
    >
      Reload game
    </Button>
  </div>
</template>

<script setup>
  import { inject } from 'vue';

  const count = inject('count');
  const newGame = inject('newGame');
  const reloadGame = inject('reloadGame');
</script>

<style lang="scss">
  .services {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }
</style>
