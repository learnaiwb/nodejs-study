function Promise(executor){
     
    //添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;

    //保存实例对象的this值
    const self = this;
    //保存回调函数
    this.callbacks = []

    function resolve(data){
        //1.修改状态promiseState
        if(self.PromiseState != 'pending') return;
        
        self.PromiseState = 'fulfilled';
        
        //2.修改结果值promiseResult
        self.PromiseResult = data;
        //调用成功的回调函数
        setTimeout(() => {
            self.callbacks.forEach(item => {
                item.onResolved(data)
            });
        }, 0);

    }
    function reject(data){
        //1.修改状态promiseState
        if(self.PromiseState != 'pending') return;
        self.PromiseState = 'rejected';
        
        //2.修改结果值promiseResult
        self.PromiseResult = data;
        //执行回调
        setTimeout(() => {
            self.callbacks.forEach(item=>{
                item.onRejected(data)
            })
        }, 0);
    }

    try{
        //捕捉throw 'error'
        executor(resolve,reject);
    }catch(e){
        reject(e);
    }

}



Promise.prototype.then = function(onResolved,onRejected){
    let ctx = this;
    return new Promise((resolve,reject)=>{
        console.log('then里面：',this );

        // if(this.PromiseState == 'fulfilled'){
        //     let result = onResolved(this.PromiseResult);
        //     //获取回调函数的执行结果
        //     if(result instanceof Promise){
        //         //如果是promise类型
        //         result.then(v=>{resolve(v)},
        //         r=>{
        //             reject(r);
        //         })
        //     }else{
        //         //结果的对象状态为成功
        //         resolve(result);
        //     }
        // }
        // if (this.PromiseState == 'rejected'){
        //     onRejected(this.PromiseResult)
        // }
        if(this.PromiseState == 'pending'){
            //保存回调函数
            this.callbacks.push({
                onRejected:function(){
                    onRejected(ctx.PromiseResult)
                },
                onResolved:function(){
                    // console.log('this=',this);
                    // console.log('ctx = ',ctx )
                    let result =  onResolved(ctx.PromiseResult);
                    if(result instanceof Promise){
                        result.then(v=>{
                            resolve(v)
                        },r=>{reject(r)})
                    }else{
                        resolve(result)
                    }

                }   
            })
        }
    })
}