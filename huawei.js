/**
 * @param {number} m
 * @param {number[]} arr1
 * @param {number} n
 */
var question1 = function(m,arr1,n){
    let left_value;
    let same_n = 1;
    let save_n = n;
    arr1.sort((a,b)=>{return a-b});
    for(let j =m;j>0;j--){
        left_value = n;
        let tempmax =1;
        for(let i =0;i<j;i++){
            if(arr1[i]+left_value>=arr1[j]){
                left_value = left_value-(arr1[j]-arr1[i]);
                tempmax = tempmax+1;
            }
        }
        if(tempmax>same_n){
            same_n = tempmax;
            save_n = left_value;
        }
        if(tempmax ==same_n &&save_n>left_value){
            save_n = left_value;
        }
    }
    console.log(same_n,save_n);
}
// console.log(question1(5,[2,9,3,1,6],4));
console.log(question1(3,[5,1,20],2));




var maxAreaOfIsland = function(grid) {
    const DIRECTION = [
        [0,1],[0,-1],[-1,0],[1,0]
    ];
    let res = 0;
    let max1= 0;
    let max2 = 0;
    for(let i = 0;i<grid.length;i++){
        for(let j = 0;j<grid[0].length;j++){
            if(grid[i][j]!=1){
                continue;
            }
            let queue = [[i,j]];
            grid[i][j] = 0;
            let isLandM2 = 0;
            while(queue.length>0){
                let len = queue.length;
                while(len>0){
                    len--;
                    const node = queue.shift();
                    const r = node[0], c = node[1];
                    isLandM2++;
                    DIRECTION.forEach(item=>{
                        let nR = r+item[0], nC = c+item[1];
                        if(nR<0||nC<0||nR>=grid.length||nC>=grid[0].length||grid[nR][nC]!=1){
                            return;
                        }
                        if(grid[nR][nC]===1){
                            queue.push([nR, nC]);
                            grid[nR][nC] = 0;
                        }
                    });
                }
            }
            if(isLandM2>res){
                max2 = max1;
                max1 = res;
                res = Math.max(res, isLandM2);
            }
        }
    }
    return res+max1+max2+2;
};


console.log(maxAreaOfIsland([[1,1,0,1],[1,1,0,1],[0,0,0,0],[1,1,1,1]]));