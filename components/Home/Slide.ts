const slider: Array<{ image: string, title: string, subtitle: string }> = [
    {
        image: '/public/n-slider-01.jpg',
        title: 'HR IS ALL ABOUT PEOPLE',
        subtitle: `Human <span>Resource</span><br/> Solution Partner`
    },
    {
        image: '/public/n-slider-02.jpg',
        title: 'HR IS ALL ABOUT PEOPLE',
        subtitle: `Human <span class="text-primary">Resource</span><br/> Solution Partner`
    }
];

export const Slide = (): string => {
    return slider.map((slide) => {
        return `<div class="swiper-slide relative">
            <img src="${slide.image}" alt=""/>
            <div class="absolute top-96 left-48 right-0 text-white">
                <h6 class="uppercase text-sm font-bold leading-6 mb-4">
                    ${slide.title}
                </h6>
                <h1 class="font-extrabold text-7xl font-['Nunito'] mb-8 mt-4">
                    ${slide.subtitle}
                </h1>
                <div class="text-white mt-8 flex items-center gap-12">
                    <a href=""
                       class="font-['Nunito'] leading-6 font-extrabold border-2 border-white py-4 px-12 rounded-md uppercase text-sm">
                        CONTACT US
                    </a>
                    <div class="flex items-center my-auto">
                        <a href="">
                            <img src="public/n-play-button.png" alt=""/>
                        </a>
                        <span class="font-['Poppins'] tracking-wider font-semibold leading-6">
                        How We Work
                        </span>
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');
}