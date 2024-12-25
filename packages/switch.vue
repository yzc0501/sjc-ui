<template>
  <div
    :class="{ 'is-checked': modelValue }"
    class="sjc-switch"
    @click="handleclick"
  >
    <span class="sjc-switch__core">
      <span class="sjc-switch__button"></span>
    </span>
    <input class="sjc-switch__input" type="checkbox" :name="name">
  </div>
</template>

<script>
export default {
  name: 'SjcSwitch',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.setColor()
    document.querySelector('.sjc-switch__input').checked = this.modelValue
  },
  methods: {
    handleclick () {
      this.$emit('update:modelValue', !this.modelValue)
      this.$nextTick(() => {
        this.setColor()
      })
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.modelValue ? this.activeColor : this.inactiveColor
        document.querySelector('.sjc-switch__core').style.backgroundColor = color
        document.querySelector('.sjc-switch__button').style.borderColor = color
        document.querySelector('.sjc-switch__input').checked = this.modelValue
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sjc-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .sjc-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .sjc-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .sjc-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.sjc-switch.is-checked {
  .sjc-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .sjc-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>