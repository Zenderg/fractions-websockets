export const make = (num, denom) => [num, denom];

export const num = arr => arr[0];

export const denom = arr => arr[1];

export const isInclude = (par, ch) => !!par[ch];

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

export const gcd = (fract) => {
  const newNum = num(fract);
  const newDenom = denom(fract);

  if (!newDenom) return newNum;

  return gcd(make(newDenom, newNum % newDenom));
};

export const scaleFract = (fract) => {
  const gcdFract = gcd(fract);

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

  for (let i = 0; i < result.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    if (symbols.some(symbol => symbol === result[i])) {
      result = doAction(result, i);
      i -= 1;
    }
  }

  return result;
};

const isCorrect = (arr) => {
  const correct = arr.every((cur, i) => !((i % 2 === 0 && !isFract(cur))
    || (i % 2 !== 0 && !isInclude(actions, cur))));

  return correct && arr.length % 2 !== 0;
};

const countUp = (arr) => {
  try {
    if (!isCorrect(arr)) return make(0, 0);

    const newArr = removeMathSymbols(arr, '*', '/');
    return scaleFract(...removeMathSymbols(newArr, '+', '-'));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    // eslint-disable-next-line no-throw-literal
    throw 'unexpected error from fractions-lib';
  }
};

export default countUp;
