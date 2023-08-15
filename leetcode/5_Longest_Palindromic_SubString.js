// var longestPalindrome = s => {
//     let left;
//     let right;
//     let result = '';
//     for(let i=0;i<s.length;i++){
//         left = i;
//         right = s.length-1;
//         while(left<=right){
//             if(s[left] === s[right]){
//                 left++;
//                 right--;
//             } else {
//                 break;
//             }
//             if(left === right){
//                 if(result.length<s.length-i){
//                     result = s.slice(i);
//                 }
//             }
//         }
//     }
//     return result;
// };


const longestPalindrome = s => {
    const isPalindrome = (start, end) => {
        while (start < end) {
            if (s[start] !== s[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    };
    
    if (isPalindrome(0, s.length - 1)) {
        return s;
    }
    
    let result = '';
    for (let i = 0; i < s.length; i++) {
        let start = i;
        let end = s.length - 1;
        while (start <= end) {
            if (isPalindrome(start, end) && end - start + 1 > result.length) {
                result = s.substring(start, end + 1);
                break;
            }
            end--;
        }
    }
    
    return result;
};



let s1='babad';         //bab
let s2='cbbd';          //bb



console.log(longestPalindrome(s1));
console.log(longestPalindrome(s2));