let a=[];
const img=document.querySelector("div.ig");
const ans=document.querySelector("div.ans");
const btn=document.querySelector("div.ts>button");
const msg=document.querySelector("div.y");
const msg2=document.querySelector("div.msg");
const qn=document.querySelector("div.qn");
let qc="40";
document.querySelector("title").textContent=`السلسلة ${localStorage.getItem("S")} | Smart Auto Ecole`;
document.querySelector(".container>h1").textContent=`السلسلة ${localStorage.getItem("S")}`;
msg.addEventListener("click",(elm)=>{elm.target.style.display="none"});
if(localStorage.getItem("QC") !== null){
    qc=localStorage.getItem("QC");
}
function f(a){
    qn.textContent=`${cmp+1}/${qc}`;
    img.style.backgroundImage=`url('/6589/Images/${a[cmp].img}')`;
    ans.innerHTML="";
    for(let i=1;i<=4;i++){
        const span=document.createElement("span");
        span.textContent=i;
        span.addEventListener("click",(e)=>{
            if(e.target.style.color === "black"){
                e.target.style.backgroundColor="#7b322e";
                e.target.style.color="white";
            }
            else {
                e.target.style.backgroundColor="#f0e2c8";
                e.target.style.color="black";
            }
            
            const sp=document.querySelectorAll("div.ans>span");
            let str="";
            for(let span of sp){
                if(span.style.color === "black"){
                    str+=span.textContent;
                }
            }
            if(str === ""){
                btn.style.opacity=".5";
                btn.setAttribute("disabled","");
            }
            else {
                btn.style.opacity="1";
                btn.removeAttribute("disabled");
            }
        });
        ans.appendChild(span);
    }
}
btn.addEventListener("click",(e)=>{
    if(btn.getAttribute("disabled") === null){
        const sp=document.querySelectorAll("div.ans>span");
        let str="",isAns="خطأ";
        for(let span of sp){
            if(span.style.color === "black"){
                str+=span.textContent;
            }
        }
        if(str === a[cmp].c.join("")){
            msg.style.display="flex";
            isAns="صحيح";
            cCount++;
            setTimeout(() => {
                msg.style.display="none";
            }, 1000);
        }
        allA.push({n:(cmp+1),yans:str,isans:isAns,});
        cmp++;
        if(`${cmp}` === qc){
            msg2.textContent=`${cCount}/${qc}`;
            msg2.style.display="flex";
            msg2.addEventListener("click",(elm)=>{document.location.reload();});
        }
        else
            f(a);
        btn.style.opacity=".5";
        btn.setAttribute("disabled","");
    }
});
let cmp=0,allA=[],cCount=0;

fetch(`/6589/get/JSON/65${(localStorage.getItem("S"))}89.json`).then((d)=>d.json()).then((data)=>{
    a=data;
    f(a);

});

