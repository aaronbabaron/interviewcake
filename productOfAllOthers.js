
function getProductsOfAllIntsExceptAtIndex(arr) {
  var vals = []

  for (let i = 0; i < arr.length; ++i) {
    let toPush = 1;

    for (let j = 0; j < arr.length; ++j) {
      if (i !== j) toPush *= arr[j];
    }

    vals.push(toPush);
  }

  return vals;
}


function getProds(arr) {
  var before = []; 

  var currVal = 1;
  for (var i = 0; i < arr.length; ++i) {
    before.push(currVal);
    currVal *= arr[i];
  }

  var afterVal = 1;
  for (var i = arr.length - 1; i >= 0; --i) {
    before[i] *= afterVal;  
    afterVal *= arr[i];
  }


  return before;
}


console.log(getProds([1, 7, 3, 4]))
