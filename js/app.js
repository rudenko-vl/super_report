import { workers } from "./employes.js";

let randomText = '';

const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * workers.length);
    randomText = workers[randomIndex];
    const namesArray = JSON.parse(localStorage.getItem('names')) || [];
    namesArray.push(randomText.substring(8))
    localStorage.setItem('names', JSON.stringify(namesArray));

    return randomText;
}

const getSecondText = () => {
    const name = randomText.substring(8);
    const content = `Проведена работа с ${name} 🚑`
    spinner.classList.remove("visually-hidden");
    setTimeout(() => {
        spinner.classList.add("visually-hidden");
        txt2.classList.remove("visually-hidden");
        txt3.classList.remove("visually-hidden");
        btn3.classList.remove("visually-hidden");
        if (randomText === 'Всё ок, никто не виноват!') {
            txt2.textContent = 'С кем ты хочешь разобраться? 😎'
            txt3.textContent = ''
        }
        else {
            txt2.textContent = content;
            txt3.textContent = 'Ошибка больше не повторится!';
        }
    }, 2000)
    txt.classList.add("visually-hidden");
    btn2.classList.add("visually-hidden");
}



const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const txt = document.querySelector(".text");
const txt2 = document.querySelector(".text-2");
const txt3 = document.querySelector(".text-3");
const spinner = document.querySelector(".spinner");

const setText = () => {
    txt.textContent = ''
    txt2.classList.add("visually-hidden");
    txt3.classList.add("visually-hidden");
    btn2.classList.add("visually-hidden");
    btn3.classList.add("visually-hidden");
    setTimeout(() => {
        spinner.classList.add("visually-hidden");
    }, 1000)
    setTimeout(() => {
        txt.textContent = randomText;
        btn2.classList.remove("visually-hidden");
    }, 1200)
}

btn.addEventListener("click", () => {
    txt.classList.remove("visually-hidden");
    getRandomText()
    spinner.classList.remove("visually-hidden");
    setText()
});

btn2.addEventListener("click", () => {
    getSecondText()
});

btn3.addEventListener("click", () => {
    location.reload();
});
