<template>
  <footer class="footer">
    <Wrapper>
        <a
          href="https://github.com/maksimkaJCHK/vue-fifteen-game"
          target="_blank"
          class="footer-repo"
        >
          Game repository
        </a>
      </Wrapper>
  </footer>
</template>

<script setup>
  import SettingsIcon from '@/UI/SettingsIcon.vue';
</script>

<style lang="scss">
  .footer {
    --pad-top-bot: 10px;

    color: #fff;
    font-size: 15px;
    background-color: var(--service-block-bg);

    .wrapper {
      padding-top: var(--pad-top-bot);
      padding-bottom: var(--pad-top-bot);
    }

    &-repo {
      color: #fff;
      font-weight: bold;
      text-decoration: none;
      padding-left: 40px;
      line-height: 30px;
      display: inline-block;
      background: url('@/assets/github.svg') no-repeat 0 0;
      background-size: 30px 30px;
      text-shadow: 1px 1px 2px #000;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
