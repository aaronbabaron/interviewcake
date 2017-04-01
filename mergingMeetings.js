function mergeMeet(arr) {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length; ++j) {
      if (i === j) continue;
      //if j starts between i start and end
      console.log(i, j);
      if (arr[i].startTime <= arr[j].startTime && arr[i].endTime >= arr[j].startTime) {
        if (arr[j].endTime > arr[i].endTime) {
          arr[i].endTime = arr[j].endTime;
        }
        
        arr = arr.slice(0, j).concat(arr.slice(j + 1)); 
        j = 0;
        if (i > 0) --i;
      }
    }
  }

  return arr;
}

function mergeMeetsort(arr) {
  arr = arr.sort((a, b) => {
    if (a.startTime < b.startTime) return false;
    else if (b.startTime < a.startTime) return true;
    else {
      if (a.endTime < b.endTime) return false;
      else return true;
    }
  });

  console.log(arr);
}


var arr2 =   [
    {startTime: 0,  endTime: 1},
    {startTime: 5,  endTime: 6},
    {startTime: 1,  endTime: 3},
    {startTime: 1,  endTime: 2},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
];

var arr =  [
    {startTime: 1, endTime: 10},
    {startTime: 2, endTime: 6},
    {startTime: 3, endTime: 5},
    {startTime: 7, endTime: 9},
];

console.log(mergeMeetsort(arr2));
