var mySqrt = function(x) {
    let low =0;
    let high = x;
    while(low<high){
        mid = low+parseInt((high-low)/2);
        if(mid*mid<x){
            low = mid+1;
        }else if(mid*mid>x){
            high = mid;
        }else{
            return mid;
        }
    }
    return low;
};

console.log(mySqrt(5));