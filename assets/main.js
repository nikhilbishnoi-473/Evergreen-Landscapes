function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross")
}
    
const mytimeout = setTimeout(layout,3000)
function  layout()
{
    document.getElementById("preloader").classList.remove("image")
    document.getElementById("img").style.display ="none"
}

