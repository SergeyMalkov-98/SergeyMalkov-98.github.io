<template>
  <div class="product-сharacteristics">
    <div class="product-сharacteristics__wrapper">
      <div class="product-сharacteristics__title">Характеристики</div>
      <div class="product-сharacteristics__items">
        <div
          class="product-сharacteristics__item"
          v-for="(item, index) in сharacteristics"
          :key="index"
        >
          <div class="product-сharacteristics__label">{{ item.label }}</div>
          <div class="product-сharacteristics__separator" />
          <div class="product-сharacteristics__name">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  сharacteristics: {
    type: Object,
    default: null,
  },
});
</script>

<style lang="scss" scoped>
.product-сharacteristics {
  &__title {
    @include h5;
    margin-bottom: 10px;
  }
  &__item {
    @include txt-s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:not(&:last-child) {
      margin-bottom: 5px;
    }
  }
  &__separator {
    border-bottom: dotted 1px var(--c-grey-200);
    width: 100%;
    flex-wrap: nowrap;
    height: 6px;
    display: flex;
    align-items: center;
    margin: 0 10px;
    min-width: 10px;
  }
  &__name {
    text-wrap: nowrap;
  }
  &__label {
    color: var(--c-grey-200);
    text-wrap: nowrap;
  }
}
</style>
