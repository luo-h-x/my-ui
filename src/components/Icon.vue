<template>
  <i :class="'my-icon-' + name"></i>
</template>

<script>
export default {
  name: 'myIcon',
  props: {
    name: String
  }
}
</script>
