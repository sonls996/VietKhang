var menuExit = document.getElementById("menu-exit");
var menuRight = document.querySelector(".menu-right");
var menuOpen = document.querySelector("  .pay_bar");

menuOpen.addEventListener("click", function () {
    console.log("okkk")
    menuRight.classList.add("diquatrai");
    menuRight.classList.remove("diquaphai");
})

menuExit.addEventListener("click", function () {
    menuRight.classList.add("diquaphai");
    menuRight.classList.remove("diquatrai");
})