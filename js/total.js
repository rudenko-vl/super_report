const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".tooltip-button");
const superBtn = document.querySelector(".super-button");
let index = 0;
const texts = [
    "Не нажимай сюда!",
    "Не нажимай! Что не понятно?",
    "НЕ НАЖИМАЙ!",
    "Нехуй делать?",
    "НЕ НАЖИМАЙ СЮДА, 🤬!"
];

superBtn.addEventListener('click', () => {
    alert(texts[index]);
    index = (index + 1) % texts.length;
})

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
