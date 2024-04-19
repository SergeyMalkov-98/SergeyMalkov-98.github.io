<template>
  <div class="product-gallery">
    <div class="product-gallery__wrapper">
      <swiper
        :loop="true"
        :thumbs="{ swiper: thumbsSwiper }"
        class="product-gallery__swiper"
        :modules="[SwiperEffectCoverflow, SwiperThumbs]"
      >
        <swiper-slide v-for="(slide, index) in galleryData" :key="index">
          <nuxt-img
            :placeholder="slide.image"
            :src="slide.image"
            :alt="slide.name"
            class="product-gallery__main-image"
            draggable="false"
          />
        </swiper-slide>
      </swiper>
      <swiper
        @swiper="setThumbsSwiper"
        :slidesPerView="5"
        :watchSlidesVisibility="true"
        :watchSlidesProgress="true"
        class="product-gallery__swiper-thumb"
        :modules="[SwiperEffectCoverflow, SwiperThumbs, SwiperFreeMode]"
        :breakpoints="{ 470: { slidesPerView: 7 } }"
      >
        <swiper-slide
          v-for="(slide, index) in galleryData"
          :key="index"
          class="product-gallery__thumb-slider"
        >
          <nuxt-img
            :placeholder="slide.image"
            :src="slide.image"
            :alt="slide.name"
            class="product-gallery__image"
            draggable="false"
            width="50"
            :class="{ active: mainSwiper?.realIndex == index }"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
defineProps({
  galleryData: {
    type: Object,
    default: null,
  },
});

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const swiperUpdate = () => thumbsSwiper.value.update();

onMounted(() => {
  window.addEventListener("resize", swiperUpdate);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", swiperUpdate);
});
</script>

<style lang="scss" scoped>
.product-gallery {
  $this: &;

  &__wrapper {
    width: 100%;

    @include mobile-up {
      max-width: 433px;
    }
  }
  &__swiper {
    margin-bottom: 24px;
  }

  &__main-image {
    border-radius: 16px;

    object-fit: cover;
    width: 100%;
    height: 100%;

    @include mobile-up {
    }
  }

  &__image {
    border-radius: 12px;
  }

  &__thumb-slider {
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  .swiper-slide-thumb-active {
    #{$this}__image {
      border: solid 1px;
    }
  }
}
</style>
