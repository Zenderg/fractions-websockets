<template>
  <div class="fractions">
    <Fraction></Fraction>
  </div>
</template>

<script>
import Fraction from '@/components/Fraction.vue';
import {num, denom, plus, minus, mul, div, actions} from '../fractions-lib';

export default {
  name: 'home',
  data(){
    return {
      expression:[]
    }
  },
  components: {
    Fraction
  },
};
</script>
