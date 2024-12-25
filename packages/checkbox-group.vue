<template>
  <div class="sjc-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SjcCheckboxGroup',
  props: {
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>

</style>