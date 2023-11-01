import { first, two, three } from "./questions.js";

const box = document.getElementById('test_container');
let option = localStorage.getItem("action");
box.innerHTML = first;

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
        box.innerHTML = `<h1 class="main-test_title">Вы не прошли тест!</h1>
        <a class="nav-link test-link" href="./test.html">Попробовать ещё</a>
        `
    }, 1000)
})
box.addEventListener('click', (event) => {
    const target = event.target.closest('.uncorrect2');
    if (!target) return;
    target.style.color = 'red';
    setTimeout(() => {
        box.innerHTML = `<h1 class="main-test_title">Вы не прошли тест!</h1>
        <a class="nav-link test-link" href="./test.html">Попробовать ещё</a>
        `
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
        box.innerHTML = `<h1 class="main-test_title">Вы не прошли тест!</h1>
        <a class="nav-link test-link" href="./test.html">Попробовать ещё</a>
        `
    }, 1000)
})
box.addEventListener('click', (event) => {
    const target = event.target.closest('.uncorrect4');
    if (!target) return;
    target.style.color = 'red';
    setTimeout(() => {
        box.innerHTML = `<h1 class="main-test_title">Вы не прошли тест!</h1>
        <a class="nav-link test-link" href="./test.html">Попробовать ещё</a>
        `
    }, 1000)
})
// ===============================
box.addEventListener('click', (event) => {
    const target = event.target.closest('.correct3');
    if (!target) return;

    target.style.color = 'green';
    setTimeout(() => {
        box.innerHTML = `<h1 class="last-title">Вы успешно прошли тест!</h1>
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
        box.innerHTML = `<h1 class="main-test_title">Вы не прошли тест!</h1>
        <a class="nav-link test-link" href="./test.html">Попробовать ещё</a>
        `
    }, 1000)
})
box.addEventListener('click', (event) => {
    const target = event.target.closest('.uncorrect6');
    if (!target) return;
    target.style.color = 'red';
    setTimeout(() => {
        box.innerHTML = `<h1 class="main-test_title">Вы не прошли тест!</h1>
        <a class="nav-link test-link" href="./test.html">Попробовать ещё</a>
        `
    }, 1000)
})


