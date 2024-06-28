var LoginForm = document.getElementById("LoginForm");
var RegForm =   document.getElementById("RegForm");
var Indiactor = document.getElementById("Indicator");
function register(){
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indiactor.style.transform = "translateX(100px)";
}
function login(){
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indiactor.style.transform = "translateX(0px)";
}