<template>
  <div class="fractions">
    <div class="fractions__exp">
      <div class="fraction" v-for="(val, i) in expression" :key="i">
<!--        <p>{{val}}</p>-->
        <Fraction v-if="typeof val === 'object'" :num="calcNum(val)" :denom="calcDenom(val)"></Fraction>
        <MathSymbol v-if="typeof val === 'string'" :val="val"></MathSymbol>
      </div>
      <span>=</span>
      <Fraction :num="calcNum(result)" :denom="calcDenom(result)"></Fraction>
    </div>
    <button @click="addFract" class="fractions__add-fract">Добавить дробь</button>
  </div>
</template>

<script>
import Fraction from '@/components/Fraction.vue';
import MathSymbol from '@/components/MathSymbol.vue';
import calcFracts, {make, num, denom} from '../fractions-lib';

export default {
  name: 'home',
  data(){
    return {
      expression:[make(16,32), '*', make(3,4)]
    }
  },
  mounted(){
    // this.expression.map(item => console.log(item, typeof item));
    // this.calculate(this.expression);
  },
  methods:{
    calculate(exp){
      console.log(calcFracts(exp));
    },
    addFract() {
      this.expression = [make(0, 0), '+',...this.expression]
      console.log(this.expression);
    },
    calcNum: fract => num(fract),
    calcDenom: fract => denom(fract)
  },
  computed: {
    result: function(){return calcFracts(this.expression)}
  },
  components: {
    Fraction,
    MathSymbol
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
