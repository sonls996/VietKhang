var menuExit = document.getElementById("menu-exit");
    menuRight = document.querySelector(".menu-right"),
    menuOpen = document.querySelector("  .pay_bar"),
    toggleSearch = document.querySelector(".pay_search"),
    modalSearch = document.querySelector(".modal-search");

menuOpen.addEventListener("click", function () {
    console.log("okkk")
    menuRight.classList.add("diquatrai");
    menuRight.classList.remove("diquaphai");
})

menuExit.addEventListener("click", function () {
    menuRight.classList.add("diquaphai");
    menuRight.classList.remove("diquatrai");
})

toggleSearch.addEventListener("click", function () {
    console.log("okk");
    modalSearch.classList.toggle('tg-search');
})