let score = 0;

const gameScreen = document.getElementById("gameScreen");
const questionScreen = document.getElementById("questionScreen");
const envelopeScreen = document.getElementById("envelopeScreen");
const letterScreen = document.getElementById("letterScreen");

const gameArea = document.getElementById("gameArea");
const heartButton = document.getElementById("heartButton");

const scoreText = document.getElementById("score");
const gameMessage = document.getElementById("gameMessage");

function moveHeart() {

    const maxX = gameArea.clientWidth - 50;
    const maxY = gameArea.clientHeight - 50;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    heartButton.style.left = randomX + "px";
    heartButton.style.top = randomY + "px";
}

heartButton.addEventListener("click", function () {

    score++;

    scoreText.textContent =
        "♡ Hearts caught: " + score + " / 3";

    if (score === 1) {

        gameMessage.textContent =
            "Yay! You caught one! 💕";

        moveHeart();

    } else if (score === 2) {

        gameMessage.textContent =
            "Two already! One more! ♡";

        moveHeart();

    } else {

        gameMessage.textContent =
            "You caught them all! 💜";

        heartButton.style.display = "none";

        setTimeout(function () {

            gameScreen.classList.add("hidden");
            questionScreen.classList.remove("hidden");

        }, 1000);
    }
});

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const answerMessage = document.getElementById("answerMessage");


let noClicks = 0;

noButton.addEventListener("click", function () {

    noClicks++;

    const newSize = Math.min(16 + (noClicks * 4), 70);

    const newPadding = Math.min(
        14 + (noClicks * 3),
        55
    );

    noButton.style.fontSize = newSize + "px";

    noButton.style.padding =
        newPadding + "px " + (newPadding + 10) + "px";

    if (noClicks === 1) {

        answerMessage.textContent =
            "Hmm... are you sure? 🥺";

    } else if (noClicks === 2) {

        answerMessage.textContent =
            "Think about it again... 💜";

    } else if (noClicks === 3) {

        answerMessage.textContent =
            "The button is getting suspicious... 😭";

    } else if (noClicks === 4) {

        answerMessage.textContent =
            "You really want to click no? 🥹";

    } else {

        answerMessage.textContent =
            "Okayyy... maybe Yes is easier? ♡";
    }

});

yesButton.addEventListener("click", function () {

    answerMessage.textContent =
        "YAYYYYY! 💜 I knew it!";

    yesButton.disabled = true;
    noButton.disabled = true;

    setTimeout(function () {

        questionScreen.classList.add("hidden");

        envelopeScreen.classList.remove("hidden");

    }, 1200);

});

const openLetterButton =
    document.getElementById("openLetterButton");

const envelope =
    document.getElementById("envelope");


function openLetter() {

    envelope.classList.add("opened");

    setTimeout(function () {

        envelopeScreen.classList.add("hidden");

        letterScreen.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 700);

}


openLetterButton.addEventListener(
    "click",
    openLetter
);

envelope.addEventListener(
    "click",
    openLetter
);

moveHeart();