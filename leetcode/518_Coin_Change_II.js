var change = (amount, coins) => {
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (let coin of coins) {
        for(let i = coin; i<=amount;i++) {
            dp[i] += dp[i-coin];
        }
    }
    return dp[amount];
};



let amount1 = 5, coins1 = [1,2,5];              // 4
let amount2 = 3, coins2 = [2];                  // 0
let amount3 = 10, coins3 = [10];                // 1


console.log(change(amount1,coins1));
console.log(change(amount2,coins2));
console.log(change(amount3,coins3));