// adjectives:
// crazy
// Amazing
// Fire

// Shop Name
// Engine 
// Food
// garments

// Anoither word
// bros
// limited
// hub
function numgenerator()
{
    return Math.floor((Math.random()*3))
}

let adjective1="Crazy"
let adjective2="Amazing"
let adjective3="Fire"

let Shop1="Engine"
let Shop2="Food"
let Shop3="Garments"

let another1="bros"
let another2="Limited"
let another3="Hub"

let first,second,third;

let num1=numgenerator()
if(num1==0)
{
    first=adjective1
}
else if(num1==1)
{
    first=adjective2    
}
else if(num1==2)
{
    first=adjective3    
}



let num2=numgenerator()
if(num2==0)
{
    second=Shop1
}
else if(num2==1)
{
    second=Shop2    
}
else if(num2==2)
{
    second=Shop3    
}



let num3=numgenerator()
if(num3==0)
{
    third=another1
}
else if(num3==1)
{
    third=another2    
}
else if(num3==2)
{
    third=another3   
}

console.log(first+second+third)