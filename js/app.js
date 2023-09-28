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

const getSecondText = () => {
    spinner2.classList.remove("visually-hidden");
    setTimeout(() => {
        spinner2.classList.add("visually-hidden");
        txt2.classList.remove("visually-hidden");
        if (randomText === 'Всё ок, никто не виноват!') {
            txt2.textContent = 'С кем ты хочешь разобраться? :)'
        }
        else {
            txt2.textContent = 'Проведена работа с нарушителем. Ошибка больше не повторится!';
        }
    }, 2000)
}



const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn-2");
const txt = document.querySelector(".text");
const txt2 = document.querySelector(".text-2");
const spinner = document.querySelector(".spinner");
const spinner2 = document.querySelector(".spinner-2");

const setText = () => {
    txt.textContent = ''
    txt2.classList.add("visually-hidden");
    btn2.classList.add("visually-hidden");
    setTimeout(() => {
        spinner.classList.add("visually-hidden");
    }, 3000)
    setTimeout(() => {
        txt.textContent = randomText;
        btn2.classList.remove("visually-hidden");
    }, 3200)
}

btn.addEventListener("click", () => {
    getRandomText()
    spinner.classList.remove("visually-hidden");
    setText()
});

btn2.addEventListener("click", () => {
    getSecondText()
});