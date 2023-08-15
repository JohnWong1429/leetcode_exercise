var debounce = (fn,t) => {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args),t);
    }
}






    // let left =0;
    // let right=nums.length-1;
    // let temp;
    // while(left<=right){
    //     if(nums[left]>pivot){
    //         temp = nums[right];
    //         nums[right] = nums[left];
    //         nums[right] = temp;
    //         right--;
    //     } else if(nums[left]<pivot) {
    //         left++;
    //     } else {
    //         temp = nums[left];
    //         nums[left] = nums[left+1];
    //         nums[left+1] = temp;
    //     }
    // }
    // return nums;