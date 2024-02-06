const refManzanita = document.querySelector(".manzanita");
const refSideBar = document.querySelector(".sideBar")
const refSecciones =  document.querySelector(".sideBar .secciones")




refManzanita.addEventListener("click",()=>
{
refSideBar.classList.toggle("showSideBar")
refSecciones.classList.toggle("showSecciones")
})

refSecciones.addEventListener("mouseleave",()=>
{
refSideBar.classList.toggle("showSideBar")
refSecciones.classList.toggle("showSecciones")
})