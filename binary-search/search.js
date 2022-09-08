/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let low = 0
    let high = nums.length-1
    while(low<high){
        mid = low+parseInt((high-low)/2)
        if(nums[mid]<target){
            low = mid+1
        }else{
            high = mid
        }
    }
    return nums[low]==target?low:-1;
};

console.log(search([-1,0,3,5,9,12],9));