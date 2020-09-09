<template>
  <div class="my-collapse-item" ref="collapseItem">
    <div
      ref="title"
      class="title"
      :class="{ 'is-active': open }"
      @click="isOpen"
      :data-name="name"
    >
      {{ title }}
    </div>
    <div class="content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'myCollapseItem',
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  inject: ['collapse'],
  data() {
    return {
      open: false
    }
  },
  methods: {
    isOpen() {
      this.open = !this.open
      this.collapse.accordion ? this.single() : this.toggleStyle()
    },
    toggleStyle() {
      let { content, collapseItem, title } = this.$refs
      this.open
        ? (collapseItem.style.height =
            content.offsetHeight + title.offsetHeight + 'px')
        : (collapseItem.style.height = title.offsetHeight + 'px')
    },
    single() {
      this.open
        ? this.collapse.$emit('addsingle', this.name)
        : this.collapse.$emit('removesingle', this.name)
    }
  },
  mounted() {
    this.collapse.$on('selected', names => {
      this.open = names.indexOf(this.name) >= 0
      this.toggleStyle()
    })
  }
}
</script>
<style scoped lang="scss">
.my-collapse-item {
  overflow: hidden;
  transition: height 0.3s linear;
  height: 40px;
  .title {
    cursor: pointer;
    font-weight: 500;
    color: #303133;
    font-size: 13px;
    line-height: 39px;
    border-bottom: 1px solid #ccc;
    outline: none;
    transition: border-bottom-color 0.3s linear;
  }
  .is-active {
    border-bottom-color: transparent;
  }
  .content {
    font-size: 13px;
    color: #303133;
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
  }
}
</style>
