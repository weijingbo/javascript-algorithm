/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
 var constructArray = function(n, k) {
    const ans = new Array(n).fill(0);
    let idx = 0;
    for (let i = 1; i < n - k; ++i) {
        ans[idx] = i;
        ++idx;
    }
    for (let i = n - k, j = n; i <= j; ++i, --j) {
        ans[idx] = i;
        ++idx;
        if (i !== j) {
            ans[idx] = j;
            ++idx;
        }
    }
    return ans;
};

console.log(constructArray(3,1));