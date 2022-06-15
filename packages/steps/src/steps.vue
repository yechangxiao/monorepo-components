<template>
  <div class="rb-steps">
    <div class="rb-steps-line"></div>
    <div
      class="rb-step"
      v-for="index of count"
      :key="index"
      :style="{ color: active >= index ? activeColor : defaultColor }"
    >{{ index }}</div>
  </div>
</template>

<script>
import './steps.css'
export default {
  name: 'RbSteps',
  props: {
    count: {
      type: Number,
      default: 3
    },
    active: {
      type: Number,
      default: 1
    },
    activeColor: {
      type: String,
      default: 'red'
    },
    defaultColor: {
      type: String,
      default: 'green'
    }
  }
}
</script>

<style lang="less" scoped>

</style>
