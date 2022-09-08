/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    
    let p1 = 0;
    let e1 = nums1.length-1;
    let p2 = 0;
    let e2 = nums2.length-1;
    while(p1 !=e1 &&p2 !=e2){
        nums1[p1]<nums2[p2]? p1++:p2++;
        nums1[e1]>nums2[e2]? e1--:e2--;
    }
}