let userScore = 0;
let compScore = 0;
let msg = document.getElementById('msg');
const choices = document.querySelectorAll(".choice");

const genCompChoice = () =>{
    const option =["stone","paper","scissor"];
    const ranIdx = Math.floor(Math.random()*3);
    return option[ranIdx];
};
const drawGame = () => {
    msg.style.color="orange";
    msg.innerHTML = "Game was draw";
};

const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        document.getElementById("user-score").innerHTML=userScore;
        msg.style.color="green";
        msg.innerHTML = "You Won";
    } else{
        compScore++;
        document.getElementById("comp-score").innerHTML= compScore;
        msg.style.color="red";
        msg.innerHTML = "Computer Won";
        
    }
};

const playGame = (userChoice) =>{
const compChoice = genCompChoice ();

if (userChoice === compChoice){
    drawGame();
} else {
    let userWin = true;
    if (userChoice = "stone"){
        userWin = compChoice === "paper" ? false :true;
    } else if (userChoice = "paper"){
        userWin = compChoice === "scissor" ? false :true ;
    } else {
        userWin = compChoice === "stone" ? false : true ;
    }
    showWinner(userWin);
}
};

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        
    });
});