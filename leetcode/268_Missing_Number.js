// var missingNumber = nums => {
//     if(nums.length == 1) return nums==1?0:1;
//     if(!nums.includes(0)) return 0;
//     nums.sort((a,b)=>a-b);
//     let curr = nums[0];
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] != curr) return curr;
//         curr++;
//     }
//     return curr;
// };


// var missingNumber = nums => {
//     let map = new Map();
//     for (let i = 0;i<nums.length;i++){
//         map.set(nums[i], map.has(nums[i])?map.get(nums[i]):1);
//     }
//     for(let j=0;j<nums.length+1;j++){
//         if(!map.has(j)) return j;
//     }
// };


var missingNumber = nums => {
    let map = new Map();
    let key;
    for (let i = 0;i<nums.length;i++){
        map.set(nums[i], map.has(nums[i])?map.get(nums[i]):1);
    }
    for(let j=0;j<nums.length+1;j++){
        if(map.has(j)) map.delete(j);
        else map.set(j,1);
    }
    key = [...map.keys()][0];
    return key;
};




let nums1 = [3,0,1];
let nums2 = [0,1];
let nums3 = [9,6,4,2,3,5,7,0,1];
let nums4 = [1];
let nums5 = [0];


console.log(missingNumber(nums1));      //2
console.log(missingNumber(nums2));      //2
console.log(missingNumber(nums3));      //8
console.log(missingNumber(nums4));      //0
console.log(missingNumber(nums5));      //1