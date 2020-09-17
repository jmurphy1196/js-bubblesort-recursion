function swap(arra, ind1, ind2) {
  let temp = arra[ind1];
  arra[ind1] = arra[ind2];
  arra[ind2] = temp;

  return arra;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      console.log(`making ${arr[j + 1]} == ${arr[j]}`);
      arr[j + 1] = arr[j];
    }
    console.log(`setting ${arr[j + 1]} == ${currentVal}`);
    arr[j + 1] = currentVal;
    console.log(arr);
  }
  console.log("final array" + arr);
  return arr;
}

insertionSort([1, 4, 2, 8, 5]);
