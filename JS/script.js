const catogrey = document.querySelectorAll(".catogrey span");
let catogreySelect;

catogrey.forEach((span) => {
    span.onclick = () => {
        catogrey.forEach((el) => {
            el.classList.remove("check");
        });
        span.classList.add("check");
    }
});