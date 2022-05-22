let Btn=document.getElementById("btnRate");
let output=document.getElementById("output");
Btn.addEventListener("click",()=>{
let rates =document.getElementsByName("rate");
  rates.forEach((rate)=>{
    if(rate.checked){
      output.innerText=`you selected : ${rate.value}`
    }

    
  })




  
})