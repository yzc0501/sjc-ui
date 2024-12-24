<template>
  <div class="sjc-form-item" :style="labelStyle">
    <label class="sjc-form-item__label">{{props.label}}</label>
    <div class="sjc-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup name="sjc-form-item">
import { defineProps, inject, computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: ''
  }
})
const formKey = inject('formKey')
const labelStyle = computed(() => ({
  width: formKey.labelWidth
}))
console.log(labelStyle.value)
</script>

<style lang="scss">
.sjc-form-item {
  margin-bottom: 25px;
  .sjc-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .sjc-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>