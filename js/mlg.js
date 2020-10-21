var colours = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"];
var colour = 0;
var textcolour = 1;

//change background and text colour
window.setInterval(function() {
    $('body').css('background-color', colours[colour]);
    $('.desc-holder-text').css('color', colours[textcolour]);
    textcolour++;
    if (textcolour == 7) {
        textcolour = 0;
    }
    colour++;
    if (colour == 7){
        colour = 0;
    }
}, 1000);

//random title for each page load
var titles = ["1v1 me noob", "GETSHREKTM8", "get noscoped", "time of death: 4:20:69", "SAMPLE TEXT", "OHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH", "DOWNLOAD DEDICATED WAM!!!", "Smoke Weed Everyday"];
document.title = titles[Math.floor(Math.random() * 8)];