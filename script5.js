let btnshow=document.querySelector('button');
let input=document.querySelector('button');
let output=document.querySelector('button');
btnshow.addEventListener('click',()=>{
output.innerText=input.value
});
input.addEventListener('keyup',()=>{
if(input.value.length<3)btnshow.disabled=true
else btnshow.disabled=false;
});