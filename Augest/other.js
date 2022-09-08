var calNum = function(n){
    let start = 100
    while(n>0){
        start ++
        let temp = start
        let low = temp%10
        temp = parseInt(temp/10)
        let is_upper = false
        while(temp>0){
            if(temp%10<=low){
                low = temp%10
                temp = parseInt(temp/10)
            }else{
                is_upper = true
                n--
                break;
            }
        }
        temp = start
        low = temp%10
        temp = parseInt(temp/10)
        while(temp>0 & !is_upper){
            if(temp%10<=low){
                low = temp%10
                temp = parseInt(temp/10)
            }else{
                n--
                break;
            }
        }
    }
    return start
}

console.log(calNum(10000));


