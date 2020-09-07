<template>
  <section class="my-container" :class="toastClasses">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'myContainer',
  props: {
    direction: {
      type: String,
      default: 'vertical',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    toastClasses() {
      return {
        [`is-${this.direction}`]: true
      }
    }
  }
}
</script>

<style scoped lang="scss">
.my-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
  .is-horizontal {
    flex-direction: row;
  }
}
</style>
