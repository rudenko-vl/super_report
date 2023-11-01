import { questions } from "./questions.js";

const box = document.getElementById('test_container');
let option = localStorage.getItem("action");

const first = `
<h1 class="main-test_title">Подтвердите, что Вы не робот!</h1>
<h2 class="test_title">${questions[0].title}</h2>
    <img class="test_img" src=${questions[0].img} alt=${questions[0].alt}>
     <ul class="list test_list ">
        <li class="correct1">${questions[0].variants[0]}</li>
        <li class="uncorrect1">${questions[0].variants[1]}</li>
        <li class="uncorrect2">${questions[0].variants[2]}</li>
    </ul>
`
box.innerHTML = first;

const two = `
<h2 class="test_title">${questions[1].title}</h2>
    <img class="test_img" src=${questions[1].img} alt=${questions[1].alt}>
     <ul class="list test_list ">
        <li class="uncorrect3">${questions[1].variants[0]}</li>
        <li class="correct2">${questions[1].variants[1]}</li>
        <li class="uncorrect4">${questions[1].variants[2]}</li>
    </ul>
`
const three = `
<h2 class="test_title">${questions[2].title}</h2>
    <img class="test_img" src=${questions[2].img} alt=${questions[2].alt}>
     <ul class="list test_list ">
        <li class="uncorrect5">${questions[2].variants[0]}</li>
        <li class="uncorrect6">${questions[2].variants[1]}</li>
        <li class="correct3">${questions[2].variants[2]}</li>
    </ul>
`
// ===============================
box.addEventListener('click', (event) => {
    const target = event.target.closest('.correct1');
    if (!target) return;

    target.style.color = 'green';
    setTimeout(() => {
        box.innerHTML = two;
    }, 1000)
})
box.addEventListener('click', (event) => {
    const target = event.target.closest('.uncorrect1');
    if (!target) return;
    target.style.color = 'red';
    setTimeout(() => {
        box.innerHTML = `<h1 class="main-test_title">Вы не прошли тест!</h1>`
    }, 1000)
})
box.addEventListener('click', (event) => {
    const target = event.target.closest('.uncorrect2');
    if (!target) return;
    target.style.color = 'red';
    setTimeout(() => {
        box.innerHTML = `<h1 class="main-test_title">Вы не прошли тест!</h1>`
    }, 1000)
})
// ==================================
box.addEventListener('click', (event) => {
    const target = event.target.closest('.correct2');
    if (!target) return;
    target.style.color = 'green';
    setTimeout(() => {
        box.innerHTML = three;
    }, 1000)
})
box.addEventListener('click', (event) => {
    const target = event.target.closest('.uncorrect3');
    if (!target) return;
    target.style.color = 'red';
    setTimeout(() => {
        box.innerHTML = `<h1 class="main-test_title">Вы не прошли тест!</h1>`
    }, 1000)
})
box.addEventListener('click', (event) => {
    const target = event.target.closest('.uncorrect4');
    if (!target) return;
    target.style.color = 'red';
    setTimeout(() => {
        box.innerHTML = `<h1 class="main-test_title">Вы не прошли тест!</h1>`
    }, 1000)
})
// ===============================
box.addEventListener('click', (event) => {
    const target = event.target.closest('.correct3');
    if (!target) return;

    target.style.color = 'green';
    setTimeout(() => {
        box.innerHTML = `<h1>Вы успешно прошли тест!</h1>
        <h2 class="last_info">Действие "${option}" будет выполнено</h2>
         <a class="nav-link test-link" href="./index.html">На главную страницу</a>
        `
    }, 1000)
})
box.addEventListener('click', (event) => {
    const target = event.target.closest('.uncorrect5');
    if (!target) return;
    target.style.color = 'red';
    setTimeout(() => {
        box.innerHTML = `<h1 class="main-test_title">Вы не прошли тест!</h1>`
    }, 1000)
})
box.addEventListener('click', (event) => {
    const target = event.target.closest('.uncorrect6');
    if (!target) return;
    target.style.color = 'red';
    setTimeout(() => {
        box.innerHTML = `<h1 class="main-test_title">Вы не прошли тест!</h1>`
    }, 1000)
})


