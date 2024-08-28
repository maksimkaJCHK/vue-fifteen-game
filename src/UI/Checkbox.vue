<template>
  <div class="radio">
    <input
      :id="idItem"
      :value="props.val"
      :name="props.name"
      v-model="modelValue"
      type="radio"
    />

    <label :for="idItem">
      <slot></slot>
    </label>
  </div>
</template>

<script setup>
  import { defineProps, computed } from 'vue';

  const props = defineProps({
    modelValue: Number,
    val: Number,
    name: String,
  });

  const emit = defineEmits(['update:modelValue'])

  const idItem = computed(() => 'id-' + props.val);

  const modelValue = computed({
    get() {
      return props.modelValue;
    },
    set(val) {
      return emit('update:modelValue', props.val);
    },
  });
</script>

<style lang="scss">
  @import '@/styles/_easing.scss';

  .radio {
    overflow: hidden;
    position: relative;
    padding: 2px 0;

    input[type="radio"] {
      left: -3000px;
      position: absolute;

      &:checked + label {
        &::after {
          background-color: var(--item-bg);
        }
      }
    }

    label {
      cursor: pointer;
      margin: 5px 0;
      display: inline-block;
      font-weight: bold;
      position: relative;
      padding-left: 30px;
      user-select: none;
      text-shadow: 1px 1px 2px black;

      &::after {
        background-color: transparent;
        transition: background-color .4s $easeInOutQuint 0s;
      }

      &::before,
      &::after {
        content: ' ';
        display: block;
        position: absolute;
        border: 2px solid var(--item-bg);
        border-radius: 50%;
      }

      &::before {
        top: 1px;
        left: 0;
        width: 14px;
        height: 14px;
      }

      &::after {
        top: 5px;
        left: 4px;
        width: 6px;
        height: 6px;
      }
    }
  }
</style>
