var img = document.getElementById("gallery-img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var images = ["mario3.png", "ai.png", "astro-bot.png", "violin.png", "yoshi.png", "violin-bow.png", "pc.png", "bike.png", "bike-lock.png", "cycling-helmet.png", "hurling-helmet.png", "hurley.png", "gaelic-football.png", "link.png", "monitor.png", "mouthguard.png", "mr-krabs.png", "music-notes.png"]

var currentimage = 0;

function changeimage(e) {
    if (e.target.id == "next" && currentimage !== images.length - 1){
        currentimage = currentimage + 1;
    }
    
    


if (e.target.id == "prev" && currentimage !== 0) {

    currentimage = currentimage - 1;
}

img.setAttribute("src", "images/" + images[currentimage]);

}




prev.addEventListener("click", changeimage)
next.addEventListener("click", changeimage)