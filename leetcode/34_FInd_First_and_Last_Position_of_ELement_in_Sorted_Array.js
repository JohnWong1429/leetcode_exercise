var searchRange = (nums,target) => {
    let left =0;
    let right = nums.length-1;
    let mid;
    while(left<=right){
        mid = Math.floor((left+right)/2);
        if(nums[mid] == target) {
            let a = mid;
            while(nums[a-1] == target){
                a--;
            }
            left = a;
            a = mid;
            while(nums[a+1] == target){
                a++;
            }
            right = a;
            if(nums[left] == target && nums[right] == target){
                return [left,right];
            }
        }
        if(nums[mid]>target) {
            right = mid-1;
        } else {
            left= mid+1;
        }
    }
    return [-1,-1];
};


let nums1 = [5,7,7,8,8,8,8,10], target1=8;      //[3,4]
let nums2= [5,7,7,8,8,10], target2=6;       //[-1,-1]
let nums3=[],target3=0;                     //[-1,-1]
let nums4=[1,3], target4=1;

//console.log(searchRange(nums1,target1));
// console.log(searchRange(nums2,target2));
// console.log(searchRange(nums3,target3));
console.log(searchRange(nums4,target4));