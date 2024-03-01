var longestPalindrome = function (s) {
  let count = -1;
  let ans = '';
  const len = s.length;

  const dp = Array.from({ length: len }, () => Array(len).fill(false));

  for (let g = 0; g < len; g++) {
    for (let i = 0, j = g; j < len; i++, j++) {
      if (g === 0) {
        dp[i][j] = true;
      } else if (g === 1) {
        dp[i][j] = s[i] === s[j];
      } else {
        dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
      }

      if (dp[i][j] && count < j - i + 1) {
        ans = s.substring(i, j + 1);
        count = ans.length;
      }
    }
  }
  return ans;
};

let str = longestPalindrome('babad');
console.log(str);
