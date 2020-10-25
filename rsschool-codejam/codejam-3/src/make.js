module.exports = function make(...restParams) {
  capacity = this.capacity ? capacity : [];
  Array.prototype.forEach.call(restParams, e => (typeof e !== 'function' ? capacity.push(e) : 0));
  return typeof restParams[0] !== 'function' ? make : Array.prototype.reduce.call(capacity, restParams[0], 0);
};
