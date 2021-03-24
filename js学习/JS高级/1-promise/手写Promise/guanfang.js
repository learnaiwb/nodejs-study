let p= new Promise((resolve,reject)=>{
    let a = resolve('1');
    console.log(a)
})
let p1 = p.then(val=>{
    console.log(val);
    return Promise.resolve("2-1");
}).then(val=>{
    console.log(val);
    return Promise.resolve("2-2")
}).then(val=>{
    return val
}
)
let p2 = p.then(val=>{
    console.log(val);
    return Promise.resolve("3-1");
}).then(val=>{
    console.log(val);
    return Promise.resolve("3-2")
}).then(val=>{
    return val
}
)
console.log(p1)
console.log(p2)
//执行结果
// undefined
// Promise {<pending>}
// Promise {<pending>}
//  1
//  1
// 2-1
// 3-1
