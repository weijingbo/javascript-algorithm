function question1(a,b){
    if(b>a){
        let temp = a;
        a = b;
        b = temp;
    }
    if(a>2*b){
        return b;
    }
    return (a+b)/3;
}


var question3 = function(upper,down){
    let countmap = new Map;
    let reversemap = new Map;
    for (let i = 0; i < upper.length; i++) {
        countmap.set(upper[i],countmap.has(upper[i]) ? countmap.get(upper[i])+1 : 1)
        if(down[i] != upper[i]){
            countmap.set(down[i],countmap.has(down[i]) ? countmap.get(down[i])+1 : 1)
            reversemap.set(down[i],reversemap.has(down[i]) ? reversemap.get(down[i])+1 : 1)//统计正反面的数量能否超过一半
        }
    }
    let ans =Number.MAX_VALUE;
    let iteror = countmap.entries();
    for (let i = 0; i < countmap.size; i++) {
        let iter = iteror.next();
        if(iter.value[1]>(upper.length+1)/2){
            if(iter.value[1] - reversemap.get(iter.value[0])>= (upper.length+1)/2){
                ans = 0;
            } //考虑不翻转的情况
            if(reversemap.get(iter.value[0])<ans){
                ans = reversemap.get(iter.value[0]);
            }
        }
    }
    return ans==Number.MAX_VALUE?-1:ans;
}

// console.log(question1(15,30));
console.log(question3([1,5,7,5,5],[10,5,5,9,10]));