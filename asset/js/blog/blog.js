const blogs = [
    {
        id: 1,
        image: "https://admin.thejavachip.com/storage/posts/September2022/w0Qk70AxR1qKEtxLsUkk.jpg",
        name: "Mobil  Biznesinizə 6 Əsas Faydası ",
        categories: ["Mobile"],
    },
    {
        id: 2,
        image: "https://admin.thejavachip.com/storage/posts/September2022/PZ2nCYC496FOAyKFal7F.jpg",
        name: "SEO  9 Addımda SEO haqqında ilkin anlayışlara sahib ol ",
        categories: ["Seo"]
    },
    {
        id: 3,
        image: "https://admin.thejavachip.com/storage/posts/September2022/BFH0dXZwtz7OujyvzbB0.jpg",
        name: "10 Məşhur vebsayt növü",
        categories: ["VebSite"]
    },
    {
        id: 4,
        image: "https://admin.thejavachip.com/storage/posts/September2022/G8kVpj806KhgbLVJ9hZh.jpg",
        name: " işləyən çatbot nədir? ",
        categories: ["Suniintelekt"]
    },
    {
        id: 5,
        image: "https://admin.thejavachip.com/storage/posts/November2022/gvU79977OWRyDkoZACzD.jpg",
        name: " Restoran üçün vebsaytın vacibliyini göstərən 6 səbəb ",
        categories: ["VebSite"]
    },
    {
        id: 6,
        image: "https://admin.thejavachip.com/storage/posts/November2022/TouQycpafAwIA0Yb8Ld6.jpg",
        name: "Hostinq nədir? Veb Hosting nə üçün istifadə edilir?",
        categories: ["VebSite"]
    },
    {
        id: 7,
        image: "https://admin.thejavachip.com/storage/posts/November2022/mhTKloZH0gasuxYxKlYx.jpg",
        name: "ERP sistemi nədir? ",
        categories: ["Mobile"]
    },
    {
        id: 8,
        image: "https://admin.thejavachip.com/storage/posts/November2022/NDIwphf3W5V9oeXs7Ezl.jfif",
        name: "Komputer Proqramlaşdırması nədir?",
        categories: ["Mobile"]
    },
    
];


const blogRow = document.getElementById("blogRow");
const categorySelect = document.getElementById("categoryFilter");

// 🔹 **1. Kateqoriyaları avtomatik doldur**
const categories = ["All", ...new Set(blogs.flatMap(blog => blog.categories))]; // Unikal kateqoriyalar
categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
});

function displayBlogs(filteredBlogs) {
    blogRow.innerHTML = "";
    filteredBlogs.forEach(blog => {
        const blogWrapper = document.createElement("div");
        blogWrapper.className = "circle-container-blog";
        const shortName = blog.name.length > 30 ? blog.name.substring(0, 30) + "..." : blog.name;
        blogWrapper.innerHTML = `
            <a href="./blogDetail.html?id=${blog.id}" class="blog-link">
                <div class="circle-blog">
                    <img src="${blog.image}" alt="${blog.name}" />
                </div>
                <p class="circle-text-blog">${shortName}</p>
            </a>
        `;
        blogRow.appendChild(blogWrapper);
    });
}

categorySelect.addEventListener("change", () => {
    const selectedCategory = categorySelect.value;
    const filteredBlogs = selectedCategory === "All" ? blogs : blogs.filter(blog => blog.categories.includes(selectedCategory));
    displayBlogs(filteredBlogs);
});

displayBlogs(blogs);