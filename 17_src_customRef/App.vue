<template>
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from "vue";
export default {
  name: "App",
  setup() {
    //自定義一個ref——名為：myRef
    function myRef(value, delay) {
      let timer;
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`有人從myRef這個容器中讀取數據了，我把${value}給他了`);
            track(); //通知 Vue 追蹤 value 的變化（提前和 get 商量一下，讓他認為這個 value 是有用的）
            return value;
          },
          set(newValue) {
            console.log(`有人把myRef這個容器中數據改為了：${newValue}`);
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger(); //通知 Vue 去重新解析模板
            }, delay);
          },
        };
      });
    }

    // let keyWord = ref('hello') //使用 Vue 提供的 ref
    let keyWord = myRef("hello", 500); //使用程序員自定義的 ref

    return { keyWord };
  },
};
</script>
