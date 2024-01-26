let refMenuBtn = document.querySelector(".menuAltImage")

let refNav = document.querySelector("nav")

let refLinks = document.querySelectorAll("a")

refMenuBtn.addEventListener("click",function () {
    refNav.classList.toggle("navAlt")    
})

window.addEventListener("resize",function () {
    var size = this.document.body.clientWidth;
    if(size>720)
    {
        refNav.classList.remove("navAlt"); 
    }
})

refLinks.forEach(i => {
    i.addEventListener("click",function () {
        refNav.classList.toggle("navAlt")  
    })
});



    
