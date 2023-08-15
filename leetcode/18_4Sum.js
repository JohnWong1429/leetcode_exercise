var fourSum = (nums,target) => {
    nums.sort((a,b)=>a-b);
    let left;
    let right;
    let result = [];
    let total;
    for(let i=0; i<nums.length-3 ;i++){
        if(i>0 && nums[i] == nums[i-1]){
            continue;
        }
        for(let j=i+1;j<nums.length-2;j++){
            if(j>i+1 && nums[j] == nums[j-1]){
                continue;
            }
            left = j+1;
            right = nums.length-1;
            while(left<right){
                total = nums[i]+nums[j]+nums[left]+nums[right];

                if(total > target) {
                    right--;
                } else if(total < target) {
                    left++;
                }else {
                    result.push([nums[i],nums[j],nums[left],nums[right]]);
                    while(left<right && nums[left] == nums[left+1]){
                        left ++;
                    }
                    while(left<right && nums[right] == nums[right-1]){
                        right--;
                    }
                    left++;
                    right--;
                } 
            }
        }
    }
    return result;
};

// var fourSum = (nums, target) => {
//     nums.sort((a, b) => a - b);
//     let result = [];
  
//     for (let i = 0; i < nums.length - 3; i++) {
//       if (i > 0 && nums[i] === nums[i - 1]) {
//         // Skip duplicates for the first number
//         continue;
//       }
  
//       for (let j = i + 1; j < nums.length - 2; j++) {
//         if (j > i + 1 && nums[j] === nums[j - 1]) {
//           // Skip duplicates for the second number
//           continue;
//         }
  
//         let left = j + 1;
//         let right = nums.length - 1;
//         while (left < right) {
//           let total = nums[i] + nums[j] + nums[left] + nums[right];
  
//           if (total === target) {
//             result.push([nums[i], nums[j], nums[left], nums[right]]);
//             left++;
//             right--;
  
//             while (left < right && nums[left] === nums[left - 1]) {
//               // Skip duplicates for the third number
//               left++;
//             }
  
//             while (left < right && nums[right] === nums[right + 1]) {
//               // Skip duplicates for the fourth number
//               right--;
//             }
//           } else if (total > target) {
//             right--;
//           } else {
//             left++;
//           }
//         }
//       }
//     }
  
//     return result;
//   };




let nums1 = [1,0,-1,0,-2,2], target1 = 0;               //[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
let nums2 = [2,2,2,2,2], target2 = 8;                   //[[2,2,2,2]]



console.log(fourSum(nums1,target1));
console.log(fourSum(nums2,target2));