<template>
  <div class="fraction">
    <input :readonly="readOnly" @input="changeFract"
           class="num" type="number" v-model="dynamicNum">
    <hr class="divider">
    <input :readonly="readOnly" @input="changeFract"
           class="denom" type="number" v-model="dynamicDenom">
  </div>
</template>

<script>
import { make } from '../fractions-lib';

export default {
  name: 'Fraction',
  props: {
    num: { type: Number, required: true },
    denom: { type: Number, required: true },
    index: { type: Number },
    readOnly: { type: Boolean },
  },
  data() {
    return {
      dynamicNum: this.num,
      dynamicDenom: this.denom,
    };
  },
  methods: {
    changeFract() {
      const option = {
        value: make(Number(this.dynamicNum), Number(this.dynamicDenom)),
        index: this.index,
      };

      this.$emit('changefract', option);
    },
  },
  watch: {
    num(newVal) {
      this.dynamicNum = newVal;
    },
    denom(newVal) {
      this.dynamicDenom = newVal;
    },
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
