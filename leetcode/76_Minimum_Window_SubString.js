var minWindow = function(s, t) {
    if(s.length<t.length) return'';
    let stack = [];
    let a = s;
    let min = s.length;
    let array = [];
    let index = 0;
    while(true){
        let temp = [];
        for(let i=0;i<t.length;i++){
            if(a.indexOf(t[i]) !=-1){
                temp.push(a.indexOf(t[i])+index);
            } else {
                break;
            }
        }
        if(temp.length == t.length){
            stack.push(temp);
             a = a.slice(Math.max(...temp)+1);
             index = Math.max(...temp)+1;
        } else {
            break;
        }
    }
    for(let j=0;j<stack.length;j++){
        if(Math.max(...stack[j])-Math.min(...stack[j]) <min){
            min = Math.max(...stack[j])-Math.min(...stack[j]);
            array = stack[j];
        }
    }
    return s.slice(Math.min(...array),Math.max(...array)+1);

};

console.log(minWindow("ADOBECODEBANC","ABC"));
console.log(minWindow("a","a"));
console.log(minWindow("a","aa"));
console.log(minWindow('aa','aa'));
