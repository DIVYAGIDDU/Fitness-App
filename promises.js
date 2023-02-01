let p=new Promise((resolve, reject) => {
    let a=1+1
    if(a==2){
        resolve('sucess')
    }else{
        reject('failure')
    }
})
p.then((message)=>{
console.log("its then" +message)
}).catch((message)=>{
console.log("its catch" +message)
})