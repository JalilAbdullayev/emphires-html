import {Client} from "../../models/Client.ts";

const clients: Array<Client> = [
    {
        image: '/client-01.png'
    },
    {
        image: '/client-02.png'
    },
    {
        image: '/client-03.png'
    },
    {
        image: '/client-04.png'
    },
    {
        image: '/client-05.png'
    },
    {
        image: '/client-06.png'
    }
];

export const Clients = (): string => {
    return clients.map(client => {
        return `<div class="swiper-slide">
    <img src="${client.image}" alt=""/>
</div>`;
    }).join('')
}