document.querySelector(".container").addEventListener("click", (e) => {
    alert("container was clicked")
})
document.querySelector(".childcontainer").addEventListener("click", (e) => {
    alert("childcontainer was clicked")
})
document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("child was clicked")
})

let a = setInterval(() => {
    document.querySelector(".childcontainer").style.backgroundColor = "red";
}, 9333)

let b = setTimeout(() => {
    document.querySelector(".container").style.backgroundColor = "brown";
}, 3333)