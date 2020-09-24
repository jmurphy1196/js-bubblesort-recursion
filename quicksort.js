function swap(arr2, ind1, ind2) {
  let temp = arr2[ind1];
  arr2[ind1] = arr2[ind2];
  arr2[ind2] = temp;

  return arr2;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapInd = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapInd++;
      swap(arr, i, swapInd);
    }
  }
  swap(arr, start, swapInd);

  return swapInd;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotInd = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotInd - 1);
    //right
    quickSort(arr, pivotInd + 1, right);
  }

  return arr;
}

let sorted = quickSort([3, 1, 2, 5, 8, 7, 6, -22]);

console.log(sorted);
