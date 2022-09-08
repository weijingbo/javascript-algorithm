var isPerfectSquare = function(num) {
    let low = 0
    let high = num
    while(low<high){
        mid = low+parseInt((high-low)/2)
        if(mid*mid<num){
            low = mid+1
        }else if(mid*mid>num){
            high = mid
        }else{
            return true;
        }
    }
    return false;
};