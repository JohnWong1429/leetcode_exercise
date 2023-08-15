var findDuplicate = nums => {
    let left = 0;
    let right = nums.length-1;
    while (left<right){
        if(nums[left] == nums[right]) return nums[left];
        if(nums[left]>nums[left+1]){
            right--;
        } else {
            left++;
        }
    }
};



let nums1 = [1,3,4,2,2];
let nums2 = [3,1,3,4,2];


console.log(findDuplicate(nums1));
console.log(findDuplicate(nums2));