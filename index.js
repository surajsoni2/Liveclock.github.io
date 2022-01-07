menu=document.getElementById("menu-items")
var count = 0;
function showMenu() {
    if (count%2 == 0) {
        menu.classList.add("show");
        console.log("menu opened");
    }
    else{
        menu.classList.remove("show");
    }
    count=count+1;
}
let a;
let display;

//most suitable method
setInterval(() => {
    display= new Date().toLocaleTimeString();   
    document.getElementById("mytime").innerHTML=display; 
}, 1000);

// var audio = document.getElementById("sounds");
// function sound() {
//     audio.play();
// }
var audio = new Audio();
audio.src = "clock-ticking.mp3";
