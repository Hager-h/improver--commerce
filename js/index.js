// start nav

let open = document.getElementById("open-id");

let nav=document.querySelector(".all-link")
let key=document.querySelector(".key")
open.addEventListener("click", function () {
    
    nav.classList.add("active")
  
})

let close = document.querySelector(".close")
console.log(close)
close.addEventListener("click", function () {
    nav.classList.remove("active")

})
// end nav

// for cart
let bigDiv = document.querySelector(".gallery-images img")
// console.log(bigDiv)
let shirts=document.querySelectorAll(".small a img")
shirts.forEach(function (shirt) {
console.log(shirt)
    shirt.addEventListener("click", function (e) {
        e.preventDefault()
   bigDiv.src= e.target.dataset.src

    })



})



let stepperInput=document.querySelectorAll(".stepperInput ")
let input=document.querySelectorAll(".input ")
let stepperInputBleft=document.querySelectorAll(".button--addOnLeft")
let stepperInputBRight=document.querySelectorAll(".button--addOnRight")
let stepArray =Array.from(stepperInput)

for(let i=0;i<stepArray.length;i++){
    
stepperInputBleft[i].addEventListener("click",function(){
    if(input[i].value<=1){

        input[i].value=1

    }else{input[i].value-=1

    }
})




stepperInputBRight[i].addEventListener("click",function(){
    if(input[i].value>=1){

        input[i].value=Number(input[i].value)+1
    }else{
        input[i].value=1

    }
})
}






let page = document.querySelectorAll(".product-boxes  ")
page.forEach((img)=>{
img.onclick = function () {
    window.location.href="cart.html"
}
})



// for cart


