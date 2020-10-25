function make(...numbers) {

  let capacity = [];

  function capAdd(...numbers) {
    numbers.forEach(el => (typeof el !== 'function' ? capacity.push(+el) : 0));
    return typeof numbers[0] !== 'function' ? capAdd : capacity.reduce(numbers[0]);
  }

  return	capAdd(numbers);

}

function sum(a, b) {
  return a + b;
}


console.log(make(15)(34, 21, 666)(41)(sum));
console.log(make(1)(sum));
