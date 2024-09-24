export const qualities: Array<{ image: string, order: number, title: string, description: string }> = [
    {
        image: "/pubic/icon-01.png",
        order: 1,
        title: "Compensation Consulting",
        description: "Compensation Consulting are always help for a companies marketing, customer growths."
    },
    {
        image: "/public/icon-02.png",
        order: 2,
        title: "Leadership Training",
        description: "The Leadership Training are always help for a companies marketing, customer growths."
    },
    {
        image: "/public/icon-03.png",
        order: 3,
        title: "Talent Acquisition",
        description: "We provide broad menu employment service for a companies."
    },
];
export const HeadQualities = (): string => {
    return qualities.map(quality => {
        return `<div class="my-4 pt-7 pb-10 pr-14 pl-7 mb-7 rounded-md shadow-[0_9px_24px_0_rgba(26,47,106,0.05)] bg-white relative overflow-hidden">
        <div class="flex justify-between">
        <img src="${quality.image}" alt=""/>
        <h3 class="text-7xl font-black text-[#E3E4E9]">
            0${quality.order}
        </h3>
        </div>
        <h2 class="text-xl leading-6 mb-2.5 mt-7">
            ${quality.title}
        </h2>
        <p>
            ${quality.description}
        </p>
        <a href="" class="bg-[#0C121D] text-white rounded-[50%] size-[130px] inline-block absolute top-21 right-[-40px]">
            <i class="fa-solid fa-arrow-right text-lg leading-4 absolute top-3 left-11"></i>
        </a>
        </div>`;
    }).join('');
}