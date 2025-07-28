async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(45) 
        }, 1000);
    })
}

function sum(a,b,c){
    return d=a+b+c
}

(async function main() {
let a=await sleep()
console.log(a);
let b=await sleep()
console.log(b);

//IIFE  immediately invoked function expression

let [x,y,...rest]=[4,5,6,7,8,9,0]
console.log(x)
console.log(y)
console.log(rest)
//Destructuring

let arr=[1,2,3]
console.log(sum(arr[0],arr[1],arr[2]));
console.log(sum(...arr));//spread operator

})()    


