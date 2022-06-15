<template>
  <div>
    <button @click="handleClick">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'RbButton',
  methods: {
    handleClick (event) {
      this.$emit('click', event)
      // 因为这些元素在form表单上，点击事件会触发form表单提交
      event.preventDefault()
    }
  }
}
</script>

<style>

</style>
