export default function () {
  const secretNumber = prompt('write number from 0 to 100');

  function logicalMethod(minValue, maxValue) {
    return minValue + Math.round((maxValue - minValue) / 2);
  }

  const rndCapacity = [];
  function gambling(minValue, maxValue) {
    const rndValue = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
    if (!rndCapacity.includes(rndValue)) {
      rndCapacity.push(rndValue);
      return rndValue;
    }
    return gambling(minValue, maxValue);
  }

  function tryToGuess(method) {
    const border = { minValue: 0, maxValue: 100 };
    let i = 0;
    while (true) {
      const middleValue = method(...Object.values(border));
      if (+secretNumber === middleValue) {
        alert(`Your numb: ${middleValue}, itterations: ${i}`);
        break;
      }
      const answer = prompt(`is it ${middleValue}, use keys {<, =, >}`);
      if (answer === '<') {
        border.maxValue = middleValue;
      } else if (answer === '>') {
        border.minValue = middleValue;
      } else if (answer === '=') {
        break;
      }
      i++;
    }
  }
  const methodChoice = prompt('logic / gambling');
  if (methodChoice === 'logic') {
    tryToGuess(logicalMethod);
  } else if (methodChoice === 'gambling') {
    tryToGuess(gambling);
  }
}
