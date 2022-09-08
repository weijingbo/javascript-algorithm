let testset = new Set;
testset.add(1);
testset.add(2);
testset.has(1);
// testset.delete(1);
testset.forEach((key,value)=>{
    console.log(key);
    console.log(value);
})
testset.delete(1);
console.log(testset);

let testmap = new Map;
testmap.set("a",1);
testmap.set(2,1);
testmap.set(2,3);
testmap.get(2);
testmap.has(2);
testmap.entries
console.log(testmap);

const stack = [];

stack.push(1);
a = stack.pop();
console.log(a);