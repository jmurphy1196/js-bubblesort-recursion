function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(arr) {
  let maximumDigits = mostDigits(arr);
  for (var k = 0; k < maximumDigits; k++) {
    let digitBucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBucket[digit].push(arr[i]);
    }

    arr = [].concat(...digitBucket);
  }
  return arr;
}

let sorted = radixSort([1, 5, 2, 66, 88, 23]);

console.log(sorted);
