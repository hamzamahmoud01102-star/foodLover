const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const cards = document.querySelector(".cards")
let index = 0
function slide(steps){
    let total = cards.children.length
    index = (total + index + steps) % total 
    cards.style.transform= `translateX(${-index * 100}%)`
}
next.onclick = function(){
    console.log("next");
    
    slide(1)
}
prev.onclick = function(){
    slide(-1)
}
console.log("kkkk");
