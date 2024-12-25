<template>
  <div class="sjc-form-item" :style="labelStyle">
    <label class="sjc-form-item__label">{{label}}</label>
    <div class="sjc-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SjcFormItem',
  props: {
    label: String,
    prop: String
  },
  data () {
    return {
      errorMessage: ''
    }
  },
  methods: {
    validate () {
      // 验证逻辑
    }
  }
}
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