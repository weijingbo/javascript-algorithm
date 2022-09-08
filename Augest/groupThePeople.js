/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
 var groupThePeople = function(groupSizes) {
    const group = new Map();
    let n = groupSizes.length;
    for(let i =0;i<n;i++){
        if(!group.has(groupSizes[i])){
            group.set(groupSizes[i],[])
        }
        group.get(groupSizes[i]).push(i);
    }
    const groupList = [];
    for (const [size,people] of group.entries()){
        const groupCount = Math.floor(people.length / size);
        for (let i = 0; i < groupCount; i++) {
            const group = [];
            const start = i * size;
            for (let j = 0; j < size; j++) {
                group.push(people[start + j]);
            }
            groupList.push(group);
        }
    }
    return groupList;
};

console.log(groupThePeople([3,3,3,3,1,3,3]));