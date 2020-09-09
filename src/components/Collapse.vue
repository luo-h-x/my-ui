<template>
  <div class="my-collapse">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'myCollapse',
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    selected: {
      type: [Array, String, Number]
    }
  },
  data() {
    return {
      activeNames: [].concat(this.selected)
    }
  },
  watch: {
    value(value) {
      this.activeNames = [].concat(value)
    }
  },
  provide() {
    return {
      collapse: this
    }
  },
  mounted() {
    this.$emit('selected', this.activeNames)

    this.$on('addsingle', name => {
      if (this.accordion) {
        this.$emit('selected', name)
      }
    })

    this.$on('removesingle', name => {
      if (this.accordion) {
        this.$emit('selected', '')
      }
    })
  }
}
</script>
<style scoped lang="scss">
.my-collapse {
  border-top: 1px solid #ccc;
}
</style>
