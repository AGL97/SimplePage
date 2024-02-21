
const refSendButton = document.querySelector(".buttonSubmit");
const refFullNameLabel = document.querySelector(".fullNameLabel");
const refEmailLabel = document.querySelector(".emailLabel");
const refInputName = document.querySelector(".inputName");
const refInputEmail = document.querySelector(".inputEmail");
const refChangeButtonAuthType  = document.querySelector(".auxButton.change");
const refCleanForms  = document.querySelector(".auxButton.clean");


let fullName = null;
let email = null;

refInputName.addEventListener("input",()=>
{
    fullName =  refInputName.value;    
})

refInputEmail.addEventListener("input",validate)

function validate()
{
    if(refInputEmail.value.substring(refInputEmail.value.indexOf("@")+1) !="gmail.com")
    {
        refInputEmail.setCustomValidity("Inserte un correo perteneciente a gmail");
        return false;
    }
    else
    {
        refInputEmail.setCustomValidity("");
        email =  refInputEmail.value
        return true;
    }
}

refSendButton.addEventListener("click",()=>{
    if(validate())
    {
        refFullNameLabel.textContent = fullName;
        refEmailLabel.textContent = email;
    }
})

refChangeButtonAuthType.addEventListener("click",()=>{
    var type = refSendButton.type
    if(type=="reset")
    {
        refSendButton.type = "submit";
    }
    else
    {
        refSendButton.type = "reset";
    }
    
})

refCleanForms.addEventListener("click",()=>
{
    refInputName.value  = null;
    refInputEmail.value  = null;
    refFullNameLabel.textContent="Full Name"
    refEmailLabel.textContent="Email"
})