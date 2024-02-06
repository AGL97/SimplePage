const refMenuBtn = document.querySelector(".menuAltImage");

const refNav = document.querySelector("nav");

const refLinks = document.querySelectorAll("nav div a");

const refBody = document.querySelector("body");

refMenuBtn.addEventListener("click",function () {
    refNav.classList.toggle("navAlt")
})


window.addEventListener("resize",function () {    
    if(this.document.body.clientWidth>720)
    {
        refNav.classList.remove("navAlt"); 
    }
})


refLinks.forEach(i => {
    i.addEventListener("click",function () {
        refNav.classList.toggle("navAlt")
         
    })
});


// document.querySelector(".contedorBarra").addEventListener("mousemove",(event) => 
// {
//     var ancho = event.offsetX;
//     if(ancho<0)
//     {
//         ancho = 0;
//     }
//     else if (ancho>499) {
//         ancho = 498;
//     } 
//     document.querySelector(".barra").style.width = ancho + "px";
// })



    
