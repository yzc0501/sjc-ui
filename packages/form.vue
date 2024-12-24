<template>
  <div class="sjc-form">
    <slot></slot>
  </div>
</template>

<script setup name="sjc-form">
import { defineProps, provide } from 'vue'

const props = defineProps({
  model: {
    type: Object,
    required: true
  },
  labelWidth: {
    type: String,
    default: '100px'
  }
})
provide('formKey', {
  model: props.model,
  labelWidth: props.labelWidth
})
</script>

<style>

</style>