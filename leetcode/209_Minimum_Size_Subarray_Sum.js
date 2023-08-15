var minSubArrayLen = (target,nums) => {
    if(nums.includes(target)) return 1;
    let min = Number.MAX_SAFE_INTEGER;
    let left =0;
    let right=0;
    let sum =0;
    while(right<nums.length){
        sum+=nums[right];
        while(sum>=target) {
            min = Math.min(min,right-left+1);
            sum -=nums[left];
            left++;
        }
        right++;
    }
    return min == Number.MAX_SAFE_INTEGER?0:min;
};



// let target1= 7,nums1=[2,3,1,2,4,3];         //2
// let target2=4,nums2=[1,4,4];                //1
// let target3 = 11, nums3=[1,1,1,1,1,1,1,1]   //0


// console.log(minSubArrayLen(target1,nums1));
// console.log(minSubArrayLen(target2,nums2));
// console.log(minSubArrayLen(target3,nums3));


test('minSubArrayLen [2,3,1,2,4,3], 7 = 2', () => {
    expect(minSubArrayLen([2,3,1,2,4,3],7)).toBe(2);
});