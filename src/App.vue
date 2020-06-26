<template>
  <div id="app">
    <my-button>默认按钮</my-button>
    <my-button type="primary">主要按钮</my-button>
    <my-button type="success">成功按钮</my-button>
    <my-button type="info">信息按钮</my-button>
    <my-button type="danger">危险按钮</my-button>
    <my-button type="warning">警告按钮</my-button><br>

    <my-button>朴素按钮</my-button>
    <my-button plain type="primary">主要按钮</my-button>
    <my-button plain type="success">成功按钮</my-button>
    <my-button plain type="info">信息按钮</my-button>
    <my-button plain type="danger">危险按钮</my-button>
    <my-button plain type="warning">警告按钮</my-button><br>

    <my-button>圆角按钮</my-button>
    <my-button round type="primary">主要按钮</my-button>
    <my-button round type="success">成功按钮</my-button>
    <my-button round type="info">信息按钮</my-button>
    <my-button round type="danger">危险按钮</my-button>
    <my-button round type="warning">警告按钮</my-button><br>

    <my-button ></my-button>
    <my-button circle type="primary">一</my-button>
    <my-button circle type="success">二</my-button>
    <my-button circle type="info">三</my-button>
    <my-button circle type="danger">四</my-button>
    <my-button circle type="warning">五</my-button><br>

  </div>
</template>

<script>
import MyButton from './components/Button'

export default {
  name: 'App',
  components: {
    MyButton
  }
}
</script>

<style lang="scss">
  #app{
    .my-button{
      margin-left: 20px;
      margin-top: 10px;
    }
  }
</style>
