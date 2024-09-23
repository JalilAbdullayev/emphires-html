import {Header} from "../components/Header.ts";
import Swiper from "swiper";
import 'swiper/swiper-bundle.css'
import {Slide} from "../components/Home/Slide.ts";

const header = document.querySelector<HTMLHeadingElement>('header');
const hero = document.querySelector<HTMLDivElement>('.swiper-wrapper');

header.innerHTML = Header();
hero.innerHTML = Slide();

const swiper = new Swiper('.swiper')