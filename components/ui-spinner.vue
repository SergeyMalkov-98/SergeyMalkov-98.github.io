<template>
  <div class="ui-spinner" />
</template>

<style lang="scss">
.ui-spinner {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-bottom: 2px solid var(--spinner-color, var(--c-black));
  animation: spinner-rotate 1s linear infinite;
}

@keyframes spinner-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
