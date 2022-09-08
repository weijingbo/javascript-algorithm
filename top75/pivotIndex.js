/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
 let sum=0;
 for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
 }
 console.log(sum);
 let left = 0;
 for (let i = 0; i < nums.length; i++) {
    if(sum-nums[i]-left ==left){
        return i;
    }
    left += nums[i];
 }
 return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));