let menuAlt = document.querySelector(".menuAlt");
let opcionesAlt =  document.querySelector(".OpcioneAlt");
let linkAltt =  document.querySelectorAll(".OpcioneAlt > a");
let visible = false;

menuAlt.addEventListener("click",function()
{    
    if(!visible)
    {
        opcionesAlt.style.display="flex";
        linkAltt.forEach(element => {
            element.addEventListener("click",function () {
                element.style.display="block";            
            })})
        visible = true;
    }
    else
    {
        opcionesAlt.style.display="none";
        linkAltt.forEach(element => {
            element.addEventListener("click",function () {
                element.style.display="none";            
            })})
        visible = false;
    }
});

linkAltt.forEach(element => {
    var t2 = document.querySelectorAll(".OpcioneAlt > a");
    t2.forEach(element => {
        element.addEventListener("click",function () {
        opcionesAlt.style.display = "none";     
     })
    });
    
});



window.addEventListener("resize",function () {
    if(document.body.clientWidth>480)
    {
        linkAltt.forEach(element => {
            element.addEventListener("click",function () {
                element.style.display="none";            
            })})
        visible = false;
    }
    
});