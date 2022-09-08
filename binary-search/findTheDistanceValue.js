/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    arr2.sort((a,b)=>{return a-b})
    let ans = 0
    for(let num of arr1){
        if(conform(num,arr2,d)){
            ans++
        }
    }
    return ans;
};


var conform = function(num,arr2,d){
    let low =0;
    let high = arr2.length;
    while(low<high){
        mid = low+parseInt((high-low)/2);
        if(arr2[mid]<num-d){
            low = mid+1;
        }else if(arr2[mid]>num+d){
            high = mid;
        }else{
            return false;
        }
    }
    return true;
}

console.log(findTheDistanceValue([4,5,8], [10,9,1,8],2));