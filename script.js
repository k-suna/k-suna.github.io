document.addEventListener("DOMContentLoaded", () => {
    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const menuButton = document.querySelector(".hamburger-menu");
        const navList = document.querySelector(".navbar ul");

        menuButton.addEventListener("click", function () {
            navList.classList.toggle("open"); // 開閉の切り替え
        });
    });
});
