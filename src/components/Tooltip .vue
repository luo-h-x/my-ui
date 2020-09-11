<template>
  <div class="popover" ref="popover">
    <div
      ref="contentWrapper"
      class="my-tooltip"
      :class="{ [`position-${position}`]: true }"
      v-text="content"
      v-if="visible"
    >
      <!-- <slot name="content" :close="close"></slot> -->
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'myTooltip',
  data() {
    return {
      visible: false
    }
  },
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    },
    content: {
      type: String,
      default: '这是一个提示文'
    }
  },
  mounted() {
    if (this.trigger === 'click') {
      this.$refs.popover.addEventListener('click', this.onClick)
    } else {
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.close)
    }
  },
  methods: {
    positionContent() {
      const { contentWrapper, triggerWrapper } = this.$refs
      document.body.appendChild(contentWrapper)
      const {
        width,
        height,
        top,
        left
      } = triggerWrapper.getBoundingClientRect()

      const { height: height2 } = contentWrapper.getBoundingClientRect()
      const positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + width + window.scrollX
        }
      }
      contentWrapper.style.top = positions[this.position].top + 'px'
      contentWrapper.style.left = positions[this.position].left + 'px'
    },
    onClickDocument(e) {
      if (
        this.$refs.popover &&
        (this.$refs.popover === e.target ||
          this.$refs.popover.contains(e.target))
      ) {
        return
      }
      if (
        this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === e.target ||
          this.$refs.contentWrapper.contains(e.target))
      ) {
        return
      }
      this.close()
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close() {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.popover {
  display: inline-block;
  position: relative;
}

.my-tooltip {
  position: absolute;
  border-radius: 4px;
  padding: 0.8em;
  font-size: 12px;
  color: #fff;
  background: #000;
  max-width: 20em;
  &::before {
    content: '';
    display: block;
    border: solid 5px transparent;
    width: 0;
    height: 0;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before {
      left: 10px;
      border-top-color: black;
      border-bottom: none;
      top: 100%;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before {
      border-bottom-color: black;
      left: 10px;
      bottom: 100%;
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before {
      transform: translateY(-50%);
      top: 50%;
      left: 100%;
      border-left-color: black;
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before {
      transform: translateY(-50%);
      top: 50%;
      right: 100%;
      border-right-color: black;
    }
  }
}
</style>
