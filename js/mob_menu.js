(() => {
    const refs = {
        openMenuBtn: document.querySelector("[data-menu-open]"),
        closeMenuBtn: document.querySelector("[data-menu-close]"),
        menu: document.querySelector("[data-menu]"),
    };
    const result2 = document.getElementById('report2-result');
    const hideBtn = document.getElementById('hide');

    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.menu.classList.toggle("is-open");
        result2.classList.add("visually-hidden");
        hideBtn.classList.add("visually-hidden");
    }
})();