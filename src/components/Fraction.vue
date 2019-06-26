<template>
  <div class="fraction">
    <input v-model="num" type="text">
    <input v-model="div" type="text">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      num: null,
      div: null
    }
  }
};
</script>

<style scoped lang="scss">

</style>
