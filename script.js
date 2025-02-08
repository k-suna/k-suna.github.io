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

    // ハンバーガーメニューの開閉
    const menuButton = document.querySelector(".hamburger-menu");
    const navList = document.querySelector(".navbar ul");

    menuButton.addEventListener("click", function () {
        navList.classList.toggle("open"); // 開閉の切り替え
    });

    // 画像をクリックしたらポップアップで表示
    const images = document.querySelectorAll(".research-images img");
    const overlay = document.getElementById("overlay");
    const popupImg = document.getElementById("popup-img");

    images.forEach(image => {
        image.addEventListener("click", (e) => {
            overlay.style.display = "flex";  // ポップアップを表示
            popupImg.src = e.target.src;    // クリックした画像のソースをポップアップ画像に設定
        });
    });

    // ポップアップを閉じる
    const closeBtn = document.getElementById("close-btn");
    closeBtn.addEventListener("click", () => {
        overlay.style.display = "none";  // ポップアップを非表示
    });
});


// document.addEventListener("DOMContentLoaded", () => {
//     const navbarLinks = document.querySelectorAll(".navbar a");

//     navbarLinks.forEach(link => {
//         link.addEventListener("click", (event) => {
//             event.preventDefault();
//             const targetId = link.getAttribute("href").substring(1);
//             const targetSection = document.getElementById(targetId);
            
//             window.scrollTo({
//                 top: targetSection.offsetTop - 50,
//                 behavior: "smooth"
//             });
//         });
//     });

//     document.addEventListener("DOMContentLoaded", function () {
//         const menuButton = document.querySelector(".hamburger-menu");
//         const navList = document.querySelector(".navbar ul");

//         menuButton.addEventListener("click", function () {
//             navList.classList.toggle("open"); // 開閉の切り替え
//         });
//     });

//     // document.addEventListener("DOMContentLoaded", () => {
//     //     const images = document.querySelectorAll(".research-images img");
//     //     const fullscreenView = document.querySelector(".fullscreen");  // 単一要素を取得
//     //     const fullscreenImg = document.querySelector(".fullscreen img");  // 単一要素を取得
    
//     //     // 画像クリック時
//     //     images.forEach(img => {
//     //         img.addEventListener("click", () => {
//     //             fullscreenImg.src = img.src;  // クリックした画像のURLを設定
    
//     //             // 画像が設定された後、少し遅延させてactiveクラスを追加
//     //             setTimeout(() => {
//     //                 fullscreenView.classList.add("active");
//     //             }, 10); // 10msの遅延でアニメーションを発火
//     //         });
//     //     });
    
//     //     // 全画面表示をクリックしたときに閉じる
//     //     fullscreenView.addEventListener("click", () => {
//     //         fullscreenView.classList.remove("active");
//     //     });
//     // });
// });
