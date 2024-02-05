let refMenuBtn = document.querySelector(".menuAltImage");

let refNav = document.querySelector("nav");

let refLinks = document.querySelectorAll("navOpt");

let refBody = document.querySelector("body");

refMenuBtn.addEventListener("click",function () {
    refNav.classList.toggle("navAlt")
    refBody.classList.toggle("bodyBlur")  
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
        refBody.classList.toggle("bodyBlur")
         
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



    
