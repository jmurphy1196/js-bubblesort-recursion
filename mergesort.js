function merge(arr1, arr2) {
  let sorted = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sorted.push(arr1[i]);
      i += 1;
    } else {
      sorted.push(arr2[j]);
      j += 1;
    }
  }

  while (i < arr1.length) {
    sorted.push(arr1[i]);
    i += 1;
  }

  while (j < arr2.length) {
    sorted.push(arr2[j]);
    j += 1;
  }
  return sorted;
}

function mergeSort(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr.slice(i, i + 1));
  }
  while (newArr.length !== 1) {
    let merged = merge(newArr[0], newArr[1]);
    newArr.push(merged);
    newArr.splice(0, 2);
  }
  return newArr[0];
}

let ans = mergeSort([1, 3, 4, 2]);
console.log(ans);
