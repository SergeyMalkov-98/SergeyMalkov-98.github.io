<template>
  <transition name="translate-y">
    <div class="ui-modal" v-show="modelValue" ref="modalRef">
      <div class="ui-modal__background" @click="close" />
      <div class="ui-modal__container">
        <loader-wrapper
          :loading="loading"
          :class="{ 'ui-modal__loader': loading }"
        >
          <ui-spinner class="ui-modal__spinner" v-show="loading" />
          <i class="icon-close ui-modal__close" @click="close" />
          <slot />
        </loader-wrapper>
      </div>
    </div>
  </transition>
</template>

<script setup>
import LoaderWrapper from "~/components/loader-wrapper.vue";
import UiSpinner from "~/components/ui-spinner.vue";

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const modalRef = ref(null);

const close = () => {
  emit("update:modelValue", false);
};

watch(
  () => props.modelValue,
  (value) => {
    if (value) disableBodyScroll(modalRef.value);
    else enableBodyScroll(modalRef.value);
  }
);
</script>

<style lang="scss" scoped>
.ui-modal {
  overflow: auto;
  overscroll-behavior: contain;
  z-index: 3;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &__loader {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__spinner {
    position: absolute;
    z-index: 1;
  }

  &__background {
    background: #00000040;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &__container {
    z-index: 1;
    transition: transform 0.2s ease-out;
    background: var(--c-white);
    padding: var(--modal-container-padding, 30px);
    user-select: none;
    box-shadow: 0px 4px 30px 0px #00000026;
    position: relative;
    height: 100%;
    width: 100%;
    max-width: var(--modal-max-width);

    @include mobile-up {
      min-width: var(--modal-min-width, 300px);
      height: auto;
      width: auto;
      border-radius: 10px;
    }
  }

  &__close {
    z-index: 1;
    position: absolute;
    right: 0;
    top: 0;
    padding: 30px 30px 0 0;
    font-size: 24px;
    cursor: pointer;
    color: var(--c-grey-200);
  }
}
</style>
