var mySqrt = function(x) {
    let low =0;
    let high = x;
    if (x==0 || x==1) {
        return x
    }
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
    return low-1;
};

console.log(mySqrt(1));