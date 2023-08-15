const findKthLargest = (nums, k) => {
    return quickSelect(nums, 0, nums.length - 1, k);
};

const quickSelect = (nums, lo, hi, k) => {
    const p = Math.floor(Math.random() * (hi - lo + 1)) + lo;
    [nums[p], nums[hi]] = [nums[hi],nums[p]];

    let i = lo;
    let j = lo;

    while (j < hi) {
        if (nums[j] <= nums[hi]) {
            [nums[i], nums[j]] = [nums[j],nums[i]];
            i++;
        }
        j++;
    }
    [nums[i], nums[j]] = [nums[j],nums[i]];
    if (hi === k + i - 1) return nums[i];
    if (hi > k + i - 1) return quickSelect(nums, i + 1, hi, k);
    return quickSelect(nums, lo, i - 1, k - (hi - i + 1));
};
  

let nums1 = [3,2,1,5,6,4], k1=2;                // 5
let nums2= [3,2,3,1,2,4,5,5,6], k2 =4;          // 4


console.log(findKthLargest(nums1,k1));
console.log(findKthLargest(nums2,k2));