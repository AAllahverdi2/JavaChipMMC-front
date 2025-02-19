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

const urlParams = new URLSearchParams(window.location.search);
const blogId = parseInt(urlParams.get("id"));

const blog = blogs.find(b => b.id === blogId);

if (blog) {
    document.getElementById("blogImage").src = blog.image;
    document.getElementById("blogTitle").textContent = blog.name;
    document.getElementById("blogDescription").textContent = blog.description;
    document.getElementById("blogCategories").textContent = blog.categories.join(", ");
} else {
    document.body.innerHTML = "<h1>Blog tapılmadı!</h1><a href='index.html'>Geri qayıt</a>";
}
