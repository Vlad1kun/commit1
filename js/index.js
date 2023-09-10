const arrow = document.querySelector(".arrow1")
const otvet = document.querySelector(".otvet1")

const arrow2 = document.querySelector(".arrow2")
const otvet2 = document.querySelector(".otvet2")

const arrow3 = document.querySelector(".arrow3")
const otvet3 = document.querySelector(".otvet3")

const arrow4 = document.querySelector(".arrow4")
const otvet4 = document.querySelector(".otvet4")

const burger = document.querySelector(".burger")
const meny = document.querySelector(".mobileMeny")

const close = document.querySelector(".close")



arrow.addEventListener("click", () => {
    otvet.classList.toggle("otvetActive")
})

arrow2.addEventListener("click", () => {
    otvet2.classList.toggle("otvetActive")
})

arrow3.addEventListener("click", () => {
    otvet3.classList.toggle("otvetActive")
})

arrow4.addEventListener("click", () => {
    otvet4.classList.toggle("otvetActive")
})

burger.addEventListener("click", () => {
    meny.classList.add("menu-maiActive")
})

close.addEventListener("click", () => {
    meny.classList.remove("menu-maiActive")
})