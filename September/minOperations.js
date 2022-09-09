/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let ans = 0;
    for (const log of logs) {
        if(log =='../'){
            ans = Math.max(ans-1,0)
        }else if(log !='./'){
            ans++
        }
    }
    return ans;
};
console.log(minOperations(["d1/","d2/","../","d21/","./"]));