/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findClosestElements = function(arr, k, x) {
    //1、用二分法找到该元素
    let low=0;
    let high = arr.length;
    while(low<high){
        let mid = low+parseInt((high-low)/2)
        if(arr[mid]<x){
            low = mid+1
        }else{
            high = mid
        }
    }
    if(Math.abs(arr[low-1]-x)<Math.abs(arr[low]-x)){
        low =low-1
    }
    if(Math.abs(arr[low+1]-x)<Math.abs(arr[low]-x)){
        low =low+1
    }
     //2、用双指针找到区间
    let left = low-1;
    let right =low;
    while(right-left<k){
        if(left<0){
            right++
        }else if(right>=arr.length){
            left--
        }else if (x - arr[left] <= arr[right] - x) {
            left--;
        } else {
            right++;
        }
    }
    return arr.slice(left,right)
};

console.log(findClosestElements([0,0,1,2,3,3,4,7,7,8],3,5));