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


// or

// newdiv = document.createElement("div"); 
// bdy=document.getElementById("mytime");
// bdy.appendChild(newdiv);
// newdiv.onload=displayClock()

// function displayClock(){
//     var display = new Date().toLocaleTimeString();
//     newdiv.innerHTML = display;
//     setTimeout(displayClock, 1000); 
// }
// 
// displayClock();

