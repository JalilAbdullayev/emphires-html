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
            <h5 class="font-black text-dark text-base">
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
            <a href="" class="hover:text-[#0AADEB] duration-500">
                <i class="fa-solid fa-chevron-right"></i> <span class="pl-2.5">Adviser-Client Relations</span>
            </a>
        </li>
        <li>
            <a href="" class="hover:text-[#0AADEB] duration-500">
                <i class="fa-solid fa-chevron-right"></i> <span class="pl-2.5">Departments</span>
            </a>
        </li>
        <li>
            <a href="" class="hover:text-[#0AADEB] duration-500">
                <i class="fa-solid fa-chevron-right"></i> <span class="pl-2.5">Adviser Work</span>
            </a>
        </li>
        <li>
            <a href="" class="hover:text-[#0AADEB] duration-500">
                <i class="fa-solid fa-chevron-right"></i> <span class="pl-2.5">Our Employees</span>
            </a>
        </li>
        <li>
            <a href="" class="hover:text-[#0AADEB] duration-500">
                <i class="fa-solid fa-chevron-right"></i> <span class="pl-2.5">Meet Our Experts</span>
            </a>
        </li>
        <li>
            <a href="" class="hover:text-[#0AADEB] duration-500">
                <i class="fa-solid fa-chevron-right"></i> <span class="pl-2.5">Department Services</span>
            </a>
        </li>
        <li>
            <a href="" class="hover:text-[#0AADEB] duration-500">
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
                        <a href="" class="font-bold text-dark hover:text-[#0AADEB] duration-500">
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
    <div class="grid col-4 [&>a]:mb-4 [&>a]:text-[#0C121D]">
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
<section class="bg-white flex justify-between items-center py-7 pr-4 pl-6 rounded-lg shadow-[0_9px_30px_0_rgba(26,47,106,7%)] relative">
    <p class="text-sm leading-relaxed text-dark">
        Copyright © 2022 <span class="text-primary">Emphires</span> All Rights Reserved.
    </p>
    <a href="#" class="absolute left-1/2 -translate-x-1/2 -top-5 right-5 size-16 leading-[64px] text-[22px] text-center bg-dark text-white rounded-lg duration-500 hover:bg-[#0AADEB] z-10">
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
</section>`;
}