let choices = [];
let selectedChoice;
let intervalId;
let showPlayAgain = false;

document.getElementById("add-choice-btn").addEventListener("click", function () {
    let choiceContainer = document.getElementById("choices-container");
    let choiceInput = document.createElement("input");
    choiceInput.setAttribute("type", "text");
    choiceInput.setAttribute("placeholder", "Choice...");
    choiceContainer.appendChild(choiceInput);
});


document.getElementById("spin-btn").addEventListener("click", function () {
    let choiceInputs = document.querySelectorAll("#choices-container input");
    for (let i = 0; i < choiceInputs.length; i++) {
        if (choiceInputs[i].value) {
            choices.push(choiceInputs[i].value);
        }
    }
    if (choices.length < 2) {
        dialog.style.display = "block";

    } else {
        document.getElementById("spin-box").style.display = "block";
        intervalId = setInterval(function () {
            document.getElementById("choice").innerHTML = choices[Math.floor(Math.random() * choices.length)];
        }, 100);
        setTimeout(function () {
            clearInterval(intervalId);
            intervalId = setInterval(function () {
                document.getElementById("choice").innerHTML = choices[Math.floor(Math.random() * choices.length)];
            }, 250);
        }, 5000);

        setTimeout(function () {
            if (showPlayAgain === false) {
                showPlayAgain = true;
                document.getElementById("play-again-btn").style.display = "block";
            }
            clearInterval(intervalId);
            selectedChoice = choices[Math.floor(Math.random() * choices.length)];
            document.getElementById("choice").innerHTML = selectedChoice;
            console.log("The selected choice is: " + selectedChoice);
            document.getElementById("spin-box").innerHTML = "The Selected Choice is: ";
            const playAgainBtn = document.createElement("play-again-btn");
            playAgainBtn.innerHTML = "Play Again";
            playAgainBtn.addEventListener("click", reloadPage);
            dialog.appendChild(playAgainBtn);
            playAgainDialog.style.display = "block";

        }, 10000);

    }
});




const dialog = document.getElementById("alert-dialog");
const okBtn = document.getElementById("ok-btn");
okBtn.addEventListener("click", reloadPage);
const spinBtn = document.getElementById("spin-btn");
spinBtn.addEventListener("click", spinChoices);
const choicesContainer = document.createElement("div");
dialog.appendChild(choicesContainer);
const playAgainDialog = document.getElementById("play-again-dialog");
const playAgainBtn = document.getElementById("play-again-btn");
playAgainBtn.addEventListener("click", reloadPage);

function playAgain() {
    reloadPage();
    playAgainDialog.style.display = "none";
}
playAgainBtn.addEventListener("click", playAgain);


function reloadPage() {
    window.location.reload();
}
function spinChoices() {

    if (choices.length < 2) {
        dialog.style.display = "block";
    } else {
        // code for spinning the choices
    }
}


const addChoiceBtn = document.getElementById("add-choice-btn");
const choice = document.getElementById("choices-form");
const form = document.getElementById("choices-form");




addChoiceBtn.addEventListener("click", function () {
    document.querySelector('input[type="text"]:last-of-type').focus();
});
form.onkeydown = function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        addChoiceBtn.click();
        document.querySelector('input[type="text"]:last-of-type').focus();
    }
};