import {Testimonial} from "../../models/Testimonial.ts";

const testimonials: Array<Testimonial> = [
    {
        name: 'Jasica lenon',
        position: 'Manager',
        image: '/public/testimonial-01.jpg',
        comment: 'HR Adviser responded quickly to questions and work with thanks for picking the most expert employee’s for our company. These guys are real best adviser helped so many times'
    },
    {
        name: 'Jason roy',
        position: 'CEO of HR',
        image: '/public/testimonial-02.jpg',
        comment: 'HR Adviser responded quickly to questions and work with thanks for picking the most expert employee’s for our company. These guys are real best adviser helped so many times'
    },
    {
        name: 'Jennifer James',
        position: 'Adviser',
        image: '/public/testimonial-03.jpg',
        comment: 'HR Adviser responded quickly to questions and work with thanks for picking the most expert employee’s for our company. These guys are real best adviser helped so many times'
    }
];

export const Testimonials = (): string => {
    return testimonials.map(testimonial => {
        return `<div class="swiper-slide relative pt-10 pl-14 mr-7">
        <img src="${testimonial.image}" alt="" class="absolute top-0 left-0 border-4 border-white rounded-md shadow-[0_0_30px_rgba(140,152,164,0.5)] h-24"/>
    <div class="bg-white pt-10 pr-7 pb-12 pl-20 rounded-md">
    <blockquote class="pb-1">
        <p class="text-[22px] leading-7 mb-4 text-dark">
${testimonial.comment}
</p>
    </blockquote>
    <div>
    <div class="flex justify-between">
    <div>
        <h3 class="text-[#0AADEB] text-lg font-bold inline">
            ${testimonial.name}
        </h3> - <span>
            ${testimonial.position}
        </span>
    </div>
    <i class="fa-solid fa-quote-right text-6xl text-[#0AADEB]"></i>
    </div>
    </div>
    </div>
</div>`;
    }).join('')
}