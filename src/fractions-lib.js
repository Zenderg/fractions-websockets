export const make = (num, denom) => [num, denom];

export const num = arr => arr[0];

export const denom = arr => arr[1];

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

export const mul = (prev, next) => [num(prev) * num(next), denom(prev) * denom(next)]

export const div = (prev, next) => mul(prev, [denom(next), num(next)]);


export const actions = {
  '+': plus,
  '-': minus,
  '*': mul,
  '/': div
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
  const newArr = arr;
  const prev = newArr[i - 1];
  const next = newArr[i + 1];
  const val = scaleFract(actions[newArr[i]](prev, next));

  newArr.splice(i - 1, 3, val);

  return newArr;
};

export const removeHighPriority = arr => {
  let result = arr;

  for (let i = 0; i < result.length; i++) {
    if (result[i] === '*' || result[i] === '/') {
      result = doAction(result, i);
      i--;
    }
  }

  return result;
};

const countUp = arr => {
  let newArr = removeHighPriority(arr);

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === '+' || newArr[i] === '-') {
      newArr = doAction(newArr, i);
      i--;
    }
  }

  const result = scaleFract(newArr[0]);

  return result;
};

export default countUp;
