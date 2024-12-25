<template>
  <sjc-button type="primary">按钮</sjc-button>
  <sjc-switch v-model="something"/>
  <sjc-checkbox-group v-model="value">
    <sjc-checkbox label="选项1" />
    <sjc-checkbox label="选项2" />
    <sjc-checkbox label="选项3" />
  </sjc-checkbox-group>
  <sjc-checkbox v-model="dialogVisible" label="选项1" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref(['选项1'])
const dialogVisible = ref(true)
const something = ref(true)
</script>

<style lang="scss">
</style>
