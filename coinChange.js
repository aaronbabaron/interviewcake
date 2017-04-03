function coinChange(money, coins) {
  return recurse(money, coins, coins.length - 1);
}

function recurse(money, coins, first) {
  if (first < 0 || money < 0) return 0;

  var numTimes = Math.floor(money / coins[first]);
  var counter = 0;

  for (var i = numTimes; i >= 0; --i) {
    var remainder = money - i * coins[first];

    if (remainder === 0) {
      ++counter;
    } else if (remainder > 0) {
      counter += recurse(remainder, coins, first - 1);  
    } 
  }

  return counter;
}

console.log(coinChange(5, [1, 2, 5]))
//console.log(coinChange(4, [1, 2, 3]))
//console.log(coinChange(4, [3]))
//console.log(coinChange(120, [5, 17, 21]));

function changeFewest(coins, amount) {
  var fewestCoins = new Array(amount + 1).fill(0);

  coins.sort((a, b) => b - a);

  coins.forEach(coin => {
    for (var highest = coin; highest <= amount; ++highest) {
      var remainder = highest - coin;

      if ((fewestCoins[highest] > fewestCoins[remainder] + 1 || 
          fewestCoins[highest] === 0) && fewestCoins[remainder] !== 0) {
        fewestCoins[highest] = fewestCoins[remainder] + 1;
      } else if (remainder === 0) {
        fewestCoins[highest] = 1;
      }
    }

  });

  return fewestCoins[amount];
}
