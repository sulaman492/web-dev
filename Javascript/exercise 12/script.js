function randomcolor() {
    let a = Math.floor((Math.random() * 200));
    return a
}

document.getElementsByClassName("box")[0].style.backgroundColor = `rgb(${randomcolor()},${randomcolor()},${randomcolor()})`;
document.getElementsByClassName("box")[1].style.backgroundColor = `rgb(${randomcolor()},${randomcolor()},${randomcolor()})`;
document.getElementsByClassName("box")[2].style.backgroundColor = `rgb(${randomcolor()},${randomcolor()},${randomcolor()})`;
document.getElementsByClassName("box")[3].style.backgroundColor = `rgb(${randomcolor()},${randomcolor()},${randomcolor()})`;
document.getElementsByClassName("box")[4].style.backgroundColor = `rgb(${randomcolor()},${randomcolor()},${randomcolor()})`;
// m[0].style.backgroundColor="red"
