import { first, two, three } from "./questions.js";

const box = document.getElementById('test_container');
box.innerHTML = first;
let step = 0;

box.addEventListener('click', (event) => {
    const target = event.target.closest('.correct');
    if (!target) return;

    target.style.color = 'green';
    let option = localStorage.getItem("action") || '?'

    const workers = JSON.parse(localStorage.getItem('culprits'))
    const lastElement = workers.pop()
    const final = `<h1 class="last-title">Вы успешно прошли тест!</h1>
        <h2 class="last_info">Действие "${option}" с ${lastElement} будет выполнено</h2>
         <a class="nav-link test-link" href="./index.html">На главную страницу</a>
        `
    const arr = [first, two, three, final]
    setTimeout(() => {
        step++
        box.innerHTML = arr[step];
    }, 1000)
})

box.addEventListener('click', (event) => {
    const target = event.target.closest('.uncorrect');
    if (!target) return;
    target.style.color = 'red';
    setTimeout(() => {
        box.innerHTML = `<h1 class="main-test_title">Вы не прошли тест!</h1>
        <a class="nav-link test-link" href="./">Строить новый отчет</a>
        `
    }, 1000)
})
box.addEventListener('click', (event) => {
    const target = event.target.closest('.uncorrect2');
    if (!target) return;
    target.style.color = 'red';
    setTimeout(() => {
        box.innerHTML = `<h1 class="main-test_title">Вы не прошли тест!</h1>
        <a class="nav-link test-link" href="./">Строить новый отчет</a>
        `
    }, 1000)
})
