/**
 * 封装mineReadFile用于读取文件内容
 * 参数:path 文件路径
 * 返回：promise对象
 */
function mineReadFile(path){
    return new Promise((resolve,reject)=>{
        require('fs').readFile(path,(err,data)=>{
            if(err) reject(err);
            resolve(data.toString());
        })
    })
}
mineReadFile("./resource/1.txt").then(
    value=>console.log(value),
    reason=>console.log(reason)
)