/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    let n=s.length,m=t.length;
    let i=j=0;
    while(i<n && j<m){
        if(s.charAt(i)==t.charAt(j)){
            i++;
        }
        j++;
    }
    return i==n;
};

console.log(isSubsequence("abc","afbgc"));