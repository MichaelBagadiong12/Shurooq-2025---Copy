const messages = [
    "I love you so much baby",
    "Have a nice day cutie",
    "You deserve the world",
    "My baby and my everything"
]

let i = 0;
const text = document.getElementById("scroll-message");
const content = document.querySelector(".scrolling-content");

if (content && text){
    content.addEventListener("animationiteration", () => {
        i = (i + 1) % messages.length;
        text.textContent = messages[i];
    });
}


window.onload = function() {
    let welcomeScreen = document.getElementById("welcomeScreen");
    let mainContent = document.getElementById("mainContent")
    let timeLeft = 5; //Countdown seconds before the main content shows

let timer = setInterval(function(){
    timeLeft--;

    if (timeLeft <= 0) {
        clearInterval(timer);

        //fadeout animation after the welcome screen ends
        welcomeScreen.classList.add("fade-out");

        setTimeout(() => {
            welcomeScreen.style.display = "none";
            mainContent.style.display = "block";
            mainContent.classList.add("fade-in");
        },1000);
    }
    }, 1000);
};

