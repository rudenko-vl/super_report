(() => {
    const refs = {
        openMenuBtn: document.querySelector("[data-menu-open]"),
        closeMenuBtn: document.querySelector("[data-menu-close]"),
        menu: document.querySelector("[data-menu]"),
    };
    const result2 = document.getElementById('report2-result');
    const input = document.getElementById('rep2');

    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.menu.classList.toggle("is-open");
        result2.classList.add("visually-hidden");
        input.checked = false;
    }
})();