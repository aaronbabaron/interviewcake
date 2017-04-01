var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

function getMaxProfit(arr) {
  // store current lowest and highest
  // if set new lowest highest must be 0 and must store old difference
  // if iterate through entire thing calculate difference and compare to old diff
  
  var lowest = arr[0];
  var highest = difference = -Infinity;

  for (var i = 1; i < arr.length; ++i) {
    if (arr[i] > highest) highest = arr[i];
    else if (arr[i] < lowest) {
      if (difference < highest - lowest) difference = highest - lowest;

      lowest = arr[i];
      highest = -Infinity;
    }
  }

  if (difference < highest - lowest) difference = highest - lowest;

  return difference;
}

getMaxProfit([5, 4, 3, 2, 1]);
// returns 6 (buying for $5 and selling for $11)
