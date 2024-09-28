let userscore = 0;
let compscore = 0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random() * 3);
    return options[ranIdx];
};
const dreawGame=()=>{
    console.log("game was draw");
    msg.innerText = "Match Was Draw";
    msg.style.backgroundColor = "rgb(2, 2, 84)";
}
const showWinner=(userWin,userchoice,compChoice)=>{
   if(userWin){
    userscore++;
    userScorePara.innerText = userscore;
    console.log("You Win");
    msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`
    msg.style.backgroundColor = "green";
   }  
   else{
    compscore++;
    compScorePara.innerText = compscore;
    console.log("You Loss");
    msg.innerText = `You lost. ${compChoice} beats your ${userchoice}`
    msg.style.backgroundColor = "red";
   }
}
const playgame=(userchoice)=>{
    console.log("user choice = ",userchoice)
    const compChoice=genCompChoice();
    console.log("compChoice = ", compChoice)

    if(userchoice === compChoice)
       {dreawGame();}
    else {
        let userWin = true;
        if(userchoice === "rock"){
            userWin=compChoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userWin=compChoice === "scissors" ? false : true;
        }
        else{
            userWin=compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userchoice,compChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playgame(userchoice);
    })
})