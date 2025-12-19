let boxes=document.querySelectorAll(".box");
let resetButton=document.getElementById("reset");
let newGameButton=document.getElementById("new-game");
let messageContainer=document.querySelector(".msg-container");
let messageText=document.getElementById("message");
let turn0=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame=()=>{
    turn0=true;
    enableboxes();
    messageContainer.classList.add("hide");
};
const enableboxes=()=>{
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }};

const disableboxes=()=>{
    for(box of boxes)
    {
        box.disabled=true;
    }};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0)
        {
            box.innerText="O";
            turn0=false;
        }
        else
        {
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWin();
    })
});
const showWinner=(winner)=>{
    disableboxes();
    messageText.innerText=`${winner} Wins!`;
    messageContainer.classList.remove("hide");
};
const checkWin=()=>{
    for(pattern of winPatterns)
    {
     let pos1=boxes[pattern[0]].innerText;
     let pos2=boxes[pattern[1]].innerText;
     let pos3=boxes[pattern[2]].innerText;  

     if(pos1!="" && pos2!="" && pos3!="")
     {
        if(pos1==pos2 && pos2==pos3)
        {
            console.log("Winner", pos1);
            showWinner(pos1);
        }
     }
    }};
resetButton.addEventListener("click",resetGame);
newGameButton.addEventListener("click",resetGame);