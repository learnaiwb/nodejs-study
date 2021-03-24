const fs = require('fs');
const reader =fs.createReadStream('./1-stream.js');
reader.on('data',(data)=>{
    console.log(data.toString());
})