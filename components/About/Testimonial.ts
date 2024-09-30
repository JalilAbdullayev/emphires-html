import {testimonials} from "../Home/Testimonials";

export const Testimonial = (): string => {
    return testimonials.map(testimonial => {
        return `<div class="glide__slide">
    <div class="pl-5 text-dark text-[22px]">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
    </div>
    <div class="pl-5 pb-2.5">
        <blockquote class="text-2xl leading-[36px] p-0 mt-[15px] border-0 font-light text-dark">
            <p class="m-0">
                ${testimonial.comment}
            </p>
        </blockquote>
    </div>
    <div class="flex pl-5 pb-5">
        <div class="pr-5">
            <img src="${testimonial.image}" alt="" class="rounded-md h-[75px] border-[5px] border-white shadow-[0_0_40px_0_rgba(26,47,106,0.08)] w-full max-w-full align-middle"/>
        </div>
        <div>
            <h3 class="text-lg leading-6 mt-[15px] text-primary">
                ${testimonial.name}
            </h3>
            <div>
                ${testimonial.position}
            </div>
        </div>
    </div>
</div>`;
    }).join('');
}