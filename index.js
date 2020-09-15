function bubbleSort(arr) {
  let newarr = [];
  let arrCopy = arr;
  function swap(arr, ind1, ind2) {
    let temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;

    return arr;
  }

  function loopArr(arra) {
    if (arra.length === 0 || arra.length < 0) {
      return;
    } else {
      for (let i = 0; i < arra.length; i++) {
        if (arr[i] > arr[i + 1]) {
          swap(arra, i, i + 1);
        }
      }
      newarr.push(arra[arra.length - 1]);
      return loopArr(arra.slice(0, arra.length - 1));
    }
  }

  loopArr(arrCopy);
  let finishedArr = [];

  for (let i = newarr.length - 1; i >= 0; i--) {
    finishedArr.push(newarr[i]);
  }
  console.log(finishedArr);
  return finishedArr;
}

let myArray = [4, 1, 2, 20, 10, 40, 25, 3];

bubbleSort(myArray);
