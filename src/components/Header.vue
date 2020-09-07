<template>
  <aside class="my-header" v-if="visible">
    <slot></slot>
  </aside>
</template>
<script>
export default {
  name: 'mySider',
  data() {
    return {
      visible: true
    }
  }
}
</script>
<style scoped lang="scss">
.my-header {
  padding: 0 20px;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
