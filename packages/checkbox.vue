<template>
  <label class="sjc-checkbox" :class="{ 'is-checked': isChecked }">
    <span class="sjc-checkbox__input">
      <span class="sjc-checkbox__inner"></span>
      <input
        type="checkbox"
        class="sjc-checkbox__original"
        :value="label"
        v-model="model"
      >
    </span>
    <span class="sjc-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'SjcCheckbox',
  inject: {
    CheckboxGroup: {
      default: null
    }
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    label: {
      type: [String, Number, Boolean],
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        if (this.isGroup) {
          return this.CheckboxGroup.modelValue.includes(this.label)
        }
        return this.modelValue
      },
      set (value) {
        if (this.isGroup) {
          const values = [...this.CheckboxGroup.modelValue]
          const index = values.indexOf(this.label)
          if (value && index === -1) {
            // 选中且不在数组中，添加
            values.push(this.label)
          } else if (!value && index > -1) {
            // 取消选中且在数组中，移除
            values.splice(index, 1)
          }
          this.CheckboxGroup.$emit('update:modelValue', values)
        } else {
          this.$emit('update:modelValue', value)
        }
      }
    },
    isGroup () {
      return !!this.CheckboxGroup
    },
    isChecked () {
      if (this.isGroup) {
        return this.CheckboxGroup.modelValue.includes(this.label)
      }
      return this.model
    }
  }
}
</script>

<style lang="scss" scoped>
.sjc-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .sjc-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .sjc-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),
                  background-color .25s cubic-bezier(.71,-.46,.29,1.46);

      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
    }

    .sjc-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }

  .sjc-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}

.sjc-checkbox.is-checked {
  .sjc-checkbox__input {
    .sjc-checkbox__inner {
      background-color: #409eff;
      border-color: #409eff;

      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .sjc-checkbox__label {
    color: #409eff;
  }
}
</style>