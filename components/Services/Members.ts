import {team} from "../About/Team";

export const Members = (): string => {
    return team.map(member => {
        return `<div class="px-3.5 group">
    <div class="mb-20 relative flex flex-col justify-center items-center">
        <div>
            <img src="${member.image}" alt=""/>
        </div>
        <div class="pt-5 pr-[30px] pb-2.5 pl-[25px] text-center bg-white rounded-[2px] my-[15px] shadow-[0_30px_50px_rgba(0,0,0,0.03)] absolute -bottom-[50px] w-[calc(100%-30px)]">
        <div class="text-center">
            <div class="text-xs uppercase tracking-[1px] text-primary font-bold">
                ${member.position}
            </div>
            <h3 class="text-lg mb-2 leading-[26px] text-[#232323]">
                <a href="">
                    ${member.name}
                </a>
            </h3>
            <div class="h-0 opacity-0 group-hover:h-8 group-hover:opacity-100 duration-500">
                <ul>
                    <li class="mr-[5px] inline-block text-center">
                        <a href="" target="_blank" class="text-[15px] leading-[15px] hover:text-[#0AADEB]">
                            <i class="fa-brands fa-square-facebook"></i>
                        </a>
                    </li>
                    <li class="mr-[5px] inline-block text-center">
                        <a href="" target="_blank" class="text-[15px] leading-[15px] hover:text-[#0AADEB]">
                            <i class="fa-brands fa-x-twitter"></i>
                        </a>
                    </li>
                    <li class="mr-[5px] inline-block text-center">
                        <a href="" target="_blank" class="text-[15px] leading-[15px] hover:text-[#0AADEB]">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
</div>`;
    }).join('');
}