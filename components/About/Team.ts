import {Member} from "../../models/Member.ts";

export const team: Array<Member> = [
    {
        name: 'Thomas Novak',
        position: 'CEO/FOUNDER',
        image: '/team-01.jpg'
    },
    {
        name: 'Amanda Berry',
        position: 'MANAGING DIRECTOR',
        image: '/team-02.jpg'
    },
    {
        name: ' Edward Willey',
        position: 'INVESTMENT EXPERT',
        image: '/team-03.jpg'
    },
    {
        name: 'Berry Castle',
        position: 'STOCK EXPERT',
        image: '/team-04.jpg'
    }
];
export const Team = (): string => {
    return team.map(member => {
        return `<div class="bg-white rounded-md shadow-[0_0_24px_0_rgba(26,47,106,0.07)] mb-10 border-b-[3px] transform translate-y-0 border-[#0AADEB] overflow-hidden relative duration-500 hover:border-[#0C121D] hover:-translate-y-[5px]">
    <div class="absolute right-[50px] top-[15px] text-center">
    <div class="plus-icon">
        <div class="size-10 absolute top-0 leading-10 rounded-full cursor-pointer bg-white text-[#1C325B]">
            <i class="fa-solid fa-plus"></i>
        </div>
        <div class="absolute top-[50px] opacity-0 invisible -left-[30px] duration-500 social-icons">
            <ul class="about-social">
                <li>
                    <a href="" target="_blank">
                        <i class="fa-brands fa-square-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">
                     <i class="fa-brands fa-x-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </li>
            </ul>
        </div>
        </div>
    </div>
    <div>
        <img src="${member.image}" alt=""/>
    </div>
    <div class="py-5 pr-[30px] pl-[25px] text-center">
        <div>
            <h3 class="hover:text-[#0AADEB] text-[22px] leading-6 mt-[5px] duration-500">
                <a href="">
                    ${member.name}
                </a>
            </h3>
            <div class="uppercase px-2.5">
                <h4 class="text-xs font-semibold tracking-[1px] px-2.5 text-secondary">
                    ${member.position}
                </h4>
            </div>
        </div>
    </div>
</div>`;
    }).join('');
}
