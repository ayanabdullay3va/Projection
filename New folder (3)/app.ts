// let counter=document.querySelector(".count")!
// let plus =document.querySelector(".plusbtn")!
// let minus=document.querySelector(".minusbtn")!

// plus.addEventListener("click",()=>{
// counter.textContent=String(+counter.textContent+1)
// console.log(counter.textContent);

// })
// minus.addEventListener("click",()=>{
// if (counter.textContent=String(+counter.textContent-1)) {
//    console.log(counter.textContent);
   
// }
// })
// let plus =document.createElement("button")
// plus.textContent = '+';
// document.body.appendChild(plus);
// let counter =document.createElement("span")
// counter.textContent="0"
// document.body.appendChild(counter)
// let minus =document.createElement("button")
// minus.textContent = '-';
// document.body.appendChild(minus);
// plus.addEventListener("click",()=>{
// counter.textContent=String(+counter.textContent+1)
// console.log(counter.textContent);

// })
// minus.addEventListener("click",()=>{
//     if (  counter.textContent=="0") {
        
//     }
// else{
//     counter.textContent=String(+counter.textContent-1)
//    console.log(counter.textContent);
   
// }
// })
// function Square() {
//    kind:enum , sideLenght:Number,
// }

enum Shapekind{
    circle, 
square
}
interface Shape{
    kind:Shapekind,
    radius:number,
    sideLenght:number,
    getArea:(a:number)=>number
}
class circle{
    getArea:(a:number)=>number

    
}
