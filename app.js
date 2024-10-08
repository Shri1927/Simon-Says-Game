let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","green","blue"]

let started=false;
let level=0;

h3=document.querySelector("h3");

document.addEventListener("click", function(){
    if(started===false){
        console.log("game Started");
        started=true;

        levelup();
    }

})

 function gameflash(btn){ 

    btn.classList.add("flash");
    setTimeout(function(){
         btn.classList.remove("flash");
    },250)

}

function userflash(btn){ 

    btn.classList.add("userflash");
    setTimeout(function(){
         btn.classList.remove("userflash");
    },250)

}

function levelup(){
      userSeq=[];
      level++;
      h3.innerText = "Level"+" "+level;
      let randIdx= Math.floor(Math.random()*3);
      let randColor= btns[randIdx];
      let randBtn= document.querySelector('.'+randColor);
      gameSeq.push(randColor);
      console.log(gameSeq);
      gameflash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,500);
        }
    }else{
        h3.innerHTML = "Game Over! Your Score Was <b>"+level+"<b> <br> Press Any Key to Start."
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function boxPress(){
    let btn = this;
    userflash(btn);
    userColor= btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".box");
for(box of allbtns){
    box.addEventListener("click",boxPress)
}

function reset(){
     started=false;
     gameSeq=[];
     userSeq=[];
     level=0;
}