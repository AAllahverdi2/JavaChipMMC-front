const portfolioTranslations = {
    az: {
        // portfolio: "Portfolio",
        // horecaTitle: "Horeca",
        // horecaDescription: "Təmizlik sektorunda qabaqcıl şirkətlərdən olan \"Horeca\" şirkəti üçün veb sayt hazırladıq.",
        // more: "Ətraflı",
        // webDevelopment: "Veb inkişafı",
        // wideTravelTitle: "Wide Travel",
        // wideTravelDescription: "Azərbaycanda turizm brendi olan \"Wide Travel\" şirkəti üçün veb sayt hazırladıq.",
        // avtobusTitle: "Avtobus",
        // avtobusDescription: "Sərnişin daşımaçılıq sahəsində qabaqcıl şirkətlərdən olan \"Avtobus\" şirkətinə back-end xidmətimizi göstərdik.",
        // azstandartTitle: "Azstandart Service",
        // azstandartDescription: "Standartlaşdırma və patentləşdirmə şirkəti olan “Azstandart Service” üçün vebsayt hazırladıq.",
        // azunivetTitle: "Azunivet",
        // azunivetDescription: "Baytarlıq üçün məhsulların inkişafı və ixracı ilə məşğul olan \"Azunivet\" şirkəti üçün veb sayt hazırladıq.",
        // chevikTitle: "Chevik",
        // chevikDescription: "Çevik.az üçün hazırladığımız vebsayt.",
        // preneoTitle: "ProNeo",
        // preneoDescription: "\"ProNeo Industrial Engineering\" şirkəti üçün hazırladığımız vebsayt.",
        // veteransOrganizationTitle: "Azərbaycan Respublikası Müharibə, Əmək və Silahlı Qüvvələr Veteranları Təşkilatı",
        // veteransOrganizationDescription: "Azərbaycan Respublikası Müharibə, Əmək və Silahlı Qüvvələr Veteranları Təşkilatı üçün vebsayt hazırladıq.",
        // adbtiaTitle: "Azərbaycan Dövlət Bədən Tərbiyəsi və İdman Akademiyası",
        // adbtiaDescription: "\"Azərbaycan Dövlət Bədən Tərbiyəsi və İdman Akademiyası\" üçün radio vebsaytı hazırladıq."



    },
    en: {
        // portfolio: "Portfolio",
        // horecaTitle: "Horeca",
        // horecaDescription: "We have developed a website for \"Horeca\", one of the leading companies in the cleaning sector.",
        // more: "More",
        // webDevelopment: "Web development",
        // wideTravelTitle: "Wide Travel",
        // wideTravelDescription: "We have developed a website for \"Wide Travel\", a tourism brand in Azerbaijan.",
        // avtobusTitle: "Avtobus",
        // avtobusDescription: "We provided back-end services to \"Avtobus\", one of the leading companies in passenger transportation.",
        // azstandartTitle: "Azstandart Service",
        // azstandartDescription: "We have developed a website for \"Azstandart Service\", a company specializing in standardization and patenting.",
        // azunivetTitle: "Azunivet",
        // azunivetDescription: "We have developed a website for \"Azunivet\", a company engaged in the development and export of veterinary products.",
        // chevikTitle: "Chevik",
        // chevikDescription: "The website we developed for Chevik.az.",
        // preneoTitle: "ProNeo",
        // preneoDescription: "The website we developed for \"ProNeo Industrial Engineering\".",
        // veteransOrganizationTitle: "Azerbaijan Republic War, Labor, and Armed Forces Veterans Organization",
        // veteransOrganizationDescription: "We have developed a website for the Azerbaijan Republic War, Labor, and Armed Forces Veterans Organization.",
        // adbtiaTitle: "Azerbaijan State Academy of Physical Education and Sports",
        // adbtiaDescription: "We have developed a radio website for the \"Azerbaijan State Academy of Physical Education and Sports.\""



    },
    ru: {
        // portfolio: "Портфолио",
        // horecaTitle: "Horeca",
        // horecaDescription: "Мы разработали веб-сайт для компании \"Horeca\", одного из ведущих предприятий в сфере уборки.",
        // more: "Подробнее",
        // webDevelopment: "Веб-разработка",
        // wideTravelTitle: "Wide Travel",
        // wideTravelDescription: "Мы разработали веб-сайт для туристического бренда \"Wide Travel\" в Азербайджане.",
        // avtobusTitle: "Автобус",
        // avtobusDescription: "Мы предоставили услуги по разработке back-end для компании \"Автобус\", одного из ведущих предприятий в сфере пассажирских перевозок.",
        // azstandartTitle: "Azstandart Service",
        // azstandartDescription: "Мы разработали веб-сайт для компании \"Azstandart Service\", занимающейся стандартизацией и патентованием.",
        // azunivetTitle: "Azunivet",
        // azunivetDescription: "Мы разработали веб-сайт для компании \"Azunivet\", занимающейся разработкой и экспортом ветеринарных продуктов.",
        // chevikTitle: "Chevik",
        // chevikDescription: "Веб-сайт, который мы разработали для Chevik.az.",
        // preneoTitle: "ProNeo",
        // preneoDescription: "Веб-сайт, который мы разработали для компании \"ProNeo Industrial Engineering\".",
        // veteransOrganizationTitle: "Организация ветеранов войны, труда и вооруженных сил Азербайджанской Республики",
        // veteransOrganizationDescription: "Мы разработали веб-сайт для Организации ветеранов войны, труда и вооруженных сил Азербайджанской Республики.",
        // adbtiaTitle: "Азербайджанская Государственная Академия Физической Культуры и Спорта",
        // adbtiaDescription: "Мы разработали радио-вебсайт для \"Азербайджанской Государственной Академии Физической Культуры и Спорта\"."



    }
};


// function changePortfolioLanguage(lang) {
//     localStorage.setItem('portfolioLanguage', lang); // Fərqli açar istifadə edildi

//     const elements = document.querySelectorAll("[data-key]");
//     elements.forEach((element) => {
//         const key = element.getAttribute("data-key");
//         if (portfolioTranslations[lang] && portfolioTranslations[lang][key]) {
//             element.textContent = portfolioTranslations[lang][key];
//         }
//     });
// }

// // Səhifə yüklənəndə dili tətbiq et
// document.addEventListener("DOMContentLoaded", function () {
//     const savedLang = localStorage.getItem('portfolioLanguage') || 'az';  // Default olaraq az
//     changePortfolioLanguage(savedLang);
// });
