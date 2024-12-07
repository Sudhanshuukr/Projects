let title = document.getElementById("title");
let signUp = document.getElementById("sign-up");
let signIn = document.getElementById("sign-in");
let nameField = document.getElementById("nameField");

signIn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "sign In";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}

signUp.onclick = function(){
    nameField.style.maxHeight = "60px";
    title.innerHTML = "sign Up";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
}