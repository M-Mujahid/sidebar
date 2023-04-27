var sidebarIcon = document.querySelector(".sidebarIcon");
var sideBar = document.querySelector(".sideBar");
var close = document.querySelector(".close");
var children = sidebarIcon.children
console.log(children);

sidebarIcon.addEventListener("click", () => {
    sideBar.classList.remove("showSidebar");
    sideBar.style.transition = "all 1s";
    children.classList.remove("fa-solid fa-bars")
})

close.addEventListener("click", () => {
    sideBar.classList.add("showSidebar");
    sideBar.style.transition = "all 1s"
})