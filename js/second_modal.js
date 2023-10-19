const refs = {
    openModalBtn2: document.querySelector(".tooltip"),
    backdrop2: document.querySelector(".backdrop2"),
    modal2: document.querySelector("[data-modal2]"),
};

const total2 = document.querySelector(".second-counter");

(() => {
    refs.openModalBtn2.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal2.classList.toggle("is-hidden");
        let reportCounter = localStorage.getItem("currentCounter2");
        let word;

        if (reportCounter % 10 === 1 && reportCounter % 100 !== 11) {
            word = "раз";
        } else if (reportCounter % 10 >= 2 && reportCounter % 10 <= 4 && (reportCounter % 100 < 10 || reportCounter % 100 >= 20)) {
            word = "раза";
        } else {
            word = "раз";
        }
        if (!reportCounter) {
            total2.textContent = 'Вы еще не строили этот отчёт!'
        }
        else {
            total2.textContent = `Вы проверили ${reportCounter} ${word}, сколько раз строили Отчет №2`;
        }
    }
})();

window.addEventListener("click", closeModal);
window.addEventListener("keydown", closeModal);

function closeModal(ev) {
    if (ev.target === refs.backdrop2 || ev.keyCode === 27) {
        refs.backdrop2.classList.add("is-hidden");
    }
}