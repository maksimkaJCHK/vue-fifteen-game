<template>
  <div class="fifteen-game">
    <Settings />
    <Header />

    <Wrapper class="mainContent">
      <main>

      </main>
    </Wrapper>

    <Footer />
  </div>
</template>

<script setup>
  import { ref, provide } from 'vue';

  import Header from '@/layouts/Header.vue';
  import Footer from '@/layouts/Footer.vue';
  import Settings from '@/layouts/Settings.vue';

  const isSettings = ref(false);

  const closeSettings = () => isSettings.value = false;
  const openSettings = () => isSettings.value = true;

  provide('isSettings', isSettings);
  provide('closeSettings', closeSettings);
  provide('openSettings', openSettings);
</script>

<style lang="scss">
  :root {
    --service-block-bg: #f39c12;
    --button-bg: #375a7f;
    --item-bg: #1e5c9d;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font: 16px/120% Arial, "Helvetica CY", "Nimbus Sans L", sans-serif;
  }

  body {
    background: #222;
  }

  #app {
    min-height: 100vh;
    min-height: 100dvh;
    box-sizing: border-box;
  }

  .mainContent {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    min-height: calc(100vh - 102px);
    min-height: calc(100dvh - 102px);

    main {
      width: 100%;
    }
  }
</style>
