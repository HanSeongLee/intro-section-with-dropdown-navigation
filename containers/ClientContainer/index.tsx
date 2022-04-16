import React, {HTMLAttributes} from 'react';

const clients:{name: string, icon: string}[] = [
    {
        name: 'databiz',
        icon: '/img/client-databiz.svg',
    },
    {
        name: 'audiophile',
        icon: '/img/client-audiophile.svg',
    },
    {
        name: 'meet',
        icon: '/img/client-meet.svg',
    },
    {
        name: 'maker',
        icon: '/img/client-maker.svg',
    },
];

const ClientContainer: React.FC<HTMLAttributes<HTMLUListElement>> = (props) => {
    return (
        <ul {...props}>
            {clients?.map(({name, icon}, index) => (
                <li key={index}>
                    <img src={icon}
                         alt={name}
                    />
                </li>
            ))}
        </ul>
    );
};

export default ClientContainer;
