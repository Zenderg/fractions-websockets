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
