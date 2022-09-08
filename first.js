const findRepeatItem = function (arr) {
    oneset = new Set
    res = new Set
    arr.forEach(element => {
        if(oneset.has(element)){
            res.add(element)
        }else{
            oneset.add(element)
        }
    });
    temp = []
    res.forEach(element => {
        temp.push(element)
    });
    return temp
  }

  console.log(findRepeatItem([1,1,1,2,2,3,4,5,5]))