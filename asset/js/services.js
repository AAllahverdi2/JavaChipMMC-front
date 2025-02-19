// Şəhər sekmesini açma funksiyası
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    // Bütün tabcontent elementlərini gizlət
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Bütün tablinks-dən "active" sinfini sil
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Seçilən şəhəri göstər və düyməni aktiv et
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Səhifə yükləndikdə London sekmesini aç
window.onload = function () {
    openCity(null, 'Veb');
    document.querySelector(".tablinks").classList.add("active");
};
