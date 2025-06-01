const sign = document.querySelector(".card-sing"), log = document.querySelector(".card-log");
const loginBtn = document.querySelector(".logBtn"), noAcc = document.querySelector(".singBtn"), btnSave = document.querySelector(".save"), have = document.querySelector(".have");
const logUser = document.querySelector(".card-log .userName"), logPass = document.querySelector(".card-log .pass");
const singUser = document.querySelector(".card-sing .userName"), signPass = document.querySelector(".card-sing .pass");
const alertMsg = document.querySelector(".modal-body");

let users = JSON.parse(localStorage.getItem("users")) || [];

// Show And Hide The Sing Card
noAcc.addEventListener("click", () => {
    sign.classList.add("open");
    log.classList.remove("open");
});
have.addEventListener("click", () => {
    log.classList.add("open");
    sign.classList.remove("open");
});

const saveInLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const loginUser = () => {
    if (logUser.value !== "" && logPass.value !== "") {
        const username = logUser.value.trim();
        const password = logPass.value;
        const matchedUser = users.find(user => user.name === username && user.pass === password);
        if (matchedUser) {
            localStorage.setItem("activeUser", username);
            alertMsg.innerHTML = `مرحبا`;
            logUser.value = "";
            logPass.value = "";
            window.location.href = "home.html";
        } else {
            alertMsg.innerHTML = "اسم المستخدم أو كلمة المرور غير صحيحة";
        }
    } else {
        alertMsg.innerHTML = "الرجاء ملء كل الحقول";
    }
}

const addUser = () => {
    if (singUser.value !== "" && signPass.value !== "") {
        const username = singUser.value.trim();
        const password = signPass.value;
        const usernameExists = users.some(user => user.name === username);
        if (usernameExists) {
            alertMsg.innerHTML = "يوجد أسم مستخدم بالفعل بهذا الإسم";
        } else {
            const user = {
                name: username,
                pass: password,
                projects: [],
            }
            users.push(user);
            saveInLocalStorage("users", users);
            singUser.value = "";
            signPass.value = "";
            alertMsg.innerHTML = "تم تسجيلك بنجاح";
        }
    } else {
        alertMsg.innerHTML = "الرجاء كتابة أسم المستخدم وكلمة المرور";
    }
}

btnSave.addEventListener("click", addUser);
loginBtn.addEventListener("click", loginUser);
