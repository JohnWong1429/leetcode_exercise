var search = (nums,target) => {
    let left = 0;
    let right = nums.length - 1;
    let mid;
    while (left <= right) {
        mid = left + Math.floor((right-left)/2);
        if(nums[mid] === target) {
            return mid;
        }
        if(nums[left] <= nums[mid]) {
            if(nums[left] <= target && target <= nums[mid]) {
                right = mid-1;
            } else {
                left = mid+1;
            }
        } else {
            if(nums[mid] <= target && target <= nums[right]) {
                left = mid +1;
            } else {
                right = mid-1;
            }
        }
    }
    return -1;
};


let nums1 = [4,5,6,7,0,1,2], target1 = 0;           // 4
let nums2 = [4,5,6,7,0,1,2], target2 = 3;           // -1
let nums3 = [1], target3 = 0;                       // -1
let nums4 = [1,3,5], target4 = 5;                   // 2



console.log(search(nums1,target1));
console.log(search(nums2,target2));
console.log(search(nums3,target3));
console.log(search(nums4,target4));