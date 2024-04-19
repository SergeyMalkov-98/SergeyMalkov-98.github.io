<template>
  <div class="product-info">
    <div class="product-info__wrapper">
      <div class="product-info__header" @click="show = !show">
        <h5 class="product-info__heading">
          Можно ли простудиться от кондиционера? И как этого избежать?
        </h5>
        <i class="icon-arrow-up product-info__icon" :class="{ rotate: show }" />
      </div>
      <transition name="translate-y">
        <div class="product-info__content" v-show="show">
          <p class="product-info__content-paragraph">
            Простудиться при пользовании кондиционером действительно можно, но
            этого легко избежать, если следовать простым правилам эксплуатации
            кондиционера.
          </p>
          <p class="product-info__content-paragraph">
            Во-первых, не нужно направлять воздушный поток на человека – с
            помощью управления горизонтальными и вертикальными жалюзи, а также
            правильного выбора первоначальной установки кондиционера.
          </p>
          <p class="product-info__content-paragraph">
            Во-вторых, разница температур внутри охлаждаемого помещения и
            снаружи не должна превышать 10 градусов, в идеале 5-7 градусов.
          </p>
          <p class="product-info__content-paragraph">
            В-третьих, надо понимать, что любой кондиционер осушает воздух, а
            низкая влажность воздуха в помещении – это потенциальная опасность
            заболевания для человеческого организма. Здесь на помощь приходят
            увлажнители воздуха.
          </p>
          <p class="product-info__content-paragraph">
            И последнее, что хотелось бы отметить, нерегулярное техобслуживание
            кондиционера приводит к распространению вредоносных бактерий,
            появлению плесени, загрязнению фильтров – осуществляйте чистку как
            внутреннего, так и наружного блоков сплит-системы хотя бы раз в год.
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
const show = ref(false);
</script>

<style lang="scss" scoped>
.product-info {
  &__wrapper {
    padding: 20px;
    border: solid 1px var(--c-grey-50);
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    user-select: none;
  }
  &__heading {
    @include h5;
  }
  &__icon {
    color: var(--c-grey-200);
    font-size: 24px;
    transition: 0.2s;
    &.rotate {
      transform: rotate(0deg);
    }
    &:hover {
      background: var(--c-blue-200);
      border-radius: 10px;
    }
  }
  &__content {
    margin-top: 25px;
  }
  &__content-paragraph {
    @include txt-r;
    &:not(&:last-child) {
      margin-bottom: 20px;
    }
  }
}
</style>
