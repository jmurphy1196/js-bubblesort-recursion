function swap(arra, ind1, ind2) {
  let temp = arra[ind1];
  arra[ind1] = arra[ind2];
  arra[ind2] = temp;

  return arra;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      swap(arr, i, lowest);
    }
  }
  console.log(arr);
  return arr;
}

selectionSort([34, 22, 10, 19]);
