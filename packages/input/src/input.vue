<template>
  <div>
    <input v-bind="$attrs" :type="type" :value="value" @input="handleInput">
  </div>
</template>

<script>
export default {
  name: 'RbInput',
  // 禁止非props的属性添加到根元素上，通过$attrs添加到需要添加的元素上
  inheritAttrs: false,
  props: {
    value: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    handleInput (event) {
      this.$emit('input', event.target.value)
      const findParent = parent => {
        while (parent) {
          if (parent.$options.name === 'RbFormItem') {
            break
          } else {
            parent = parent.$parent
          }
        }
        return parent
      }
      const parent = findParent(this.$parent)
      if (parent) {
        parent.$emit('validate')
      }
    }
  }
}
</script>

<style>

</style>
