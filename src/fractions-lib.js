export const make = (num, denom) => [num, denom];

export const num = arr => arr[0];

export const denom = arr => arr[1];

export const isFract = fract => fract.length === 2 && Array.isArray(fract);

export const plus = (prev, next) => {
  const newNum = num(prev) * denom(next) + num(next) * denom(prev);
  const newDiv = denom(prev) * denom(next);

  return [newNum, newDiv];
};

export const minus = (prev, next) => {
  const newNum = num(prev) * denom(next) - num(next) * denom(prev);
  const newDiv = denom(prev) * denom(next);

  return [newNum, newDiv];
};

export const mul = (prev, next) => [
  num(prev) * num(next),
  denom(prev) * denom(next)];

export const div = (prev, next) => mul(prev, [denom(next), num(next)]);

export const actions = {
  '+': plus,
  '-': minus,
  '*': mul,
  '/': div,
};

export const gcd = fract => {
  const newNum = num(fract);
  const newDenom = denom(fract);

  if (!newDenom) return newNum;

  return gcd(make(newDenom, newNum % newDenom));
};

export const scaleFract = fract => {
  let gcdFract = gcd(fract);

  return make(num(fract) / gcdFract, denom(fract) / gcdFract);
};

export const doAction = (arr, i) => {
  const newArr = arr.slice();
  const prev = newArr[i - 1];
  const next = newArr[i + 1];
  const val = scaleFract(actions[newArr[i]](prev, next));

  newArr.splice(i - 1, 3, val);

  return newArr;
};

export const removeMathSymbols = (arr, ...symbols) => {
  let result = arr.slice();

  for (let i = 0; i < result.length; i++) {
    if (symbols.some(symbol => symbol === result[i])) {
      result = doAction(result, i);
      i--;
    }
  }

  return result;
};

const isCorrect = arr => {
  const correct = arr.reduce((acc, cur, i) => {
    if (i % 2 !== 0 && isFract(cur)) acc = false;
    return acc;
  }, true);

  return correct && arr.length > 2;
};

const countUp = arr => {
  try {
    if (!isCorrect(arr)) return make(0, 0);

    const newArr = removeMathSymbols(arr, '*', '/');
    return scaleFract(...removeMathSymbols(newArr, '+', '-'));
  } catch (e) {
    console.log(e);
    throw 'unexpected error from lib';
  }
};

export default countUp;
