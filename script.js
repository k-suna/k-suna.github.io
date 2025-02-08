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

    document.addEventListener("DOMContentLoaded", () => {
        const images = document.querySelectorAll(".research-images img");
        const fullscreenView = document.querySelectorAll(".fullscreen");
        const fullscreenImg = document.querySelectorAll(".fullscreen img");
    
        images.forEach(img => {
        img.addEventListener("click", () => {
            fullscreenImg.src = img.src;  // クリックした画像のURLを設定
            // 画像が設定された後、少し遅延させてactiveクラスを追加
            setTimeout(() => {
                fullscreenView.classList.add("active");
            }, 10); // 10msの遅延でアニメーションを発火
        });
    });
    
        fullscreenView.addEventListener("click", () => {
            fullscreenView.classList.remove("active");
        });
    });
});
