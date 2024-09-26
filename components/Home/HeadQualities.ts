import {Quality} from "../../models/Quality.ts";

export const qualities: Array<Quality> = [
    {
        image: "/public/icon-01.png",
        title: "Compensation Consulting",
        description: "Compensation Consulting are always help for a companies marketing, customer growths."
    },
    {
        image: "/public/icon-02.png",
        title: "Leadership Training",
        description: "The Leadership Training are always help for a companies marketing, customer growths."
    },
    {
        image: "/public/icon-03.png",
        title: "Talent Acquisition",
        description: "We provide broad menu employment service for a companies."
    },
];
export const HeadQualities = (): string => {
    return qualities.map((quality, index) => {
        return `<div class="mt-4 pt-7 pb-10 pr-14 pl-7 lg:mb-7 rounded-md shadow-[0_9px_24px_0_rgba(26,47,106,0.05)] bg-white relative overflow-hidden">
        <div class="flex justify-between">
        <img src="${quality.image}" alt=""/>
        <h3 class="text-7xl font-black text-[#E3E4E9]">
            0${index + 1}
        </h3>
        </div>
        <h2 class="text-xl leading-6 mb-2.5 mt-7">
            ${quality.title}
        </h2>
        <p>
            ${quality.description}
        </p>
        <a href="" class="bg-dark text-white rounded-[50%] size-[130px] inline-block absolute -bottom-20 right-[-40px]">
            <i class="fa-solid fa-arrow-right text-lg leading-4 absolute top-3 left-11"></i>
        </a>
        </div>`;
    }).join('');
}