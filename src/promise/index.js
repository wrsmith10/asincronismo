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