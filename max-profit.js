

function maxProfit(n){
    if(n < 4){
        return undefined
    }
    let obj={
        T:0,
        P:0,
        C:0
    }
    let arr=[0,0,0]
    for(let i = 4;i<=n;i++){
        
        if(i>4){
            arr[0]=Math.floor(0+1*(i/5)) 
        }
        
    }
    //console.log( arr)
    let obj1=Object.create(obj)
    obj1.T=arr[0]
    obj1.P=arr[1]
    obj1.C=arr[2]
    return obj1
    
    


}
console.log(maxProfit(13))

//console.log(Math.floor(9/2))