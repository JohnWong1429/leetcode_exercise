var threeSumClosest = (nums,target) => {
    nums.sort((a,b) => a-b);
    let left;
    let right;
    let min = Number.MAX_SAFE_INTEGER;
    let total;
    let closestSum;
    for(let i=0;i<nums.length-2;i++){
        left = i+1;
        right = nums.length-1;
        while(left<right){
            total = nums[i]+nums[left]+nums[right];
            if(total == target) return target;
            if (Math.abs(total - target) < Math.abs(min)) {
                min = target - total;
                closestSum = total;
              }
            if(total>target){
                right--;
            } else {
                left++;
            }
        }
    }
    return closestSum;
};


let nums1 = [-1,2,1,-4], target1 = 1;       //2
let nums2 = [0,0,0], target2 = 1;           //0
let nums3 = [1,1,1,0], target3= -100;       //2
let nums4 = [2,3,8,9,10], target4= 16   ;    //15



console.log(threeSumClosest(nums1,target1));
 console.log(threeSumClosest(nums2,target2));
 console.log(threeSumClosest(nums3,target3));
console.log(threeSumClosest(nums4,target4));