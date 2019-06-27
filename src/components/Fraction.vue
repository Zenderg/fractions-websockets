<template>
  <div class="fraction">
    <input :readonly="readOnly" @input="changeFract" v-model="readOnly ? num : dynamicNum" class="num" type="number">
    <hr class="divider">
    <input :readonly="readOnly" class="denom" @input="changeFract" v-model="readOnly ? denom : dynamicDenom"
           type="number">
  </div>
</template>

<script>
  import {make} from '../fractions-lib';

  export default {
    name: 'HelloWorld',
    props: {
      num: {type: Number, required: true},
      denom: {type: Number, required: true},
      index: {type: Number},
      readOnly: {type: Boolean},
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
          index: this.index
        };

        this.$emit('changefract', option);
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
