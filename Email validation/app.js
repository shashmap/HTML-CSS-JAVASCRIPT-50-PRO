let input = document.getElementById("inputbox");

input.addEventListener("keydown", validate);

function validate(){
let form = document.querySelector(".mainform")    
let pattern =/^[^]+@[^]+\.[a-z]{2,3}$/;

if (input.ariaValueMax.match(pattern)){
    form.classList.add("valid");
form.classList.remove("invalid");
}else{
    form.classList.add("invalid");
    form.classList.remove("valid");
}

}