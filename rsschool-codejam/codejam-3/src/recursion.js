module.exports = function recursion(input, output = [], layer = 0) {
  try {
    recursion(input.left, output, layer + 1);
    recursion(input.right, output, layer + 1);
  } catch (e) {
    return 0;
  }


  if (layer < output.length)	{
    output[layer].push(input.value);
  } else {

    while (output.length <= layer) {
      output.push([]);
    }

    output[layer].push(input.value);
  }

  return output;
};
