<template>
  <div class="modal-form">
    <div class="modal-form__wrapper">
      <div class="modal-form__head">
        <div class="modal-form__head-sub-info mobile-up">
          <div class="modal-form__head-sub-info-images">
            <nuxt-img
              src="/images/daichi.svg"
              alt="нашли дешевле ?"
              draggable="false"
              class="modal-form__sub-image"
              width="114"
              height="20"
            />
            <nuxt-img
              src="/images/market.svg"
              alt="нашли дешевле ?"
              draggable="false"
              class="modal-form__sub-image"
              width="88"
              height="25"
            />
          </div>
          <div class="modal-form__head-sub-info-text">
            <h2 class="modal-form__head-sub-info-text-item">Нашли дешевле?</h2>
            <h2
              class="modal-form__head-sub-info-text-item modal-form__head-sub-info-text-item--blue"
            >
              Снизим цену!
            </h2>
          </div>
        </div>
        <nuxt-img
          src="/images/cheaper.png"
          alt="нашли дешевле ?"
          draggable="false"
          width="222"
          height="255"
          class="modal-form__image"
        />
      </div>
      <div class="modal-form__form-container">
        <div class="modal-form__head-sub-info-text mobile-only">
          <h2 class="modal-form__head-sub-info-text-item">Нашли дешевле?</h2>
          <h2
            class="modal-form__head-sub-info-text-item modal-form__head-sub-info-text-item--blue"
          >
            Снизим цену!
          </h2>
        </div>
        <div class="modal-form__additional-info">
          Если у конкурента цена ниже — вернём разницу! Отправьте ссылку на
          альтернативное предложение и получите товар по привлекательной цене.
        </div>
        <div class="modal-form__controls">
          <ui-input
            class="modal-form__control"
            label="Ваше имя"
            required
            v-model="state.name"
          />
          <ui-input
            class="modal-form__control"
            label="Телефон"
            required
            :mask="{ mask: '+{7} (000) 000-00-00' }"
            v-model="state.phone"
          />
        </div>
        <ui-button :disabled="!isValid" @click="$emit('success-modal')">
          Отправить
        </ui-button>
        <div class="modal-form__policy">
          Нажимая на кнопку, вы соглашаетесь с нашей
          <nuxt-link to="/" class="modal-form__link">
            политикой конфиденциальности
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import UiInput from "~/components/ui-input.vue";
import UiButton from "~/components/ui-button.vue";

const state = inject("formModalState");

defineEmits(["success-modal"]);

const isValid = computed(() => {
  return !!state.name && !!state.phone;
});
</script>

<style lang="scss" scoped>
.modal-form {
  &__head {
    background: var(--c-blue-200);
    position: relative;
    display: flex;
    padding: 30px;
    justify-content: center;
    border-radius: 16px 16px 0 0;
    height: 255px;
    @include mobile-up {
      justify-content: unset;
    }
  }
  &__head-sub-info-images {
    display: flex;
    align-items: center;
  }
  &__sub-image {
    &:not(&:last-child) {
      margin-right: 16px;
    }
  }
  &__head-sub-info-text {
    margin-bottom: 15px;
    @include mobile-up {
      position: absolute;
      bottom: 30px;
      margin-bottom: 0;
    }
  }
  &__head-sub-info-text-item {
    color: var(--c-black);
    @include h2-l;
    &--blue {
      color: var(--c-blue-500);
    }
  }
  &__image {
    position: absolute;
    top: 0;

    @include mobile-up {
      right: 108px;
    }
  }
  &__form-container {
    padding: 30px;
  }
  &__additional-info {
    @include txt-r;
    color: var(--c-grey-200);
    margin-bottom: 25px;
  }

  &__controls {
    margin-bottom: 30px;
  }
  &__control {
    &:not(&:last-child) {
      margin-bottom: 15px;
    }
  }
  &__policy {
    margin-top: 15px;
    text-align: center;
    @include txt-s;
    color: var(--c-grey-200);
  }
  &__link {
    color: var(--c-blue-500);
    text-decoration: none;
  }
}
</style>
