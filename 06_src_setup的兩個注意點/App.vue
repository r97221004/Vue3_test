<template>
  <Demo @hello="showHelloMsg" msg="你好啊" school="尚矽谷">
    <template v-slot:qwe>
      <span>尚矽谷</span>
    </template>
    <template v-slot:asd>
      <span>尚矽谷</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Demo";
export default {
  name: "App",
  components: { Demo },
  setup() {
    function showHelloMsg(value) {
      alert(`你好啊，你觸發了hello事件，我收到的參數是:${value}！`);
    }
    return {
      showHelloMsg,
    };
  },
};
</script>
