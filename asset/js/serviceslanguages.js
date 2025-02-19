const websiteTranslations = {
    az: {
        websiteTitle: "Vebsaytların hazırlanması",
        websiteDescription: `Bir biznes sahibi olaraq müştərilərinizi cəlb etmək və brendinizi tanıtmaq üçün müasir və funksional vebsaytın vacibliyini bilirsiniz. Doğru vebsayt sizə rəqiblərinizdən fərqlənməyə və satışlarınızı artırmağa kömək edə bilər. Vebsayt potensial müştərilərə nə etdiyiniz, şirkətinizlə necə əlaqə quracaqları və məhsul və ya xidmətlərinizi necə satın alacaqları barədə məlumat verir. Veb sayt brendinq və marketinq strategiyasının vacib hissəsidir.`
    },
    en: {
        websiteTitle: "Website Development",
        websiteDescription: `As a business owner, you know the importance of having a modern and functional website to attract customers and promote your brand. The right website can help you stand out from your competitors and increase your sales. A website informs potential customers about what you do, how to contact your company, and how to purchase your products or services. A website is an essential part of branding and marketing strategy.`
    },
    ru: {
        websiteTitle: "Разработка веб-сайтов",
        websiteDescription: `Как владелец бизнеса, вы знаете, как важно иметь современный и функциональный веб-сайт для привлечения клиентов и продвижения вашего бренда. Правильный веб-сайт поможет вам выделиться среди конкурентов и увеличить продажи. Веб-сайт информирует потенциальных клиентов о вашей деятельности, способах связи с вашей компанией и способах приобретения ваших продуктов или услуг. Веб-сайт является важной частью брендинга и маркетинговой стратегии.`
    }
};

function changeWebsiteLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);

    const elements = document.querySelectorAll("[data-key]");
    elements.forEach((element) => {
        const key = element.getAttribute("data-key");
        if (websiteTranslations[lang] && websiteTranslations[lang][key]) {
            element.textContent = websiteTranslations[lang][key];
        }
    });
}

// Səhifə yüklənəndə dili tətbiq et
document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem('selectedLanguage') || 'az';  // Default olaraq Azərbaycan dili
    changeWebsiteLanguage(savedLang);
});
