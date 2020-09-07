<template>
  <main class="my-main">
    <slot></slot>
  </main>
</template>
<style scoped lang="scss">
.my-main {
  display: block;
  flex: 1;
  flex-basis: auto;
  padding: 20px;
}
</style>
