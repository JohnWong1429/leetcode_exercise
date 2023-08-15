var evalRPN = function(tokens) {
    let stack =[];
    for(let i=0;i<tokens.length;i++){
        if(['+','-','*','/'].includes(tokens[i])){
            b= stack.pop();
            a=stack.pop();
            if(tokens[i] == '+') stack.push(a+b);
            else if(tokens[i] == '-') stack.push(a-b);
            else if(tokens[i] == '*') stack.push(a*b);
            else if(tokens[i] == '/') stack.push(parseInt(a/b));
        } else {
            stack.push(parseInt(tokens[i]));
        }
    }
    return stack.pop();
};


let tokens1=["2","1","+","3","*"];
let tokens2=["4","13","5","/","+"];
let tokens3=["10","6","9","3","+","-11","*","/","*","17","+","5","+"];


console.log(evalRPN(tokens1));
console.log(evalRPN(tokens2));
console.log(evalRPN(tokens3));
