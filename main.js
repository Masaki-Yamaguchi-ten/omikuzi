'use strict';

{
  const btn = document.getElementById("button");
  const hatena = document.querySelector("p");

  btn.addEventListener("click",()=>{
    const x=["大吉","吉","凶"];
    const num=Math.floor(Math.random()*x.length);
    if(num===0){
        hatena.textContent="おめでとー！";
        hatena.style.color="#ff0000";
    }else if(num===1){
        hatena.textContent="普通やね";
        hatena.style.color="#000";
    }else{
        hatena.textContent="残念！";
        hatena.style.color="#4b0082";
    }
    btn.textContent=x[num];
  });


  // const btn=document.getElementById("button");
  // btn.addEventListener("click",()=>{
  //   const r=["大吉","中吉","小吉"];
  //   // btn.textContent=r[n];
  //   btn.textContent=r[Math.floor(Math.random()*r.length)];
  // });


}
