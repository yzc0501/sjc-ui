<template>
  <div class="sjc-checkbox-group">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, provide, ref } from "vue"

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['update:modelValue'])
const checkboxGroupValue = ref(props.modelValue)

provide("checkboxGroupKey", {
  name: "SjcCheckboxGroup",
  modelValue: checkboxGroupValue,
  changeEvent: (val) => {
    checkboxGroupValue.value = val
    emit('update:modelValue', val)
  }
})
</script>

<style>

</style>