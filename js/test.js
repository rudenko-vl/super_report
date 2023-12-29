
const btn2 = document.querySelector(".btn-4");

btn2.addEventListener("click", () => {
    let option = localStorage.getItem("action") || '?'

    const workers = JSON.parse(localStorage.getItem('culprits'))
    const lastElement = workers.pop()
    const hitList = JSON.parse(localStorage.getItem('hitlist')) || [];
    if (option === 'Расстрелять!') {
        hitList.push(lastElement)
        localStorage.setItem('hitlist', JSON.stringify(hitList));
    }
});

