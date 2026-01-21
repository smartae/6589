const s=document.querySelector("div.s");
for(let i=1;i<=38;i++)
    s.innerHTML+=`<a href='S/' onclick='localStorage.setItem("S","${i}");'>السلسلة ${i}</a>`;

const btn20=document.querySelector("#q20");
const btn40=document.querySelector("#q40");
if(localStorage.getItem("QC") !== null){
    if(localStorage.getItem("QC") === "20"){
        btn20.style.opacity="1";
        btn40.style.opacity=".5";
    }
    else{
        btn40.style.opacity="1";
        btn20.style.opacity=".5";
    }
}
btn20.addEventListener("click",(e)=>{
    e.target.style.opacity="1";
    localStorage.setItem("QC","20");
    btn40.style.opacity=".5";
});
btn40.addEventListener("click",(e)=>{
    e.target.style.opacity="1";
    localStorage.setItem("QC","40");
    btn20.style.opacity=".5";
});

