<template>
  <div class="index-page">
    <ui-modal
      v-model="formModal"
      class="index-page__form-modal"
      :loading="loading"
    >
      <modal-form @success-modal="successModalOpen" />
    </ui-modal>
    <ui-modal v-model="successModal" class="index-page__success-modal">
      <modal-success @close="successModal = false" />
    </ui-modal>

    <div class="index-page__wrapper">
      <product-gallery
        class="index-page__product-gallery"
        :gallery-data="product_info.gallery_data"
      />
      <div class="index-page__product-content">
        <h3 class="index-page__product-title">{{ product_info.title }}</h3>
        <div
          class="index-page__product-favorite"
          @click="favorite = !favorite"
          :class="{ active: favorite }"
        >
          <i class="icon-favorite index-page__product-favorite-icon" />
          {{ favorite ? "В избранном" : "В избранное" }}
        </div>
        <div class="index-page__product__info">
          <product-characteristics
            :сharacteristics="product_info.сharacteristics"
            class="index-page__product-сharacteristics mobile-up"
          />
          <div class="index-page__product-price-info">
            <div class="index-page__product-price">{{ price }} ₽</div>
            <product-cheaper @click="formModal = true" />
          </div>
        </div>
        <product-info />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductGallery from "~/components/product-gallery.vue";
import ProductCharacteristics from "~/components/product-сharacteristics.vue";
import ProductCheaper from "~/components/product-cheaper.vue";
import ProductInfo from "~/components/product-info.vue";
import UiModal from "~/components/ui-modal.vue";
import ModalForm from "~/components/modal-form.vue";
import ModalSuccess from "~/components/modal-success.vue";

import { product_info } from "@/mock.js";

const formModal = ref(false);
const loading = ref(false);
const successModal = ref(false);
const favorite = ref(false);

const formModalState = reactive({
  name: "",
  phone: "",
});

const successModalOpen = () => {
  loading.value = true;
  setTimeout(() => {
    formModal.value = false;
    successModal.value = true;
    loading.value = false;
  }, 2000);
};

const price = computed(() => {
  return Intl.NumberFormat("ru-RU", {
    style: "decimal",
    currency: "RUB",
  }).format(product_info.price);
});

onMounted(() => {
  favorite.value = +localStorage.getItem("favorite");
});

watch(
  () => favorite.value,
  () => {
    localStorage.setItem("favorite", +favorite.value);
  }
);

provide("formModalState", formModalState);
</script>

<style lang="scss" scoped>
.index-page {
  &__form-modal {
    --modal-container-padding: 0px;
    @include mobile-up {
      --modal-max-width: 690px;
    }
  }
  &__success-modal {
    --modal-min-width: 690px;
  }
  &__wrapper {
    @include mobile-up {
      display: flex;
    }
  }
  &__product-gallery {
    @include mobile-up {
      margin-right: 60px;
    }
  }
  &__product-content {
    margin-top: 24px;
    @include mobile-up {
      margin-top: 0;
    }
  }
  &__product-title {
    @include h5;
    margin-bottom: 16px;

    @include mobile-up {
      @include h2;
    }
  }
  &__product-favorite {
    display: flex;
    align-items: center;
    @include txt-s;
    color: var(--c-grey-200);
    cursor: pointer;
    width: fit-content;
    margin-bottom: 24px;
    transition: 0.2s;
    &:hover {
      color: var(--black);
    }
    &.active {
      color: var(--c-blue-500);
    }
    @include mobile-up {
      margin-bottom: 32px;
    }
  }
  &__product-favorite-icon {
    font-size: 24px;
    margin-right: 10px;
  }
  &__product-сharacteristics {
    margin-right: 30px;
  }
  &__product__info {
    display: flex;
    margin-bottom: 32px;
  }
  &__product-price-info {
    width: 100%;
  }
  &__product-price {
    padding: 30px;
    background: var(--c-white);
    box-shadow: 0px 4px 30px 0px #00000026;
    border-radius: 16px;
    @include h2;
    margin-bottom: 24px;
  }
}
</style>
