// let dest,src,result;
// dest = {id:'dest'};
// result = Object.assign(dest,{id:'src1',a:'foo'},{id:'src2',b:'bar'});
// console.log(result);

/**
 * 
 * @param {Number} n 
 * @param {Number} k 
 * @param {Array} arr1 
 */
// var question2 = function(n,k,arr1){
//     arr1.sort((a,b)=>{return a-b})
//     let max = n-1; //记录大法术的威力
//     let min = 0;   //小法术的威力
//     let ans = 0;
//     while(min<max){
//         if(arr1[max]*arr1[min]>=k){
//             ans += max-min;
//             max--;
//         }else{
//             min++;
//         }
//     }
//     return ans*2;
// }

var question2 = function(n,k,arr1){
    arr1.sort((a,b)=>{return a-b})
    let ans = 0;
    for(let i = 0;i<n;i++){
        for(let j =i+1;j<n;j++){
            console.log(j);
            if(arr1[i]*arr1[j]>=k){
                ans++;
            }
        }
    }
    return ans*2;
}


var Graph = function(v){
    this.v = v;
    this.adj = [];
    for(let i =0;i<this.v;i++){
        this.adj[i] = [];
    }

    this.addEdge = function(s,t){
        this.adj[s].push(t);
        this.adj[t].push(s);
    }

}

var question3 = function(n,arr1){
    adj = Array[n].fill(Array);
    for(let i =0;i<n-1;i++){
        adj[i+1].push(arr1[i])
    }
    const visited = new Array(n).fill(false);
    // var maxLength =0;
    // for (let i = 0; i <n; i++) {

    //     let a = dfs(graph,n,i);
    //     maxLength = Math.max(maxLength,a);
    // }
    return parseInt(maxLength/2);
}

var find = function(n,graph){
    const visited = new Array(n).fill(false);
    for (let i = 0; i < n; i++) {
       
}
}
var dfs = function(graph,n,i){
    
    const queue = [i];
    let ans = 0
    while(queue.length !==0){
        let cur = queue.shift();
        visited[cur] = true;
        let cur_list = graph.adj[cur];
        let unvisited = cur_list.filter((node)=>{
            return !visited[node];
        });
        for (let index = 0; index < unvisited.length; index++) {
            const node = unvisited[index];
            visited[node] = true;
            queue.push(node);
        }
    }
    for (let i = 0; i < visited.length; i++) {
        if(visited[i]){
            ans++;
        }
    }
    return ans;
}

console.log(question3(6,[1,2,2,3,3]));