const btn = document.querySelector(".btn");

let reportCounter = localStorage.getItem("currentCounter");

let counter = !reportCounter ? 0 : reportCounter;

btn.addEventListener("click", () => {
    counter++
    localStorage.setItem("currentCounter", counter);
});

