import {qualities} from "./HeadQualities.ts";

export const ApproachQualities = (): string => {
    return qualities.map((quality, index) => {
        return `<div class="${index === 2 ? 'max-xl:col-span-full' : ''}">
    <div class="mb-9 relative w-fit mx-auto">
        <div class="bg-white size-36 shadow-[0_0_24px_0_rgba(26,47,106,0.13)] leading-[110px] rounded-md mx-auto">
            <img src="${quality.image}" alt="" class="m-auto pt-5"/>
        </div>
        <div class="bg-dark text-white size-9 text-sm font-bold leading-7 rounded-full absolute -bottom-2.5 -right-2.5">
            0${index + 1}
        </div>
    </div>
    <h2 class="text-[22px] leading-6 mb-2.5">
        ${quality.title}
    </h2>
    <p>
        ${quality.description}
    </p>
</div>`;
    }).join('');
}