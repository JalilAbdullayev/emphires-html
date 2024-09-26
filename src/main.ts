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
import {Clients} from "../components/Home/Clients.ts";
import {Courses} from "../components/Home/Courses.ts";
import {Footer} from "../components/Footer.ts";
import Glide from "@glidejs/glide";

const header = document.querySelector<HTMLHeadingElement>('header');
const qualities = document.querySelector<HTMLDivElement>('#qualities');
const hero = document.querySelector<HTMLDivElement>('.hero-swiper .swiper-wrapper');
const services = document.querySelector<HTMLDivElement>('#services');
const skills = document.querySelector<HTMLDivElement>('#skills');
const approachQualities = document.querySelector<HTMLDivElement>('#approach-qualities');
const projects = document.querySelector<HTMLDivElement>('.project-swiper .swiper-wrapper');
const testimonials = document.querySelector<HTMLDivElement>('.testimonial-glide .glide__slides');
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