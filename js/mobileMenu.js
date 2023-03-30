const menuToggle = document.getElementById("menu-toggle");
const siteNavigation = document.getElementById("primary-navigation");

menuToggle.addEventListener("click", () => {
    let isOpened = menuToggle.getAttribute('aria-expanded') === "true";

    if  (isOpened){
        menuToggle.setAttribute('aria-expanded', 'false');
    } else {
        menuToggle.setAttribute('aria-expanded', 'true');
    }

    // menuToggle.classList.toggle('open');
    // siteNavigation.classList.toggle('site-nav--open');
});