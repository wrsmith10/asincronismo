const SomethingWillHappen=()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('Hey!');
        }
        else{
            reject('Whoops!');
        }
    });
}

SomethingWillHappen()
.then(response=>console.log(response))
.catch(err=> console.error(err));

const somethingWillHappen2=()=>{
    return new Promise((resolve,reject) =>{
        if (true){
            setTimeout(()=>{
                resolve('True');
            },2000)
        }
        else{
           const error= new Error('Whoops!') ;
           reject(error);
        }
    })
}

somethingWillHappen2()
.then(response =>console.log(response))
.catch(err=>console.error(err));

Promise.all([SomethingWillHappen(),somethingWillHappen2()])
.then(response=>{
    console.log('Array of results', response);
})
.catch(err=>{
    console.error(err);
})