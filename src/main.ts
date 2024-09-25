import '../src/style.css';
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
import {Pagination} from "swiper/modules";
import {Clients} from "../components/Home/Clients.ts";
import {Courses} from "../components/Home/Courses.ts";
import {Footer} from "../components/Footer.ts";

const header = document.querySelector<HTMLHeadingElement>('header');
const qualities = document.querySelector<HTMLDivElement>('#qualities');
const hero = document.querySelector<HTMLDivElement>('.hero-swiper .swiper-wrapper');
const services = document.querySelector<HTMLDivElement>('#services');
const skills = document.querySelector<HTMLDivElement>('#skills');
const approachQualities = document.querySelector<HTMLDivElement>('#approach_qualities');
const projects = document.querySelector<HTMLDivElement>('.project-swiper .swiper-wrapper');
const testimonials = document.querySelector<HTMLDivElement>('.testimonial-swiper .swiper-wrapper');
const clients = document.querySelector<HTMLDivElement>('.clients-swiper .swiper-wrapper');
const courses = document.querySelector<HTMLDivElement>('#courses');
const footer = document.querySelector<HTMLDivElement>('footer .container');

header.innerHTML = Header();
qualities.innerHTML = HeadQualities();
hero.innerHTML = Hero();
services.innerHTML = Services();
skills.innerHTML = Skills();
approachQualities.innerHTML = ApproachQualities();
projects.innerHTML = Projects();
testimonials.innerHTML = Testimonials();
clients.innerHTML = Clients();
courses.innerHTML = Courses();
footer.innerHTML = Footer();

new Swiper('.hero-swiper');
new Swiper('.project-swiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
        1400: {
            slidesPerView: 5
        },
        1200: {
            slidesPerView: 4
        },
        992: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 2
        },
        576: {
            slidesPerView: 1
        }
    }
});

Swiper.use([Pagination]);
new Swiper('.testimonial-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});

new Swiper('.clients-swiper', {
    slidesPerView: 5,
    spaceBetween: 60,
    breakpoints: {
        1400: {
            slidesPerView: 5
        },
        1200: {
            slidesPerView: 4
        },
        992: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 2
        },
        576: {
            slidesPerView: 1
        }
    }
});