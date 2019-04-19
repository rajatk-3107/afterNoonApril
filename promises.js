const sum = (a,b) => {
    return new Promise((resolve,reject)=>{
        if(!a || !b){
            reject('Please send all detailsSS')
        }else{
            resolve({
                success: true,
                sum: a+b
            })
        }
    })
}

// sum(4).then((data)=>{
//     console.log(data)
// },(err)=>{
// console.log("---err", err)
// })

sum(4).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log("---err", err)
})