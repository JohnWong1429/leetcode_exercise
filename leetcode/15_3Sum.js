// var threeSum = function(nums) {
//     let fix =0;
//     let target = 0-nums[fix];
//     let result = [];
//     let map = new Map();
//     let sliceArray;
//     for(let i=0;i<nums.length-2;i++){
//         map.set(nums[i],[]);
//     }
//     while(fix<nums.length-2){
//         sliceArray = nums.slice(fix+1);
//         target = 0-nums[fix];
//         for(let j=0;j<sliceArray.length;j++){
//             if(sliceArray.includes(target-sliceArray[j])){
//                 map.set(nums[fix],[...map.get(nums[fix]),[nums[fix],target-sliceArray[j],sliceArray[j]]]);
//             }
//         }
//         fix++;
//     }

//     console.log(map);
//     for(let value of map.values()){
//         for(let k=0;k<value.length;k++){
//             value[k].sort((a,b)=>a-b);
//             if(!result.some(arr => arr.every((val,index)=> val == value[k][index]))){
//                 result.push(value[k]);
//             }
//         }
//     }
//     return result;
// };

var threeSum = (nums) => {
    let result = [];
    let left;
    let right;
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length-2;i++){
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        left = i+1;
        right = nums.length-1;
        while(left<right){
            if(nums[i]+nums[left]+nums[right] == 0){
                result.push([nums[i],nums[left],nums[right]]);
                while(nums[left] == nums[left+1])left++;
                while(nums[right]==nums[right-1])right--;
                left++;
                right--;
            }
            else if(nums[i]+nums[left]+nums[right] < 0){
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}



let nums1 = [-1,0,1,2,-1,-4];
let nums2 = [0,1,1];
let nums3 = [-2,0,1,1,2];
let nums4 = [-2,0,0,2,2];
let nums5 = [1,2,-2,-1];

console.log(threeSum(nums1));
console.log(threeSum(nums2));
console.log(threeSum(nums3));
console.log(threeSum(nums4));
 console.log(threeSum(nums5));