let p1 = new Promise((resolve,reject)=>{
    resolve(1)
})
let p2 = p1.then(value=>{
    return 2;
},reason=>{})

console.log(p1,p2 )
console.log(p1==p2 )