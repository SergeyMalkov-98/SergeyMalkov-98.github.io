<template>
  <div class="ui-input">
    <div class="ui-input__label">
      {{ label }}<span v-show="required" class="ui-input__required">*</span>
    </div>
    <div class="ui-input__wrapper">
      <input
        class="ui-input__control"
        ref="inputRef"
        type="text"
        v-bind="inputAttrs"
        @input="inputHandle"
      />
    </div>
  </div>
</template>

<script setup>
import IMask from "imask";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  mask: {
    type: Object,
    default: undefined,
  },
});

const emit = defineEmits(["update:modelValue"]);

const inputRef = ref(null);
const maskInstance = ref(null);

const destroyMask = () => {
  maskInstance.value?.destroy();
  maskInstance.value = null;
};

const initializeMask = () => {
  if (props.mask) {
    maskInstance.value = IMask(inputRef.value, props.mask);
  }
};

const inputHandle = ({ target }) => {
  emit(
    "update:modelValue",
    maskInstance.value ? maskInstance.value.unmaskedValue : target.value
  );
};

const inputAttrs = computed(() => {
  return {
    ...(!maskInstance.value && { value: props.modelValue }),
  };
});

onMounted(() => {
  initializeMask();
});

onUnmounted(destroyMask);
</script>

<style lang="scss" scoped>
.ui-input {
  &__label {
    @include txt-s;
    color: var(--c-grey-200);
    margin-bottom: 5px;
  }
  &__required {
    color: #ef6461;
    font-family: Suisse Intl;
  }
  &__wrapper {
    border-radius: 5px;
    background: var(--c-grey-10);
    height: 46px;
    caret-color: var(--c-grey-200);
  }
  &__control {
    width: 100%;
    height: 100%;

    padding: 12px 15px;

    background: none;
    border: none;
    outline: none;

    color: var(--c-grey-200);

    text-overflow: ellipsis;
    @include txt-r;
  }
}
</style>
