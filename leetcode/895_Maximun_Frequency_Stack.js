var FreqStack = function() {
    this.stack = [];
    this.fmap = new Map();
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
    let freq = (this.fmap.get(x) || 0) + 1
    this.fmap.set(x, freq)
    if (!this.stack[freq]) this.stack[freq] = [x]
    else this.stack[freq].push(x)
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let top = this.stack[this.stack.length-1], x = top.pop()
    if (!top.length) this.stack.pop()
    this.fmap.set(x, this.fmap.get(x) - 1)
    return x
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */

var obj = new FreqStack();
obj.push(1);
obj.push(1);
obj.push(11);

obj.push(5);
obj.push(1);
obj.push(5);

var param_2 = obj.pop();
var par = obj.pop();


console.log(obj);
console.log(param_2);
console.log(par);

