let headerBannerImg = document.querySelector(".header__banner-img")
window.addEventListener("mousemove", function (e) {
    // headerCloud.forEach(clouds => {
        const speed = +headerBannerImg.getAttribute("data-speed");

        headerBannerImg.style.transform = `translateX(${e.pageX * speed / 100}px)`
    // })
})

let bg4 = document.querySelector(".bg4")
window.addEventListener("mousemove", function (e) {
        const speed = +bg4.getAttribute("data-speed");
        bg4.style.transform = `translateX(${e.pageX * speed / 100}px)`
})
let NavMenu = document.querySelector(".nav__menu")
let NavBurger = document.querySelector(".nav__burger")

NavBurger.addEventListener("click", function() {
    NavMenu.classList.toggle("active")
})
