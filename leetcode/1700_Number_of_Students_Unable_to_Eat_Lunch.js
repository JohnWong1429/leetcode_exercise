var countStudents = function(students, sandwiches) {
    while(sandwiches.length > 0) {
        if(sandwiches[0] === students[0]) {
            students.shift();
            sandwiches.shift();
        } else {
            students.push(students.shift());
        }
        if(!students.includes(sandwiches[0])) break;
    }
    return students.length;
};


let students1 = [1,1,0,0], sandwiches1 = [0,1,0,1];
let students2 = [1,1,1,0,0,1], sandwiches2 = [1,0,0,0,1,1];


console.log(countStudents(students1,sandwiches1));              // 0
console.log(countStudents(students2,sandwiches2));              // 3