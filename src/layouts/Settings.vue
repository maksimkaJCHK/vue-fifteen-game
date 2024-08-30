<template>
  <aside
    class="settings"
    :class="{ open: isSettings }"
  >
    <Wrapper @click="closeSettings">
      <div
        class="settings-wrapper"
        @click.stop
      >
        <div class="settings-block">
          <Close @click="closeSettings" />

          <div class="settings-header">
            Size game
          </div>

          <form
            action="example.php"
            @submit.prevent="saveSettings"
          >
            <Radio
              v-model="setSize"
              :val = "3"
              name="size"
            >
              3 X 3
            </Radio>
            <Radio
              v-model="setSize"
              :val = "4"
              name="size"
            >
              4 X 4
            </Radio>
            <Radio
              v-model="setSize"
              :val = "5"
              name="size"
            >
              5 X 5
            </Radio>

            <Button
              class="settings-submit"
              :disabled="setSize === size"
            >
              Save settings
            </Button>
          </form>
        </div>
      </div>
    </Wrapper>
  </aside>
</template>

<script setup>
  import { ref, inject, watch } from 'vue';

  import Close from '@/UI/Close.vue';
  import Radio from '@/UI/Radio.vue';

  const setSize = ref(3);

  const isSettings = inject('isSettings');
  const closeSettings = inject('closeSettings');
  const size = inject('size');
  const changeSize = inject('changeSize');

  const saveSettings = () => {
    changeSize(setSize.value);
    closeSettings();
  };

  const openSettings = (val) => {
    if (val) setSize.value = size.value;
  };

  watch(isSettings, openSettings);
</script>

<style lang="scss">
  @import '@/styles/_easing.scss';

  .settings {
    --track-color: #6587ac;

    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    position: fixed;
    color: #fff;

    .wrapper {
      padding-top: 0;
      padding-bottom: 0;

      &::after {
        top: 0;
        left: 20px;
        width: calc(100% - 20px);
        content: ' ';
        display: block;
        position: absolute;
        height: 100vh;
        height: 100dvh;
        opacity: 0;
        z-index: 2;
        pointer-events: none;
        background: rgba(0, 0, 0, .4);
        transition: opacity .4s $easeInOutQuad 0s;
      }
    }

    &.open {
      .wrapper {
        &::after {
          opacity: 1;
          cursor: pointer;
          pointer-events: all;
        }
      }
    }

    &-submit {
      margin-top: 20px;
    }

    &-header {
      font-size: 20px;
      font-weight: bold;
      line-height: 120%;
      margin: 0 0 20px;
      text-shadow: 1px 1px 2px #000;
    }

    &-wrapper {
      left: 0;
      width: 80%;
      overflow: hidden;
      pointer-events: none;
      box-sizing: border-box;
      position: absolute;
      padding-right: 3px;
      z-index: 3;
    }

    &-block {
      height: 100vh;
      height: 100dvh;
      pointer-events: auto;
      box-sizing: border-box;
      transform: translateX(-110%);
      background: var(--service-block-bg);
      transition: transform .4s $easeInOutQuad 0s;
      box-shadow: 0 0 10px rgba(0, 0, 0, .4);
      padding: 60px 15px 10px;
      overflow: auto;

      @-moz-document url-prefix() {
        & {
          scrollbar-width: auto;
          scrollbar-color: var(--item-bg) var(--track-color);
        }
      }
      &::-webkit-scrollbar {
        width: 10px;
      }

      &::-webkit-scrollbar-track {
        background: var(--track-color);
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--item-bg);
        border-radius: 20px;
      }

      .open & {
        transform: translateX(0);
      }

      .close {
        top: 10px;
        right: 10px;
        position: absolute;
      }
    }

    @media screen and (min-width: 980px) {
      .wrapper {
        position: relative;
      }

      &-wrapper {
        left: auto;
      }
    }
  }
</style>
