export const Header = (): string => {
    return `<nav class="flex justify-between text-sm font-semibold leading-[50px] px-9 border-b border-[#ffffff21] max-xl:hidden">
    <div class="flex">
        <div class="flex items-center border-x border-[#ffffff21] px-4">
            <a href="mailto:">
                <i class="fa-solid fa-envelope-open-text text-primary mr-3"></i> Email Address : info@emphires.com
            </a>
        </div>
    <div class="flex items-center border-e border-[#ffffff21] px-4">
        <i class="fa-solid fa-map-location-dot mr-3 text-primary"></i> Office Address : 12 Tottina, NY, USA
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
</nav>
<nav class="px-12 flex justify-between items-center border-b border-[#ffffff21] tracking-wider h-28 duration-500" id="navbar">
    <a href="/" class="shrink-0">
        <img src="${window.location.pathname === '/' ? '/public/logo-white.svg' : '/public/logo.svg'}" alt="" class="max-h-14"/>
    </a>
    <div class="flex gap-8 font-extrabold [&>a:hover]:text-[#0AADEB] [&>a:hover]:duration-500 max-xl:opacity-0 max-xl:hidden">
        <a href="/" class="${window.location.pathname === '/' ? 'text-primary' : ''}">
            Home
        </a>
        <a href="/about.html" class="${window.location.pathname === '/about.html' ? 'text-primary' : ''}">
            About Us
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
        <a href="/contact.html" class="${window.location.pathname === '/contact.html' ? 'text-primary' : ''}">
            Contact Us
        </a>
    </div>
    <div class="flex justify-between gap-3 max-xl:hidden">
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
<i class="fa-solid fa-bars xl:hidden text-4xl cursor-pointer" id="mobile-button"></i>
</nav>
<div class="relative">
    <nav class="bg-white border-t-4 border-[#0AADEB] opacity-0 pointer-events-none transform -translate-y-full transition-all ease-in-out fixed top-[16.5%] z-50 w-full" id="mobile-nav">
        <ul class="[&>li]:text-[#0C121D] [&>li]:py-2.5 [&>li]:px-4 [&>li]:border-b border-[#09162a26] [&>li]:font-extrabold duration-500">
            <li>
                <a href="/" class="${window.location.pathname === '/' ? 'text-primary' : ''}">
                    Home
                </a>
            </li>
            <li>
                <a href="/about.html" class="${window.location.pathname === '/about.html' ? 'text-primary' : ''}">
                    About Us
                </a>
            </li>
            <li>
                <a href="">
                    Services
                </a>
            </li>
            <li>
                <a href="">
                    Projects
                </a>
            </li>
            <li>
                <a href="">
                    Blog
                </a>
            </li>
            <li>
                <a href="/contact.html" class="${window.location.pathname === '/contact.html' ? 'text-primary' : ''}">
                    Contact Us
                </a>
            </li>
        </ul>
    </nav>
</div>`;
}
document.addEventListener('DOMContentLoaded', () => {
    const mobile = document.querySelector<HTMLSpanElement>('#mobile-button');
    const nav = document.querySelector<HTMLDivElement>('#mobile-nav');
    const navbar = document.querySelector<HTMLDivElement>('#navbar');
    const navbarImg = navbar.querySelector<HTMLImageElement>('img');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.classList.add('sticky-header');
            navbarImg.src = '/public/logo.svg';
        } else {
            navbar.classList.remove('sticky-header');
            if (window.location.pathname === '/') {
            navbarImg.src = '/public/logo-white.svg';
            }
        }
    });
    mobile.addEventListener('click', () => {
        nav.classList.toggle('opacity-0');
        nav.classList.toggle('pointer-events-none');
        nav.classList.toggle('translate-y-0');
        nav.classList.toggle('-translate-y-full');
    });
});