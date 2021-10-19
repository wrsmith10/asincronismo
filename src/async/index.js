const doSomething=()=>{
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=> resolve('do something Async'),3000)
        : reject(new Error('Test Error'))
    });
}

const doSomethingAsync=async()=>{
    const something=await doSomething();
    console.log(something);
}

const anotherFunction=async()=>{
    try{
        const something=await doSomethingAsync();
    }
    catch(error){
        console.error(error)
    }
}


console.log('Before');
anotherFunction();
console.log('After');