import Swiper from "swiper";
import 'swiper/swiper-bundle.css';
import {Header} from "../components/Header.ts";
import {Hero} from "../components/Home/Hero.ts";
import {HeadQualities} from "../components/Home/HeadQualities.ts";
import {Services} from "../components/Home/Services.ts";
import {Skills} from "../components/Home/Skills.ts";
import {ApproachQualities} from "../components/Home/ApproachQualities.ts";
import {Projects} from "../components/Home/Projects.ts";
import {Testimonials} from "../components/Home/Testimonials.ts";
import {Clients} from "../components/Home/Clients.ts";
import {Courses} from "../components/Home/Courses.ts";
import {Footer} from "../components/Footer.ts";
import Glide from "@glidejs/glide";
import {Team} from "../components/About/Team.ts";
import {Testimonial} from "../components/About/Testimonial.ts";
import {Members} from "../components/Services/Members.ts";
import {Project} from "../components/Projects/Project.ts";

const header: HTMLDivElement = document.querySelector<HTMLDivElement>('header');
const footer: HTMLDivElement = document.querySelector<HTMLDivElement>('footer .container');

document.addEventListener('DOMContentLoaded', () => {
    const searchBtn: HTMLButtonElement = document.querySelector<HTMLButtonElement>('#search-button');
    const searchMdl: HTMLDivElement = document.querySelector<HTMLDivElement>('#search-modal');
    const clsMdl: HTMLDivElement = document.querySelector<HTMLDivElement>('#close-modal');

    const modal = () => {
        searchMdl.classList.toggle('opacity-0');
        searchMdl.classList.toggle('invisible');
        searchMdl.classList.toggle('-translate-y-[30%]');
    }

    searchBtn.addEventListener('click', () => {
        modal();
    });

    clsMdl.addEventListener('click', () => {
        modal();
    });

    window.onclick = event => {
        if (event.target === searchMdl) {
            modal();
        }
    }
});

header.innerHTML = Header();
footer.innerHTML = Footer();

if (window.location.pathname === '/') {
    const qualities: HTMLDivElement = document.querySelector<HTMLDivElement>('#qualities');
    const hero: HTMLDivElement = document.querySelector<HTMLDivElement>('.hero-swiper .swiper-wrapper');
    const services: HTMLDivElement = document.querySelector<HTMLDivElement>('#services');
    const skills: HTMLDivElement = document.querySelector<HTMLDivElement>('#skills');
    const approachQualities: HTMLDivElement = document.querySelector<HTMLDivElement>('#approach-qualities');
    const projects: HTMLDivElement = document.querySelector<HTMLDivElement>('.project-swiper .swiper-wrapper');
    const testimonials: HTMLDivElement = document.querySelector<HTMLDivElement>('.testimonial-glide .glide__slides');
    const clients: HTMLDivElement = document.querySelector<HTMLDivElement>('.clients-swiper .swiper-wrapper');
    const courses: HTMLDivElement = document.querySelector<HTMLDivElement>('#courses');

    qualities.innerHTML = HeadQualities();
    hero.innerHTML = Hero();
    services.innerHTML = Services();
    skills.innerHTML = Skills();
    approachQualities.innerHTML = ApproachQualities();
    projects.innerHTML = Projects();
    testimonials.innerHTML = Testimonials();
    clients.innerHTML = Clients();
    courses.innerHTML = Courses();

    new Swiper('.hero-swiper');
    new Swiper('.project-swiper', {
        slidesPerView: 5,
        spaceBetween: 30,
        breakpoints: {
            1536: {
                slidesPerView: 5
            },
            1280: {
                slidesPerView: 4
            },
            1024: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
            640: {
                slidesPerView: 1
            }
        }
    });

    new Swiper('.clients-swiper', {
        slidesPerView: 5,
        spaceBetween: 60
    });

    new Glide('.testimonial-glide', {
        gap: 30
    }).mount();
}

if (window.location.pathname === '/about.html') {
    const approachQualities: HTMLDivElement = document.querySelector<HTMLDivElement>('#approach-qualities');
    const team: HTMLDivElement = document.querySelector<HTMLDivElement>('#team');
    const testimonial: HTMLDivElement = document.querySelector<HTMLDivElement>('.about-testimonial .glide__slides');

    approachQualities.innerHTML = ApproachQualities();
    team.innerHTML = Team();
    testimonial.innerHTML = Testimonial();

    new Glide('.about-testimonial', {
        gap: 30
    }).mount();
}

if (window.location.pathname === '/blog.html') {
    const main: HTMLDivElement = document.querySelector<HTMLDivElement>('main');
    main.innerHTML = Courses();
}


if (window.location.pathname === '/service.html') {
    const team: HTMLDivElement = document.querySelector<HTMLDivElement>('#team');
    team.innerHTML = Members();
}

if (window.location.pathname === '/projects.html') {
    const main: HTMLDivElement = document.querySelector<HTMLDivElement>('main');
    main.innerHTML = Project();
}