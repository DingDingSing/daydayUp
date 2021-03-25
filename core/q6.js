//根据size参数将数组分组，size是每一组的长度。如果数组不能均分，最后一组就会包含剩下的元素。
//  _.chunk(['a', 'b', 'c', 'd'], 2)
//  // => [['a', 'b'], ['c', 'd']]

//  _.chunk(['a', 'b', 'c', 'd'], 3)
//  // => [['a', 'b', 'c'], ['d']]

//  _.chunk(['a', 'b', 'c', 'd'], 5)
//  // => [['a', 'b', 'c', 'd']]

//  _.chunk(['a', 'b', 'c', 'd'], 0)
//  // => []

const _chunk = (chunker, size) => {
  let result = [];
  if (size === 0) return [];
  while (chunker.length > size) {
    const s = chunker.splice(0, size);
    result = [...result, s];
  }
  if (chunker.length < size) return [...result, chunker];
};

const _chunk = (chunker, size) => {
  var result = [];
  if (size === 0) return [];
  if (chunker.length < size) return chunker;
  result = [...result, _chunk(chunker.slice(size), size)];
  return result;
};

console.log(_chunk([1, 2, 3, 4, 5], 2));
