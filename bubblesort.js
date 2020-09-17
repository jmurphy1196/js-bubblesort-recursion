function bubbleSort(arr) {
  let arrayCopy = arr;
  let right = arr.length - 1;
  let timesSwapped = 0;
  function swap(arr2, ind1, ind2) {
    let temp = arr2[ind1];
    arr2[ind1] = arr2[ind2];
    arr2[ind2] = temp;

    return arr2;
  }

  while (right >= 0) {
    for (let i = 0; i < right; i++) {
      if (arrayCopy[i] > arrayCopy[i + 1]) {
        swap(arrayCopy, i, i + 1);
        timesSwapped += 1;
      }
      if (i === right && timesSwapped === 0) {
        console.log(arrayCopy);
        return arrayCopy;
      } else {
        timesSwapped = 0;
      }
    }
    right -= 1;
  }

  console.log(arrayCopy);

  return arrayCopy;
}

bubbleSort([
  4,
  1,
  2,
  20,
  10,
  40,
  25,
  3,
  88,
  75,
  102,
  544,
  322,
  121,
  120,
  9,
  775,
  1029,
]);
