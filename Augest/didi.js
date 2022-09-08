var quesiton1 = function(n,m,k,arr){
    var ans = new Array(n).fill(1)
    arr.sort((a,b)=>{
        if(a[0]>=b[0]){
            console.log(a);
            return 1
        }
    })
    console.log(arr);
}

console.log(quesiton1(4,4,4,[[1,2,3,6],[2,3,1,3],[3,4,2,4],[3,4,2,1]]));