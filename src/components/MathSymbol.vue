<template>
  <div class="math-symbol">
    <input @input="changeVal" v-model="inputVal" type="text">
  </div>
</template>

<script>
export default {
  name: 'MathSymbol',
  props: {
    val: { type: String, required: true },
    index: { type: Number, required: true },
  },
  data() {
    return {
      inputVal: this.val,
    };
  },
  methods: {
    changeVal() {
      const option = {
        value: this.inputVal,
        index: this.index,
      };

      this.$emit('changesymbol', option);
    },
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
