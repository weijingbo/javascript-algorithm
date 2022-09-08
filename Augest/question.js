setTimeout(function(){
    console.log(1);
},100);

new Promise(function(reslove){
    console.log(2);
    reslove();
    console.log(3);
}).then(function(){
    console.log(4);
    new Promise((resove,reject)=>{
        console.log(5);
        setTimeout(()=>{
            console.log(6);
        },10)
    })
});
console.log(7);
console.log(8);