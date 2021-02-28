//1.引入express
const { response } = require('express');
const express = require('express');
//2.创建应用对象
const app = express();

//3.创建路由规则
app.get('/server',(request,response)=>{

    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');

    //设置响应
    response.send('hello express')
})
app.post('/server',(request,response)=>{
    console.log(request)
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('post')
})
app.all('/json-server',function(request,response){
    //设置响应头 跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //响应头，自定义头
    response.setHeader('Access-control-Allow-Headers',"*");
    //设置响应体
    const data = {'a':1,'b':2,'c':3}
    response.send(JSON.stringify(data))
})
app.get('/ie',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
    response.send('ie 缓存失效'+Date.now());
})
app.get('/delay',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
    setTimeout(() => {
        response.send('演示delay')
    }, 3000);
})

app.all('/jquery-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
    response.setHeader('Access-Control-Allow-Headers',"*")
    response.send(JSON.stringify({a:100,b:200}))
})
app.all('/json-server.js',(request,response)=>{
    const data = {
        exist:1,
        msg:'用户已存在'
    }
    let str = JSON.stringify(data);
    response.end(`handle(${str})`)
})
//4.监听端口启动服务
app.listen(8001,()=>{
    console.log("服务已经启动，8001端口监听中...." )
})