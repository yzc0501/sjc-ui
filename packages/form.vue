<template>
  <div class="sjc-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SjcForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: Object
  },
  methods: {
    validate (callback) {
      // 验证逻辑
    }
  }
}
</script>

<style>

</style>