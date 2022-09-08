const pivotFn = (data, groupby, key, value) => {
    const result=[];
    groupbyset = new Set()
    data.forEach(element => {
        if(groupbyset.has(element[groupby])){
            result.forEach(ele => {
                if(ele[groupby]==element[groupby]){
                    ele[element[key]]=element[value]
                }
            });
        }
        else{
            groupbyset.add(element[groupby])
            let obj={}
            obj[groupby] = element[groupby]
            obj[element[key]] =element[value]
            result.push(obj)
        }
    });
    
    return result;
    };


data = [ { schoolName: 'abc', class: 8, category: 'Male', count: 50 }, 
{ schoolName: 'abc', class: 8, category: 'Female', count: 43 }, 
{ schoolName: 'abc', class: 9, category: 'Male', count: 38 }, 
{ schoolName: 'abc', class: 9, category: 'Female', count: 36 }, 
{ schoolName: 'abc', class: 10, category: 'Male', count: 56 },
 { schoolName: 'abc', class: 10, category: 'Female', count: 48 } ]


 console.log(pivotFn(data,'class','category','count'))
 