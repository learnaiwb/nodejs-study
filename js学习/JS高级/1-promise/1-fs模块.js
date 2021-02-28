/**
 * 封装mineReadFile用于读取文件内容
 * 参数:path 文件路径
 * 返回：promise对象
 */
function mineReadFile(path){
    return new Promise((resolve,reject)=>{
        require('fs').readFile(path,(error,data)=>{
            if(error) reject(error);
            resolve(data);
        })
    })
}
mineReadFile('./resource/1.txt').then(
    val=>console.log(val),
    reason=>console.log(reason)
)