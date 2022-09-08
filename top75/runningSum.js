/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let res = Array();
    res.push(nums[0]);
    for (let i = 1; i < nums.length; i++) {
        res.push(res[i-1]+nums[i]);
    }
    return res;
};

console.log(runningSum([1,2,3,4,5,6]));