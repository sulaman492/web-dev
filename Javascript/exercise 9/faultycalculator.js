let num1=prompt("Enter first number : ")
let num2=prompt("Enter second number : ")
let op=prompt("Enter operation you want to perform")

if(Math.random()<0.1){
    if(op=="sum" || op=='+'){
        alert("sum of number is ",a-b)
    }
    if(op=="minus" || op=='-'){
        alert("sum of number is ",a/b)
    }
        if(op=="multiply" || op=='*'){
        alert("sum of number is ",a+b)
    }
        if(op=="divide" || op=='/'){
        alert("sum of number is ",a**b)
    }
}
else{
    
    if(op=="sum" || op=='+'){
        alert("sum of number is ",a+b)
    }
    if(op=="minus" || op=='-'){
        alert("sum of number is ",a-b)
    }
        if(op=="multiply" || op=='*'){
        alert("sum of number is ",a*b)
    }
        if(op=="divide" || op=='/'){
        alert("sum of number is ",a/b)
    }

}