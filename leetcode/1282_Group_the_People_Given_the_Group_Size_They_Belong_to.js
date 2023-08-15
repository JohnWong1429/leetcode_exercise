var groupThePeople = function(groupSizes) {
    let groupMap = new Map();
    let result = [];
    for(let i=0;i<groupSizes.length;i++){
        if(groupMap.has(groupSizes[i])){
            groupMap.set(groupSizes[i],[...groupMap.get(groupSizes[i]),i]);
        } else {
            groupMap.set(groupSizes[i],[i]);
        }
        if(groupMap.get(groupSizes[i]).length === groupSizes[i]) {
            result = [...result,groupMap.get(groupSizes[i])];
            groupMap.delete(groupSizes[i]);
        }
    }
    return result;
};



let groupSizes1 = [3,3,3,3,3,1,3];              // [[5],[0,1,2],[3,4,6]]    [[2,1,6],[5],[0,4,3]]   [[5],[0,6,2],[4,3,1]]
let groupSizes2 = [2,1,3,3,3,2];                // [[1],[0,5],[2,3,4]]



console.log(groupThePeople(groupSizes1));
console.log(groupThePeople(groupSizes2));

function exampleFunction(_, b) {
  // Here, the first parameter (_) is intentionally unused
  // The second parameter (b) is used in the function logic
  console.log('The value of b is:', b);
}

exampleFunction(10, 20);