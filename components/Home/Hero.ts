import {Slide} from "../../models/Slide.ts";

const hero: Array<Slide> = [
    {
        image: '/n-slider-01.jpg',
        title: 'HR IS ALL ABOUT PEOPLE',
        subtitle: `Human <span class="text-primary">Resource</span><br/> Solution Partner`
    },
    {
        image: '/n-slider-02.jpg',
        title: 'HR IS ALL ABOUT PEOPLE',
        subtitle: `Human <span class="text-primary">Resource</span><br/> Solution Partner`
    }
];

export const Hero = (): string => {
    return hero.map(slide => {
        return `<div class="swiper-slide relative">
            <img src="${slide.image}" alt="" class="min-h-screen object-cover"/>
            <div class="absolute top-96 left-48 right-0">
                <h6 class="uppercase text-sm font-bold leading-6 mb-4 text-white">
                    ${slide.title}
                </h6>
                <h1 class="text-7xl font-['Nunito'] mb-8 mt-4 text-white">
                    ${slide.subtitle}
                </h1>
                <div class="text-white mt-8 flex items-center gap-12">
                    <a href=""
                       class="font-['Nunito'] leading-6 font-extrabold border-2 border-white py-4 px-12 rounded-md uppercase text-sm">
                        CONTACT US
                    </a>
                    <div class="flex items-center my-auto">
                        <a href="">
                            <img src="/n-play-button.png" alt=""/>
                        </a>
                        <span class="font-['Poppins'] tracking-wider font-semibold leading-6">
                        How We Work
                        </span>
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');
}