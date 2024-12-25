<template>
  <div class="sjc-input" :class="{ 'sjc-input_suffix': clearable || showPassword }">
    <input
      class="sjc-input_inner"
      :class="{ 'is-disabled': disabled }"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
      :value="modelValue"
    >
  <span class="sjc-input_suffix" >
   <i class="sjc-input_icon sjc-icon-guanbi" v-if="clearable && modelValue" @click="clear"></i>
   <i class="sjc-input_icon sjc-icon-yanjing" v-if="showPassword && modelValue" :class="{'sjc-input_icon_active': passwordVisible}" @click="handlePassword"></i>
 </span>
  </div>
</template>

<script>
export default {
  name: 'SjcInput',
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    disabled: Boolean,
    clearable: Boolean,
    showPassword: Boolean
  },
  methods: {
    handleInput (e) {
      this.$emit('update:modelValue', e.target.value)
    },
    handleClear () {
      this.$emit('update:modelValue', '')
    }
  }
}
</script>

<style lang="scss" scoped>
  .sjc-input{
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .sjc-input_inner{
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,045,.355,1);
      width: 100%;
      &:focus{
        outline: none;
        border-color: #409eff;
      }
      // input禁用样式
      &.is-disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor:not-allowed;
      }
    }
  }
  .sjc-input_suffix{
    .sjc-input_inner{
      padding-right: 30px;
    }
    .sjc-input_suffix{
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
      .sjc-input_icon_active{
        color: blue;
      }
    }
  }
</style>