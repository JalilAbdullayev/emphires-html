const projects: Array<{ image: string, title: string, subtitle: string }> = [
    {
        image: '/public/project-01.jpg',
        title: 'Packard Consulting',
        subtitle: 'INCREASE LEADS'
    },
    {
        image: '/public/project-02.jpg',
        title: 'Consulting Projects',
        subtitle: 'CHIEF EXECUTIVE'
    },
    {
        image: '/public/project-03.jpg',
        title: 'Lead Generations',
        subtitle: 'INCREASE LEADS'
    },
    {
        image: '/public/project-04.jpg',
        title: 'Marketing Strategy',
        subtitle: 'MARKETING EXPERT'
    },
    {
        image: '/public/project-05.jpg',
        title: 'Employee Insights',
        subtitle: 'BUILD EFFECTIVE'
    },
    {
        image: '/public/project-06.jpg',
        title: 'Employee Relations',
        subtitle: 'CHIEF EXECUTIVE'
    },
    {
        image: '/public/project-07.jpg',
        title: 'Social Marketing',
        subtitle: 'BUILD EFFECTIVE'
    },
    {
        image: '/public/project-08.jpg',
        title: 'Digital Strategy',
        subtitle: 'MARKETING EXPERT'
    },
    {
        image: '/public/project-09.jpg',
        title: 'Lead Campaign',
        subtitle: 'INCREASE LEADS'
    },
];

export const Projects = (): string => {
    return projects.map(project => {
        return `<div class="swiper-slide relative hover:[&>div]:opacity-100">
    <img src="${project.image}" alt="" class="rounded-lg"/>
    <div class="absolute inset-0 bg-[#0C121DCC] opacity-0 duration-500 rounded-lg">
        <a href="" class="text-2xl leading-[44px] bg-white size-11 rounded-full text-center text-[#1C325B] absolute top-2.5 right-4" title="${project.title}">
            <i class="fa-solid fa-plus"></i>
        </a>
        <div class="absolute left-7 bottom-8">
            <a href="" class="uppercase text-sm text-white">
                ${project.subtitle}
            </a>
            <h3 class="text-[22px] leading-[26px] mb-1.5 text-white">
                <a href="">
                    ${project.title}
                </a>
            </h3>
        </div>
    </div>
</div>`;
    }).join('')
}