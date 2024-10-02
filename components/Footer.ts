import {News} from "../models/News.ts";

const news: Array<News> = [
    {
        title: 'Best Service provides for Small Businesses',
        date: 'July 4, 2020',
        image: '/footer-01.jpg'
    },
    {
        title: 'Guide to HR adviser and Clients lessening',
        date: 'July 4, 2020',
        image: '/footer-02.jpg'
    },
    {
        title: 'Our strength Proper Business in your Path',
        date: 'July 4, 2020',
        image: '/footer-03.jpg'
    }
];
export const Footer = (): string => {
    return `<section class="col-lg-4 grid-cols-2 pb-10">
    <div class="mx-3.5">
        <img src="/logo.svg" alt="" class="mb-5"/>
        <p class="mt-2.5 mb-4">
        HR Advisers carry out your company hr service needs to provide training and managing the HR department company. Our consultants provides HR outsourcing and inclusive services.
        </p>
        <div class="flex justify-between items-center bg-white rounded-lg py-5 px-7">
            <h5 class="font-black text-base">
                <div class="font-bold">
                    Talk To Our Support
                </div>
                <a href="tel:">
                    +1 002-123-4567
                </a>
            </h5>
            <i class="fa-solid fa-phone-volume text-5xl text-primary"></i>
        </div>
    </div>
    <div class="mx-3.5">
    <h2 class="footer-header">
        INFORMATION
    </h2>
    <ul class="[&>li]:mb-4 [&>li]:font-bold [&>li]:text-[#0C121D]">
        <li>
            <a href="" class="hover:text-[#0AADEB]">
                <i class="fa-solid fa-chevron-right"></i> <span class="pl-2.5">Adviser-Client Relations</span>
            </a>
        </li>
        <li>
            <a href="" class="hover:text-[#0AADEB]">
                <i class="fa-solid fa-chevron-right"></i> <span class="pl-2.5">Departments</span>
            </a>
        </li>
        <li>
            <a href="" class="hover:text-[#0AADEB]">
                <i class="fa-solid fa-chevron-right"></i> <span class="pl-2.5">Adviser Work</span>
            </a>
        </li>
        <li>
            <a href="" class="hover:text-[#0AADEB]">
                <i class="fa-solid fa-chevron-right"></i> <span class="pl-2.5">Our Employees</span>
            </a>
        </li>
        <li>
            <a href="" class="hover:text-[#0AADEB]">
                <i class="fa-solid fa-chevron-right"></i> <span class="pl-2.5">Meet Our Experts</span>
            </a>
        </li>
        <li>
            <a href="" class="hover:text-[#0AADEB]">
                <i class="fa-solid fa-chevron-right"></i> <span class="pl-2.5">Department Services</span>
            </a>
        </li>
        <li>
            <a href="" class="hover:text-[#0AADEB]">
                <i class="fa-solid fa-chevron-right"></i> <span class="pl-2.5">About Company</span>
            </a>
        </li>
    </ul>
    </div>
    <div class="mx-3.5">
        <h2 class="footer-header">
            LATEST NEWS
        </h2>
        <ul>
            ${news.map(news => {
        return `<li class="col-3 mb-4 gap-4">
                    <img src="${news.image}" alt="" class="w-full"/>
                    <div class="col-span-2">
                        <a href="" class="font-bold hover:text-[#0AADEB]">
                            ${news.title}
                        </a>
                        <div class="text-primary">
                            ${news.date}
                        </div>
                    </div>
                </li>`;
    }).join('')}
        </ul>
    </div>
    <div class="mx-3.5">
    <h2 class="footer-header">
        NEWSLETTER
    </h2>
    <p>
        Sign up today for hints, tips and the latest product news
    </p>
    <form action="" method="POST" class="relative">
        <input type="email" name="" placeholder="Your email address" required class="h-14 border border-[#ffffff33] bg-white rounded-md py-2.5 pl-4 mb-2.5 outline-none w-full"/>
        <button type="submit" class="rounded-md size-12 text-white tracking-wider bg-primary font-bold absolute top-1 right-1">
            <i class="fa-solid fa-paper-plane"></i>
        </button>
    </form>
    <h2 class="footer-header mt-6">
    FOLLOW US ON
    </h2>
    <div class="grid col-4 [&>a]:mb-4">
        <a href="" target="_blank" class="footer-social">
            <i class="fa-brands fa-square-facebook"></i>
        </a>
        <a href="" target="_blank" class="footer-social">
            <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a href="" target="_blank" class="footer-social">
            <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="" target="_blank" class="footer-social">
            <i class="fa-brands fa-instagram"></i>
        </a>
    </div>
</div>
</section>
<section class="bg-white flex justify-between items-center py-7 pr-4 pl-6 rounded-lg shadow-[0_9px_30px_0_rgba(26,47,106,0.07)] relative">
    <p class="text-sm leading-relaxed text-dark">
        Copyright © 2022 <a href="/" class="text-primary">Emphires</a> All Rights Reserved.
    </p>
    <a href="#" class="absolute left-1/2 -translate-x-1/2 -top-5 right-5 size-16 leading-[64px] text-[22px] text-center bg-dark text-white rounded-lg hover:bg-[#0AADEB] z-10">
        <i class="fa-solid fa-arrow-up"></i>
    </a>
    <ul class="flex justify-between [&>li]:mx-2.5 [&>li]:text-sm">
        <li class="duration-500 hover:text-[#0AADEB]">
            <a href="">
                Privacy & Policy
            </a>
        </li>
        <li class="duration-500 hover:text-[#0AADEB]">
            <a href="">
                Conditions
            </a>
        </li>
        <li class="duration-500 hover:text-[#0AADEB]">
            <a href="">
                Refund Policy
            </a>
        </li>
    </ul>
</section>
<div class="opacity-0 invisible fixed top-0 left-0 size-full bg-[#0C121DE6] duration-300 -translate-y-[30%] z-50" id="search-modal">
    <div class="absolute text-white top-[25px] right-[25px] cursor-pointer" id="close-modal">
        <i class="fa-solid fa-xmark text-3xl block"></i>
    </div>
    <div class="max-w-[970px] mx-auto relative top-1/2 left-0 -translate-y-1/2">
        <form action="" class="relative">
            <input type="search" name="" class="border-0 text-base text-[#09162A] pl-4 text-left h-[70px] leading-[70px] bg-white shadow-[0_9px_24px_0_rgba(26,47,106,0.05)] w-full rounded-md duration-150 -outline-offset-2 max-w-full" placeholder="Type Word Then Press Enter"/>
            <button type="submit" class="absolute top-[5px] right-[5px] text-xl size-[60px] leading-[60px] rounded text-white bg-primary">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    </div>
</div>`;
}