let allbutton = document.querySelectorAll(".box");
let rebtn = document.querySelector(".restartbtn");
let winername = document.querySelector(".msg");
let msgcount = document.querySelector(".msgcont");
let newgame = document.querySelector(".newbtn")
let turnx = true;
const allwinning = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
allbutton.forEach((e)=>{
  e.addEventListener("click",()=>{
    if(turnx){
        e.innerText = "X";
        turnx = false;
    }
    else{
        e.innerText = "O";
        turnx= true;
    }
    e.disabled = true;
    winningptn()
  })
})
const restarbtn =()=>{
  turnx = true;
  ablebtn();
  msgcount.classList.add("hide");
}
const disabbtn = () =>{
  for (let button of allbutton){
    button.disabled = true;
  }}
  const ablebtn = () =>{
    for (let button of allbutton){
      button.disabled = false;
      button.innerText = "";
    }
}
const wname = (winner)=>{
      winername.innerText = `Winner is ${winner}`;
      msgcount.classList.remove("hide");
      disabbtn();
}
const winningptn = ()=>{
    for(ptn of allwinning){
       let pos1 = allbutton[ptn[0]].innerText;
       let pos2 = allbutton[ptn[1]].innerText;
       let pos3 = allbutton[ptn[2]].innerText;
       if(pos1 != "" && pos2 != "" && pos3 != ""){
       if(pos1 === pos2 && pos2 === pos3){
        console.log(`${pos1} is a winner`);
       wname(pos1);
       }
       }
    }
}
 rebtn.addEventListener("click",restarbtn);
 newgame.addEventListener("click",restarbtn);