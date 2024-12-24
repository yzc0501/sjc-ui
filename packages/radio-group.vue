<template>
  <div class="sjc-radio-group">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, provide, ref } from "vue"

const props = defineProps({
  modelValue: {
    type: String,
    default: ""
  }
})

const emit = defineEmits(['update:modelValue'])
const radioGroupValue = ref(props.modelValue)

provide("radioGroupKey", {
  name: 'SjcRadioGroup',
  modelValue: radioGroupValue,
  changeEvent: (val) => {
    radioGroupValue.value = val
    emit('update:modelValue', val)
  }
})
</script>

<style>

</style>