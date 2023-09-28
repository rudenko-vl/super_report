const texts = [
    "Всё ок, никто не виноват!",
    "Виноват Беленок Юрій Васильович",
    "Виноват Борисенко Андрій Вікторович",
    "Виноват Верес Олег Юзефович",
    "Виноват Делегей Олександр Володимирович",
    "Виноват Іванов Сергій Олександрович",
    "Виноват Маштепа Ростислав Борисович",
    "Виноват Пастушенко Сергій Євгенович",
    "Виноват Уланов Олексій Володимирович",
    "Виноват Труш Микола Миколайович"
];
let randomText = ''
const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * texts.length);
    randomText = texts[randomIndex];
    return randomText;
}



const btn = document.querySelector(".btn");
const txt = document.querySelector(".text");
const spinner = document.querySelector(".spinner");

const setText = () => {
    txt.textContent = ''
    setTimeout(() => {
        spinner.classList.add("visually-hidden");
    }, 3000)
    setTimeout(() => {
        txt.textContent = randomText;
    }, 3200)
}

btn.addEventListener("click", () => {
    getRandomText()
    spinner.classList.remove("visually-hidden");
    setText()
});