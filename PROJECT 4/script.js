const button=document.querySelectorAll(".button");
const display=document.querySelector("#display");
const allClear=document.querySelector("#AC");
const del=document.querySelector("#DE");
const equal=document.querySelector(".equal")
button.forEach((button)=>{
    button.addEventListener("click",()=>{
display.value +=button.value;
   });
});
allClear.addEventListener("click", ()=>{
    display.value="";
})
del.addEventListener("click",()=>{
    display.value=display.value.toString().slice(0,-1);
})
equal.addEventListener("click",()=>{
    display.value=eval(display.value);
})
 