<template>
  <div
    class="info"
    :class="{ isGameOver: isGameOver}"
  >
    {{ infoText }}
  </div>
</template>

<script setup>
  import { inject, computed } from 'vue';

  const count = inject('count')
  const isGameOver = inject('isGameOver')

  const infoText = computed(() => {
    if (isGameOver.value) return `Congratulations you completed the game in ${count.value} moves.`;
    if (count.value === 0) return `Make the first move.`;

    return `You made ${count.value} moves.`
  });
</script>

<style lang="scss">
  @import '@/styles/_easing.scss';

  .info {
    color: #fff;
    background-color: #1e5c9d;
    border-radius: 5px;
    padding: 15px;
    font-weight: bold;
    margin: 20px 0;
    text-shadow: 1px 1px 2px #000;
    transition: background-color .4s $easeInOutSine 0s;

    h1 {
      margin: 0;
      font-size: 16px;
      line-height: 120%;
    }
    &.isGameOver {
      background-color: #00bc8c;
    }
  }
</style>
