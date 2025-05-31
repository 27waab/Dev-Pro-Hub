const sign = document.querySelector(".card-sing"), log = document.querySelector(".card-log");
const loginBtn = document.querySelector(".logBtn"), noAcc = document.querySelector(".singBtn"), btnSave = document.querySelector(".save"), have = document.querySelector(".have");
const inputUserNameLog = document.querySelector(".card-log .userName"), inputPasswordLog = document.querySelector(".card-log .pass");
const inputUserNameSing = document.querySelector(".card-sing .userName"), inputPasswordSing = document.querySelector(".card-sing .pass");
let users = [];

// Show And Hide The Sing Card
noAcc.addEventListener("click", () => {
    sign.classList.add("open");
    log.classList.remove("open");
});
have.addEventListener("click", () => {
    log.classList.add("open");
    sign.classList.remove("open");
});