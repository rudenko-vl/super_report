const input = document.getElementById('rep2');
const result2 = document.getElementById('report2-result');


input.addEventListener("click", () => {
    result2.classList.toggle("visually-hidden");
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

