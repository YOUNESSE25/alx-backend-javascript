export const WeakMap = new WeakMap();

// https://stackoverflow.com/questions/29413222/what-are-the-actual-uses-of-es6-weakmap
export function queryAPI(endpoint) {
  let col = 0;
  if (WeakMap.get(endpoint)) col = WeakMap.get(endpoint);
  WeakMap.set(endpoint, col + 1);
  if (col + 1 >= 5) throw new Error('Endpoint load is high');
}
