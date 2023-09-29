const refs = {
    openModalBtn: document.querySelector(".tooltip-button"),
    backdrop: document.querySelector(".backdrop"),
    modal: document.querySelector("[data-modal]"),
};
const total = document.querySelector(".counter");

(() => {
    refs.openModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        let reportCounter = localStorage.getItem("currentCounter");
        let word;

        if (reportCounter % 10 === 1 && reportCounter % 100 !== 11) {
            word = "раз";
        } else if (reportCounter % 10 >= 2 && reportCounter % 10 <= 4 && (reportCounter % 100 < 10 || reportCounter % 100 >= 20)) {
            word = "раза";
        } else {
            word = "раз";
        }
        if (!reportCounter) {
            total.textContent = 'Вы еще не строили этот отчёт!'
        }
        else {
            total.textContent = `Вы построили отчёт ${reportCounter} ${word}`;
        }
    }
})();

window.addEventListener("click", closeModal);
window.addEventListener("keydown", closeModal);

function closeModal(ev) {
    if (ev.target === refs.backdrop || ev.keyCode === 27) {
        refs.backdrop.classList.add("is-hidden");
    }
}