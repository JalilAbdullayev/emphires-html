import {Client} from "../../models/Client.ts";

const clients: Array<Client> = [
    {
        image: '/public/client-01.png'
    },
    {
        image: '/public/client-02.png'
    },
    {
        image: '/public/client-03.png'
    },
    {
        image: '/public/client-04.png'
    },
    {
        image: '/public/client-05.png'
    },
    {
        image: '/public/client-06.png'
    }
];

export const Clients = (): string => {
    return clients.map(client => {
        return `<div class="swiper-slide">
    <img src="${client.image}" alt=""/>
</div>`;
    }).join('')
}