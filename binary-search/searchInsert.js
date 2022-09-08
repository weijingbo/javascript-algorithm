var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length;
    while(low<high){
        let mid = low + Math.floor((high-low)/2);
        if(nums[mid] ==target){
            return mid
        }else if(nums[mid]<target){
            low = mid+1
        }else{
            high = mid
        }
    }
    return low
};