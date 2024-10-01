import {projects} from "../Home/Projects";

export const Project = (): string => {
    return projects.map(project => {
        return `<div class="mb-[30px]">
    <div>
        <img src="${project.image}" alt="" class="img-fluid"/>
    </div>
    <div class="p-[30px] shadow-[-1px_3px_10px_0_rgba(0,0,0,0.06)] relative">
        <div class="leading-[13px] mb-2.5">
            <a href="" class="uppercase text-[13px] leading-[13px] font-bold tracking-[1px] inline-block text-primary">
                ${project.subtitle}
            </a>
        </div>
        <h3 class="font-extrabold text-[22px] leading-[30px]">
            <a href="" class="text-[#2C2C2C]">
                ${project.title}
            </a>
        </h3>
        <div class="absolute right-[30px] top-1/2 -translate-y-1/2">
            <a href="" class="size-10 leading-10 text-center bg-primary rounded-full -ml-5 text-white shadow-[-1px_3px_10px_0_rgba(0,0,0,0.06)] inline-block text-[22px]">
                <i class="fa-solid fa-plus"></i>
            </a>
        </div>
    </div>
</div>`;
    }).join('');
}