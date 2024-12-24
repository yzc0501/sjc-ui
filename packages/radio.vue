<template>
  <label
    class="sjc-radio"
    :class="{ 'is-checked': props.label === model }"
  >
    <span class="sjc-radio__input">
      <span class="sjc-radio__inner"></span>
      <input
        class="sjc-radio__original"
        :value="props.label"
        :name="name"
        type="radio"
        v-model="model"
      />
    </span>
    <span class="sjc-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script setup>
import { computed, defineProps, defineEmits, inject } from "vue"

const radioGroup = inject("radioGroupKey", null)
const emit = defineEmits(["update:modelValue"])

const props = defineProps({
  label: {
    type: [String, Number, Boolean],
    default: ""
  },
  modelValue: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: ""
  }
})

const isGroup = computed(() => radioGroup !== null)

const model = computed({
  get () {
    return isGroup.value ? radioGroup.modelValue.value : props.modelValue
  },
  set (value) {
    if (isGroup.value) {
      radioGroup.changeEvent(value)
    } else {
      emit("update:modelValue", value)
    }
  }
})
</script>

<style lang="scss" scoped>
.sjc-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .sjc-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .sjc-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .sjc-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .sjc-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.sjc-radio.is-checked {
  .sjc-radio__input {
    .sjc-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .sjc-radio__label {
    color: #409eff;
  }
}
</style>