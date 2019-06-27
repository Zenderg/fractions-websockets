<template>
  <div class="math-symbol">
    <input v-model="val" type="text">
  </div>
</template>

<script>
  export default {
    name: 'MathSymbol',
    props: {
      val: {type: String, required: true},
    },
  };
</script>

<style scoped lang="scss">
  .math-symbol {
    width: 20px;

    input {
      width: 100%;
      text-align: center;
    }
  }
</style>
