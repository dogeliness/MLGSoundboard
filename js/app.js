window.addEventListener('keydown', function(event) {
    const audio = event.key;
    if (!audio) {
        return;
    } else {
        processPlay(event.key);
    }
});

function processPlay(audio) {
    if (audio == "a" || audio == "A") {
        new Audio("./sounds/2SED4AIRHORN.mp3").play();
    } else if (audio == "s" || audio == "S") {
        new Audio("./sounds/AIRHORN_SONATA.mp3").play();
    } else if (audio == "d" || audio == "D") {
        new Audio("./sounds/GET_NOSCOPED.mp3").play();
    } else if (audio == "f" || audio == "F") {
        new Audio("./sounds/HITMARKER.mp3").play();
    } else if (audio == "g" || audio == "G") {
        new Audio("./sounds/MOM_GET_THE_CAMERA.mp3").play();
    } else if (audio == "h" || audio == "H") {
        new Audio("./sounds/NEVER_DONE_THAT.mp3").play();
    } else if (audio == "j" || audio == "J") {
        new Audio("./sounds/OH_BABY_A_TRIPLE.mp3").play();
    } else if (audio == "k" || audio == "K") {
        new Audio("./sounds/OOOOOOOOHMYGOOOOD.mp3").play();
    } else if (audio == "l" || audio == "L") {
        new Audio("./sounds/SANIC.mp3").play();
    } else if (audio == "z" || audio == "Z") {
        new Audio("./sounds/SHOTS_FIRED.mp3").play();
    } else if (audio == "x" || audio == "X") {
        new Audio("./sounds/TACTICAL_NUKE.mp3").play();
    } else if (audio == "c" || audio == "C") {
        new Audio("./sounds/WOW.mp3").play();
    } 
}