import {Course} from "../../models/Course";

const courses: Array<Course> = [
    {
        title: 'Best Service provides for Small Businesses',
        author: 'admin',
        category: 'Consultation',
        comments: 0,
        day: 4,
        month: 'JUL',
        description: 'There are full service engage company is to provide solution for employees needs…',
        image: '/blog-01.jpg'
    },
    {
        title: 'Guide to HR adviser and Clients lessening',
        author: 'admin',
        category: ' Franchising',
        comments: 0,
        day: 4,
        month: 'JUL',
        description: 'There are full service engage company is to provide solution for employees needs…',
        image: '/blog-02.jpg'
    },
    {
        title: 'Our strength Proper Business in your Path',
        author: 'admin',
        category: ' Leadership',
        comments: 0,
        day: 4,
        month: 'JUL',
        description: 'There are full service engage company is to provide solution for employees needs…',
        image: '/blog-03.jpg'
    },
];

export const Courses = (): string => {
    return courses.map(course => {
        return `<div class="mx-3.5 shadow-[0_30px_50px_rgba(0,0,0,0.03)] rounded-md mb-7 bg-white">
    <div class="relative">
        <img src="${course.image}" alt="" class="rounded-md"/>
        <span class="absolute top-2.5 right-2.5 rounded-md bg-primary text-[32px] leading-[34px] py-3 px-4 font-bold text-white uppercase text-center font-nunito-sans">
            0${course.day} <div class="font-normal text-sm tracking-[3px]">${course.month}</div>
        </span>
    </div>
    <div class="p-8">
    <div class="mb-4 text-sm tracking-[0.5px] font-semibold">
        <a href="" title="Posted by ${course.author}" class="duration-500 hover:text-[#0AADEB]">
            <i class="fa-regular fa-user text-primary"></i> by ${course.author}
        </a>
        <a href="" class="duration-500 hover:text-[#0AADEB] ml-2.5">
            <i class="fa-regular fa-folder-open text-primary"></i> ${course.category}
        </a>
        <span class="ml-2.5">
            <i class="fa-regular fa-comment text-primary"></i> ${course.comments}
        </span>
    </div>
    <h3 class="duration-500 hover:text-[#0AADEB] text-[22px] leading-7 mb-4">
        <a href="">
            ${course.title}
        </a>
    </h3>
    <p class="mb-4">
        ${course.description}
    </p>
    <a href="" class="uppercase font-extrabold duration-500 hover:text-[#0AADEB]">
    <span class="link pr-5 text-xs tracking-wider duration-500 hover:text-[#0AADEB]">READ MORE</span> <i class="fa-solid fa-arrow-right text-sm"></i>
    </a>
</div>
</div>`;
    }).join('');
}