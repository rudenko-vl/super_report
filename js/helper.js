// const label1 = document.getElementById("item1");
// const checkbox1 = document.getElementById("checkbox1");

// const label2 = document.getElementById("item2");
// const checkbox2 = document.getElementById("checkbox2");

// const label3 = document.getElementById("item3");
// const checkbox3 = document.getElementById("checkbox3");

// const label4 = document.getElementById("item4");
// const checkbox4 = document.getElementById("checkbox4");

// label1.addEventListener("click", () => {
//     checkbox1.checked = !checkbox1.checked;
// });

// label2.addEventListener("click", () => {
//     checkbox2.checked = !checkbox2.checked;
// });

// label3.addEventListener("click", () => {
//     checkbox3.checked = !checkbox3.checked;
// });


// label4.addEventListener("click", () => {
//     checkbox4.checked = !checkbox4.checked;
// });

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const myButton = document.getElementById('done_btn');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        const atLeastOneChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);
        myButton.disabled = !atLeastOneChecked;
    });
});
