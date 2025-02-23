

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            340: {
                slidesPerView: 2,
            },
            540: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 10,
                spaceBetween: 10,
            },
        },
    });
});


// ///////////////////////////////









document.addEventListener("DOMContentLoaded", function () {
    var swiperFourth = new Swiper(".marketing-swiper-fourth", {
        slidesPerView: 1,  
        spaceBetween: 50,  
        loop: true,  
        navigation: {
            nextEl: ".marketing-next-fourth",
            prevEl: ".marketing-prev-fourth",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true, 
        },
        grabCursor: true,  
        breakpoints: {
            1200: { slidesPerView: 1 },
            992: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
        },
        on: {
            slideChangeTransitionStart: function () {
                console.log("Slayd dəyişdi, cari index: ", this.realIndex);
            }
        }
    });
});


// ///////////////

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiperSixth", {
        slidesPerView: 3,  
        spaceBetween: 20, 
        loop: true,
        navigation: {
            nextEl: ".mySwiperSixth-button-next",
            prevEl: ".mySwiperSixth-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,

            },
        }
    });
});
