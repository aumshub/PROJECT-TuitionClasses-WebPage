console.log("js running...");

let menu = document.querySelector(".hamburger-menu");
let fullScr = document.querySelector("#full-scr");
let navImg = document.querySelector("nav img");
let fullDivLinks = document.querySelectorAll("#full-div1 a");
let flag = true;

function closeMenu() {
    console.log("Closing menu");
    fullScr.style.top = "-100%";
    navImg.style.opacity = "1";
    menu.classList.remove('active');
    console.log("Active class removed:", !menu.classList.contains('active'));
    flag = true;
}
function openMenu() {
    console.log("Opening menu");
    fullScr.style.top = "0";
    navImg.style.opacity = "0";
    menu.classList.add('active');
    console.log("Active class added:", menu.classList.contains('active'));
    flag = false;
}

menu.addEventListener("click",()=>{
    if(flag == true){
        openMenu()
    }else{
        closeMenu()
        
    }
});

fullDivLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});


fullScr.addEventListener("click", (e) => {
    // e.target is what was actually clicked
    // If the click was directly on fullScr (overlay) and not its children
    if (e.target === fullScr) {
        closeMenu();
    }
});