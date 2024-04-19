<template>
  <div class="modal-success">
    <div class="modal-success__wrapper">
      <nuxt-img
        src="/images/wait-call.svg"
        alt="ожидайте звонка"
        draggable="false"
        width="212"
        height="203"
      />
      <h2 class="modal-success__heading">Спасибо!</h2>
      <span class="modal-success__info">
        В скором времени наш менеджер обязательно с вами свяжется.
      </span>
      <ui-button class="modal-success__button" @click="$emit('close')">
        Ок
      </ui-button>
    </div>
  </div>
</template>

<script setup>
import UiButton from "~/components/ui-button.vue";

defineEmits(["close"]);
</script>

<style lang="scss" scoped>
.modal-success {
  &__wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  &__heading {
    @include h2;
    margin: 30px 0 15px;
  }
  &__info {
    color: var(--c-grey-200);
    @include txt-r;
    text-align: center;
  }
  &__button {
    margin-top: 30px;
    --button-max-width: 250px;
  }
}
</style>
