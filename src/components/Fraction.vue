<template>
  <div class="fraction">
    <input class="num" v-model="num" type="text">
    <hr class="divider">
    <input class="denom" v-model="denom" type="text">
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      num: {type: Number, required: true},
      denom: {type: Number, required: true}
    },
    data() {
      return {

      };
    },
  };
</script>

<style scoped lang="scss">
.fraction {
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .num, .denom {
    width: 100%;
    text-align: center;
  }
 .divider {
   margin: 5px 0;
   width: 90%;
  }
}
</style>
