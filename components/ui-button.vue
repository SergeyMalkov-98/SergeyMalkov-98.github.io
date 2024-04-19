<template>
  <button class="ui-button" :class="{ disabled: disabled }">
    <span class="ui-button-content">
      <slot />
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.ui-button {
  @include txt-m;
  background: var(--c-blue-500);
  border-radius: 5px;
  border: none;
  width: 100%;
  max-width: var(--button-max-width, 100%);
  color: var(--c-white);
  padding: 14px 0;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: var(--c-blue-600);
  }
  &.disabled {
    background: var(--c-grey-100);
  }
}
</style>
