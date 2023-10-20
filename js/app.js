import { workers } from "./employes.js";

let randomText = '';

const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * workers.length);
    randomText = workers[randomIndex];
    const namesArray = JSON.parse(localStorage.getItem('culprits')) || [];
    const fullName = randomText.substring(8);
    const words = fullName.split(' ');
    const name = words[0] + ' ' + words.slice(1).map(function (word) {
        return word.charAt(0) + '.';
    }).join(' ');

    if (name == "никто н. в.") {
        namesArray.push('Никто не виноват');
        return
    }
    else {
        namesArray.push(name)
        localStorage.setItem('culprits', JSON.stringify(namesArray));
    }

    return randomText;
}

const getSecondText = () => {
    btn4.disabled = true;
    btn4.classList.add("disabled_btn");
    txt2.classList.remove("visually-hidden");
    if (randomText === 'Всё ок, никто не виноват!') {
        txt2.classList.remove("visually-hidden");
        btn2.classList.add("visually-hidden");
        txt2.textContent = 'С кем ты хочешь разобраться? 😎'
    } else {
        txt3.classList.remove("visually-hidden");
        btn4.classList.remove("visually-hidden");
        btn2.classList.add("visually-hidden");
        txt2.textContent = 'Что Вы хотите сделать?'
    }
}


const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
const txt = document.querySelector(".text");
const txt2 = document.querySelector(".text-2");
const txt3 = document.querySelector(".text-3");
const last_text = document.querySelector(".last-text");
const spinner = document.querySelector(".spinner");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

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
    btn4.classList.add("visually-hidden");
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

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        const atLeastOneChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);
        btn4.disabled = !atLeastOneChecked;
        if (atLeastOneChecked) {
            btn4.classList.remove("disabled_btn");
        } else {
            btn4.classList.add("disabled_btn");
        }
    });
});

btn4.addEventListener("click", () => {
    btn.classList.add("visually-hidden");
    txt2.classList.add("visually-hidden");
    txt3.classList.add("visually-hidden");
    btn4.classList.add("visually-hidden");
    txt.classList.add("visually-hidden");
    spinner.classList.remove("visually-hidden");
    setTimeout(() => {
        spinner.classList.add("visually-hidden");
        last_text.classList.remove("visually-hidden");
        btn3.classList.remove("visually-hidden");
    }, 1000)
});


