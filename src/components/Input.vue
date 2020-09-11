<template>
  <div v-if="text" class="my-input">
    <input
      class="my-input__inner"
      :class="{'is-disabled': disabled}"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :minlength="minlength"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
      :placeholder="placeholder"
    />
  </div>
  <div v-else class="my-textarea">
    <textarea
      ref="textarea"
      class="my-textarea__inner"
      :placeholder="placeholder"
      :rows="rows"
      :maxlength="maxlength"
      :minlength="minlength"
      @input="getLength"
      @change="$emit('change', $event.target.value)"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
    ></textarea>
    <span v-if="maxlength" class="my-textarea__count"
      >{{ valueLength }}/{{ maxlength }}</span
    >
  </div>
</template>

<script>
export default {
  name: 'myInput',
  data() {
    return {
      valueLength: 0
    }
  },
  props: {
    placeholder: {
      type: String
    },
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return ['text', 'textarea'].indexOf(value) >= 0
      }
    },
    rows: {
      type: [Number, String]
    },
    maxlength: {
      type: String
    },
    minlength: {
      type: String
    }
  },
  computed: {
    text() {
      return this.type === 'text'
    }
  },
  methods: {
    getLength(e) {
      this.valueLength = e.target.value.length
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-input {
  width: 180px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .my-input__inner {
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &:hover {
      border-color: #999;
    }
  }
  .is-disabled {
    background-color: #999;
    cursor: not-allowed;
  }
}
.my-textarea {
  display: inline-block;
  font-size: 14px;
  width: 400px;
  position: relative;
  .my-textarea__inner {
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    color: #606266;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover {
      border-color: #999;
    }
  }
  .my-textarea__count {
    color: #999;
    position: absolute;
    bottom: 10px;
    right: 20px;
  }
}
</style>
