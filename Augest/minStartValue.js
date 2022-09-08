/**
 * 给你一个整数数组 nums 。你可以选定任意的 正数 startValue 作为初始值。

你需要从左到右遍历 nums 数组，并将 startValue 依次累加上 nums 数组中的值。

请你在确保累加和始终大于等于 1 的前提下，选出一个最小的 正数 作为 startValue 。

 

示例 1：

输入：nums = [-3,2,-3,4,2]
输出：5
解释：如果你选择 startValue = 4，在第三次累加时，和小于 1 。
                累加求和
                startValue = 4 | startValue = 5 | nums
                  (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
                  (1 +2 ) = 3  | (2 +2 ) = 4    |   2
                  (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
                  (0 +4 ) = 4  | (1 +4 ) = 5    |   4
                  (4 +2 ) = 6  | (5 +2 ) = 7    |   2
示例 2：

输入：nums = [1,2]
输出：1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
//  var minStartValue = function(nums) {
//     let startValue = 1;
//     let count = startValue;
//     let i =0;
//     while(i<nums.length){
//         if(count+nums[i]>=1){
//             count +=nums[i];
//             i++;
//         }else{
//             i=0;
//             startValue++;
//             count = startValue;
//         }

//     }
//     return startValue;
// };

var minStartValue = function(nums){
    let accSum = 0, accSumMin = 0;
    for (const num of nums) {
        accSum += num;
        accSumMin = Math.min(accSumMin, accSum);
    }
    return -accSumMin + 1;
}



console.log(minStartValue([-3,2,-3,4,2]));