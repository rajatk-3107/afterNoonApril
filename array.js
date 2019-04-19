var a = ['12', 'bye', 'Bii','2']
var x= [55,68,89,20]
// console.log(a.reverse())
// console.log(a.sort())
// console.log(a.length)
// console.log(a.join('-'))
// a.push('ok')
// console.log(a)
// a.pop()
// console.log(a)
// a.shift()
// console.log(a)
// a.unshift('shdfh')
// console.log(a)

// console.log(a.slice(2,3))
// a.splice(1,2)
// console.log('from splic3e',a)

// a.forEach(e=>{
//     console.log(e)
// })

console.log(a.map((e,i)=>{
if(i==2){
    return e+1
}else{
    return e
}}))

console.log(x.filter(e=>{
    return e>60
    }))