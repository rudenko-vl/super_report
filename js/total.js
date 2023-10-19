const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".tooltip-button");

let reportCounter = localStorage.getItem("currentCounter");

let counter = !reportCounter ? 0 : reportCounter;

btn.addEventListener("click", () => {
    counter++
    localStorage.setItem("currentCounter", counter);
});


let reportCounter2 = localStorage.getItem("currentCounter2");

let counter2 = !reportCounter2 ? 0 : reportCounter2;

btn2.addEventListener("click", () => {
    counter2++
    localStorage.setItem("currentCounter2", counter2);
});
