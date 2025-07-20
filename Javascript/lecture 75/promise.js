console.log('this is promises');

let prom1=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        console.log("No random number is supporting you")
        reject("badluck")
    }
    else{
        setTimeout(()=>{
            console.log("i am a hacker")
        },3000)
        resolve("sulaman")
    }

})

let prom2=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        console.log("No random number is supporting you 2")
        reject("badluck 2")
    }
    else{
        setTimeout(()=>{
            console.log("i am a hacker 2")
        },1000)
        resolve("sulaman 2")
    }

})

let prom3=Promise.all([prom1,prom2])
prom3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err);
    
})

// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err);
    
// })