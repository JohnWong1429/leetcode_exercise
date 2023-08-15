var validateStackSequences = function(pushed, popped) {
    let stack = [];
    for(let num of pushed){
        stack.push(num);
        while(stack.length > 0 && stack[stack.length-1] === popped[0]){
            stack.pop();
            popped.shift();
        }
    }
    return stack.length === 0;
};


let pushed1 = [1,2,3,4,5], popped1 = [4,5,3,2,1];
let pushed2 = [1,2,3,4,5], popped2 = [4,3,5,1,2];

console.log(validateStackSequences(pushed1,popped1));
console.log(validateStackSequences(pushed2,popped2));