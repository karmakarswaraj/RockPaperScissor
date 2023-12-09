let userScore = 0;
let compScore = 0;

const userscored = document.querySelector("#user-score");
const compscored = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msgText = document.querySelector("#msg");

const genCompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const i = Math.floor(Math.random() * 3);
    return options[i];
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoiceid = choice.getAttribute("id");
        playgame(userchoiceid);
    });
});

const gameDraw = () => {
    msgText.innerText = "Its a tie";
    msgText.style.backgroundColor = "#8059b3";
}

const gameWin = (userchoiceid,compchoices) => {
    msgText.innerText = `You Win :( Your ${userchoiceid} beats ${compchoices}`;
    userscored.innerText = ++userScore;
    msgText.style.backgroundColor = "green";
}

const gameLost = (userchoiceid,compchoices) => {
    msgText.innerText = `You Lose :( ${compchoices} beats your ${userchoiceid}`;
    compscored.innerText = ++compScore;
    msgText.style.backgroundColor = "red";
}

const playgame = (userchoiceid) => {
    const compchoices = genCompchoice();


    // console.log(userchoiceid);
    // console.log(compchoices);
    let UserWin = false;

    if (compchoices === userchoiceid) {
        gameDraw();
    }
    else {
        if (userchoiceid === "paper" && compchoices === "rock") {
            gameWin(userchoiceid, compchoices);
        } else if (userchoiceid === "scissors" && compchoices === "paper") {
            gameWin(userchoiceid, compchoices);
        } else if (userchoiceid === "rock" && compchoices === "scissors") {
            gameWin(userchoiceid, compchoices);
        } else {
            gameLost(userchoiceid, compchoices);
        }
    }
};



