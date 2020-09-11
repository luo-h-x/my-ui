<template>
  <div class="wrapper" :class="toastClasses">
    <div class="my-toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <span class="close" v-if="closeButton" @click="onClickClose">{{
        closeButton.text
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myToast',
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 3,
      validator(value) {
        return value === false || typeof value === 'number'
      }
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: '知道了',
          callback: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'middle', 'bottom'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true
      }
    }
  },
  methods: {
    close() {
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    onClickClose() {
      this.close()
    },
    // 自动关闭
    execAutoClose() {
      if (this.autoClose) {
        let timer = setTimeout(() => {
          this.close()
          clearTimeout(timer)
        }, this.autoClose * 1000)
      }
    }
  },
  mounted() {
    this.execAutoClose()
  }
}
</script>

<style lang="scss" scoped>
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  $animation-duration: 300ms;
  &.position-top {
    top: 20px;
    .my-toast {
      animation: slide-down $animation-duration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .my-toast {
      animation: fade-in $animation-duration;
    }
  }
  &.position-bottom {
    bottom: 20px;
    .my-toast {
      animation: slide-up $animation-duration;
    }
  }
}
.my-toast {
  width: 380px;
  font-size: 14px;
  // color: #fff;
  min-height: 40px;
  line-height: 1.8;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(214, 216, 230);
  border-radius: 4px;
  .message {
    padding: 8px 0;
  }
  .close {
    cursor: pointer;
    color: #999;
    padding-left: 16px;
    flex-shrink: 0;
  }
}
</style>
