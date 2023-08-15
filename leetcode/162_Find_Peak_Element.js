// var findPeakElement = (nums) => {
//     let left =0;
//     let right =nums.length-1;
//     let mid;
//     if(nums.length == 1) return 0;
//     if(nums.length == 2) return nums[0]>nums[1]?0:1;
//     while(left<=right){
//         mid = Math.floor((left+right)/2);
//         if(mid == 0 && nums[mid]>nums[mid+1]) return 0;
//         if(mid == nums.length-1 && nums[mid]>nums[mid-1]) return nums.length -1;
//         if(nums[mid] >= nums[mid-1] && nums[mid] >=nums[mid+1]){
//             return mid;
//         }
//         if(nums[mid]>nums[mid-1]) {
//             right = mid-1;
//         } else if(nums[mid]>nums[mid+1]) {
//             left = mid+1;
//         } else if(nums[mid]<nums[mid-1]&&nums[mid]<nums[mid+1]){
//             right = mid-1;
//         }
//     }
// }

function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}




let nums1 = [1,2,3,1];                  //2
let nums2 = [1,2,1,3,5,6,4];            //5
let nums3 = [3,1,2];                    //0

console.log(findPeakElement(nums1));
 console.log(findPeakElement(nums2));
console.log(findPeakElement(nums3));