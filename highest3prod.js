function threeProd(arr) {
  //find largest abs val pair mult
  //then find next largest positive number

  var largestPos = -Infinity;
  var smallestIdx = arr[0] < arr[1] ? 0 : 1;
  var largestIdx = arr[0] > arr[1] ? 0 : 1;
  var twoProd = arr[largestIdx] * arr[smallestIdx];

  for (let i = 2; i < arr.length; ++i) {
    if (Math.abs(arr[i]) > Math.abs(arr[largestIdx])) {
      if (arr[i] * arr[largestIdx] > twoProd) {
        smallestIdx = largestIdx;
        largestIdx = i;
      }
    } else if (Math.abs(arr[i]) > Math.abs(arr[smallestIdx])) 
      if (arr[i] * arr[largestIdx] > twoProd) {
        smallestIdx = i;
      }
  }

  for (let i = 0; i < arr.length; ++i) {
    if (i !== smallestIdx && i !== largestIdx && arr[i] > largestPos) largestPos = arr[i];
  }

  return arr[smallestIdx] * arr[largestIdx] * largestPos;
}


console.log(threeProd([-10, -10, 1, 3, 2]))
