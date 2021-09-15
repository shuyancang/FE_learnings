


function is(x: any, y: any) {
  return ( // 1 / 0, 1 / (-0); NaN
    (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y) // eslint-disable-line no-self-compare
  );
}

const objectIs: (x: any, y: any) => boolean =
  typeof Object.is === 'function' ? Object.is : is;

export default objectIs;
