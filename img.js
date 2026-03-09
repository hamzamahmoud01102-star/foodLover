let box = document.querySelector(".boxmodel")
let controls = document.getElementsByClassName("controls")
let close2 = document.querySelector(".close")
let next2 = document.querySelector(".next2")
let prev2 = document.querySelector(".prev2")
let imgs = document.querySelectorAll(".up img")
let img = document.querySelector(".controls img")
console.log(imgs);


let imgarr = []
    for(let i = 0 ;i< imgs.length; i++){
        imgarr.push(imgs[i])
    }    

console.log(imgarr);



function show(){
   img.src = imgarr[currentIndex].src
}
 let currentIndex = 0 



for ( let x = 0 ; x < imgarr.length ; x++){
    (function (x) { 
        imgarr[x].addEventListener("click", function () { 
        box.style.display = "flex"
    currentIndex = x
        show()
})
})(x)
}

console.log(prev2);


prev2.addEventListener("click",  ()=> { 
currentIndex--; 
if (currentIndex < 0) { 
currentIndex = imgarr.length - 1; 
} 
show(); 
});

next2.addEventListener("click",  ()=> { 
currentIndex++; 
if (currentIndex < 0) { 
currentIndex = imgarr.length + 1; 
} 
show(); 
});

close2.addEventListener("click", function (event) { 
    console.log('guyagjyhgyuguy');
    box.style.display = "none"; 

});