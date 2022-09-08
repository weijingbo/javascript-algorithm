/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
 var guessNumber = function(n) {
    let low = 0
    let high = n
    while(low<high){
        log
        mid = low+parseInt((high-low)/2)
        if(guess(mid)==-1){
            low = mid+1
        }else if(guess(mid)==-1){
            high = mid
        }else{
            return mid
        }
    }
};