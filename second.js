const removePalindromeSub = function(str) {
    if(str.length==0){
        return 0
    }
    if(isP(str)){
        return 1
    }
    return 2
}
 
function isP(str){
 var start =0,end = str.length-1;
 while(start<end){
    if(str.charAt(start)==str.charAt(end)){
        start++;
        end--;
    }else{
        return false
    }
 }
 return true
}


console.log(removePalindromeSub("aba"))
