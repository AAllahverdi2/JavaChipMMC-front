document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".animate__animated");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.classList.add(entry.target.dataset.animation);
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1, 
        }
    );

    animatedElements.forEach((element) => {
        element.style.opacity = "0"; 
        observer.observe(element);
    });
});
