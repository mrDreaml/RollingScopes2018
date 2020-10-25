module.exports = function sumOfOther(array) {
  return array.map(e => e = array.reduce((accumulator, currentValue) => accumulator + currentValue) - e);
};
