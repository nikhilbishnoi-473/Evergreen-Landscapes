// const about_us =document.querySelectorAll(".about_us")
// about_us.forEach(e => e.addEventListener("click"), () => {
//     document.body.classList.remove("overflow_hidden")
//     document.getElementById("navbar").classList.toggle("start-0")
//     document.querySelector(".menu").classList.toggle("cross")
// })
function openNav() {
    document.getElementById("navbar").classList.toggle("start-0")
    document.body.classList.toggle("overflow_hidden")
    document.querySelector(".menu").classList.toggle("cross")

}
    
const mytimeout = setTimeout(layout,3000)
function  layout()
{
    document.getElementById("preloader").classList.remove("image")
    document.getElementById("img").style.display ="none"
}

