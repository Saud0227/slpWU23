const menuToggle = document.getElementById("menu-toggle");
const siteNavigation = document.getElementById("primary-navigation");

menuToggle.addEventListener("click", () => {
    let isOpened = menuToggle.getAttribute('aria-expanded') === "true";

    if (isOpened ? closeMenu() : openMenu());
});



function openMenu() {
    menuToggle.setAttribute('aria-expanded', 'true');
    siteNavigation.setAttribute("data-state", "opened");
}

function closeMenu() {
    menuToggle.setAttribute('aria-expanded', 'false');
    siteNavigation.setAttribute("data-state", "closing");

    siteNavigation.addEventListener("animationend",() => {
        siteNavigation.setAttribute('data-state', 'closed');
    }, {once:true});
}