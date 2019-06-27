<template>
  <div class="fractions">
    <div class="fractions__exp" v-if="showFractions">
      <div class="fraction" v-for="(val, i) in expression" :key="i">
        <Fraction @changefract="changeInstance" v-if="typeof val === 'object'" :num="calcNum(val)"
                  :readOnly="false" :denom="calcDenom(val)" :index="i"></Fraction>
        <MathSymbol @changesymbol="changeInstance" v-if="typeof val === 'string'"
                    :index="i" :val="val"></MathSymbol>
      </div>
      <span>=</span>
      <Fraction :readOnly="true" :num="calcNum(result)" :denom="calcDenom(result)"></Fraction>
    </div>
    <button @click="addFract" class="fractions__add-fract">Добавить дробь</button>
  </div>
</template>

<script>
import Fraction from '@/components/Fraction.vue';
import MathSymbol from '@/components/MathSymbol.vue';
import calcFracts, { make, num, denom } from '../fractions-lib';

export default {
  name: 'fractions',
  data() {
    return {
      showFractions: true,
      expression: [make(16, 32), '*', make(3, 4)],
    };
  },
  mounted() {

  },
  methods: {
    changeInstance(obj) {
      const { value, index } = obj;

      this.$set(this.expression, index, value);
    },
    addFract() {
      this.showFractions = false;
      this.expression = [make(0, 0), '+', ...this.expression];

      // eslint-disable-next-line no-return-assign
      this.$nextTick(() => this.showFractions = true);
    },
    calcNum: fract => num(fract),
    calcDenom: fract => denom(fract),
  },
  computed: {
    result() {
      return calcFracts(this.expression);
    },
  },
  components: {
    Fraction,
    MathSymbol,
  },
};
</script>

<style scoped lang="scss">
  .fractions {
    display: flex;
    flex-direction: column;

    .fractions__exp {
      margin: 0 auto;
      display: flex;
      align-items: center;

      .fraction {
        margin: 0 5px;
      }
    }

    .fractions__add-fract {
      max-width: 200px;
      margin: 30px auto 0 auto;
    }
  }
</style>
