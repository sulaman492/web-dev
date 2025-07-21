let a = parseInt(prompt("Enter the number whose factorial you want to find : "))

let fact = 1;
for (let i = a; i > 0; i--) {
    fact = (fact * i);
}
alert("factorial opf number is : "+ fact)

// 5*1=5  5*4=20  20*3  