let refMenuBtn = document.querySelector(".menuAltImage")

let refNav = document.querySelector("nav")

let refLinks = document.querySelectorAll("a")

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



    
