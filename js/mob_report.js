const repBtn2 = document.getElementById('rep2');
const hideBtn = document.getElementById('hide');
const result2 = document.getElementById('report2-result');


repBtn2.addEventListener("click", () => {
    result2.classList.remove("visually-hidden");
    hideBtn.classList.remove("visually-hidden");
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
        result2.textContent = 'Вы еще не строили этот отчёт!'
    }
    else {
        result2.textContent = `Вы построили отчёт ${reportCounter} ${word}`;
    }

});

hideBtn.addEventListener("click", () => {
    result2.classList.add("visually-hidden");
    hideBtn.classList.add("visually-hidden");

});
