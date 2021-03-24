/**
 * util.promisify 方法
 */
const util = require('util');
const fs = require('fs')
let mineReadFile = util.promisify(fs.readFile);
mineReadFile('./resource/1.txt','utf-8').then(value=>{
    console.log(value);
},reason=>{
    console.log(reason)
})
