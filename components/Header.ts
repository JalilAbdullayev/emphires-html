export const Header = (): string => {
    return `<section class="flex justify-between text-sm font-semibold leading-[50px] px-9 border-b border-[#ffffff21]">
<div class="flex">
    <div class="flex items-center border-x border-[#ffffff21] px-4">
        <a href="mailto:">
            <i class="fa-solid fa-envelope-open-text text-[#0AADEB] mr-3"></i> Email Address : info@emphires.com
        </a>
    </div>
<div class="flex items-center border-e border-[#ffffff21] px-4">
    <i class="fa-solid fa-map-location-dot mr-3 text-[#0AADEB]"></i> Office Address : 12 Tottina, NY, USA
</div>
</div>
<div class="flex">
    <div class="border-x border-[#ffffff21] px-4 flex gap-8">
        <a href="" class="mx-1">
            <i class="fa-brands fa-square-facebook"></i>
        </a>
        <a href="" class="mx-1">
            <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a href="" class="mx-1">
            <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="" class="mx-1">
            <i class="fa-brands fa-youtube"></i>
        </a>
    </div>
    <div>
        <button class="mx-4">
        <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    </div>
</div>
</section>
<section class="px-12 flex justify-between items-center border-b border-[#ffffff21] tracking-wider h-28 duration-500" id="navbar">
<a href="/">
    <img src="/public/logo-white.svg" alt="" class="max-h-14"/>
</a>
<div class="flex gap-8 font-extrabold [&>a:hover]:text-[#0AADEB] [&>a:hover]:duration-500">
    <a href="">
        Home
    </a>
    <a href="">
        Pages
    </a>
    <a href="">
        Services
    </a>
    <a href="">
        Projects
    </a>
    <a href="">
        Blog
    </a>
    <a href="">
        Contact Us
    </a>
</div>
<div class="flex justify-between gap-3">
    <i class="fa-regular fa-comments text-5xl text-[#0AADEB]"></i>
    <div>
        <div class="mb-1">
            Have any Questions?
        </div>
        <a href="tel:" class="mb-1">
            +0 123 456 789
        </a>
    </div>
</div>
</section>`;
}
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        document.querySelector<HTMLDivElement>('#navbar').classList.add('sticky-header');
        document.querySelector<HTMLDivElement>('#navbar').querySelector('img').src = '/public/logo.svg';
    } else {
        document.querySelector<HTMLDivElement>('#navbar').classList.remove('sticky-header');
        document.querySelector<HTMLDivElement>('#navbar').querySelector('img').src = '/public/logo-white.svg';
    }
})