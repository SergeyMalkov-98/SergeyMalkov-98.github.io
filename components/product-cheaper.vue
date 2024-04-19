<template>
  <div class="product-cheaper">
    <div class="product-cheaper__image-wrapper">
      <nuxt-img
        src="/images/cheaper.png"
        alt="нашли дешевле ?"
        draggable="false"
        width="92"
        height="111"
        class="product-cheaper__image"
      />
    </div>
    <div class="product-cheaper__texts">
      <h5 class="product-cheaper__title">Нашли дешевле?</h5>
      <span class="product-cheaper__sub-text">
        Сообщите нам и мы снизим цену!
      </span>
    </div>
    <i class="icon-arrow-right product-cheaper__icon" />
  </div>
</template>

<style lang="scss" scoped>
.product-cheaper {
  $this: &;

  background: var(--c-blue-200);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: 0.2s;
  padding: 16px;

  &:hover {
    #{$this}__icon {
      transform: translateX(5px);
    }
  }

  @include mobile-up {
    padding: 24px 16px;
  }

  &:hover {
    background: var(--c-blue-600);
  }

  &__texts {
    margin-left: 14px;
  }

  &__image-wrapper {
    width: 92px;
  }

  &__image {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  &__title {
    @include h5;
  }
  &__sub-text {
    @include txt-s;
  }
  &__icon {
    font-size: 24px;
    margin-left: auto;
    transition: 0.2s;
  }
}
</style>
