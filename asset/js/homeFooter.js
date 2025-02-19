document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelector(".icons-social-links");
    let angle = 0;

    function rotateIcons() {
        angle += 0.5;
        icons.style.transform = `rotate(${angle}deg)`;
        requestAnimationFrame(rotateIcons);
    }

    rotateIcons();
});
