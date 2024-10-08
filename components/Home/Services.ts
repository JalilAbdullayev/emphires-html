import {Service} from "../../models/Service.ts";

const services: Array<Service> = [
    {
        image: "/service-01.jpg",
        category: 'MANAGEMENT',
        title: "HR Consulting",
        description: "HR consultants are provides broad menu Human Resource Services"
    },
    {
        image: "/service-02.jpg",
        category: 'PLANNING',
        title: "Improving Resource",
        description: "Improving Resources provides broad menu Human Resource Services"
    },
    {
        image: "/service-03.jpg",
        category: 'TRAINING',
        title: "Strategic Planning",
        description: "Strategic Planning provides broad menu Human Resource Services"
    }
];

export const Services = (): string => {
    return services.map(service => {
        return `<div class="service">
    <div>
        <img src="${service.image}" alt="" class="shadow-[0_9px_24px_0_rgba(26,47,106,0.05)] rounded-md"/>
    </div>
    <div class="relative translate-y-0">
        <div class="bg-white px-7 pt-6 pb-2.5 -mt-7 mx-5 z-10 rounded-md shadow-[0_9px_24px_0_rgba(26,47,106,0.05)]">
            <a href="/service.html" class="text-[#0AADEB] tracking-wider font-semibold uppercase text-xs leading-6">
                ${service.category}
            </a>
            <h3 class="text-xl hover:text-[#0AADEB] duration-500">
                <a href="/service.html">
                    ${service.title}
                </a>
            </h3>
            <p class="pt-2.5 pb-5">
                ${service.description}
            </p>
        </div>
        <a href="/service.html" class="bg-primary rounded-full text-white text-lg size-14 flex justify-center items-center bottom-link -mt-9 leading-14 mx-auto">
            <i class="fa-solid fa-arrow-right duration-500 hover:text-[#0AADEB]"></i>
        </a>
    </div>
</div>`
    }).join('');
}