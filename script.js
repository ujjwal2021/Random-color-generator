const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'd', 'e', 'f'];

const btn = document.querySelector("#color-btn");
const body = document.body;
const colorCode = document.querySelector(".container .color-code");

btn.addEventListener("click", (e)=>{
    let hexColor = "#";
    for(let i = 0; i <6; i++){
    var random = Math.floor(Math.random()*array.length)
    hexColor += array[random];
}
    body.style.backgroundColor = hexColor;
    colorCode.innerHTML = hexColor;
    colorCode.style.color = hexColor;
    console.log(hexColor)
})