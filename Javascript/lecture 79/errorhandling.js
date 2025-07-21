let a = prompt("Enter first number : ")
let b = prompt("Enter second number : ")

if (isNaN(a) || isNaN(b)) {
    throw new Error("Sorry this is not allowed");

}
let sum = parseInt(a) + parseInt(b)

function main() {
    try {
        console.log('The sum is ', sum * x);
        return true
    } catch (error) {
        console.log('Error agya bro');
        return false
    }
    finally {
        console.log("All files and db connections are closed")
    }
}

let c=main()

//finally is the part of code that will run no matter if there is return in try and catch