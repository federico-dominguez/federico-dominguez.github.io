function toggleDropdown() {
    let navbar = document.getElementById("navbar-nav");
    navbar.classList.toggle("responsive");
}

document.addEventListener("DOMContentLoaded", () => {
    const navDropdown = document.querySelector(".nav-dropdown");

    navDropdown.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleDropdown();
    });

    document.addEventListener("click", (event) => {
        const navbarNav = document.getElementById("navbar-nav");
        if (!navbarNav.contains(event.target) && navbarNav.classList.contains("responsive")) {
            navbarNav.classList.remove("responsive");
        }
    });
});
