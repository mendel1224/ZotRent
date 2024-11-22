import React from "react";

function Info() {
    const cards = [
        {
            id: 1,
            title: 'Explore Rentals',
            description:
                'Discover off-campus housing tailored to students. Find apartments, shared rooms, or studios close to your campus.',
            buttonText: 'Explore Now',
            buttonLink: '/rentals',
            bgColor: 'bg-blue-100',
            textColor: 'text-blue-700',
        },
        {
            id: 2,
            title: 'Budget Your Housing',
            description:
                'Learn how to create a housing budget and manage expenses as a student for stress-free living.',
            buttonText: 'Learn More',
            buttonLink: '/budgeting-tips',
            bgColor: 'bg-green-100',
            textColor: 'text-green-700',
        },
        {
            id: 3,
            title: 'List Your Space',
            description:
                'Sublet or rent out your space easily. Help fellow students find housing while earning extra income.',
            buttonText: 'List Now',
            buttonLink: '/list-space',
            bgColor: 'bg-yellow-100',
            textColor: 'text-yellow-700',
        },
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-8 lg:px-16 pt-60 pb-32">
            <h1></h1>
            {cards.map((card) => (
                <div
                    key={card.id}
                    className="rounded-xl text-center p-10 py-20 shadow-sm border transition-transform transform hover:scale-105"
                >
                    <h2 className="text-3xl font-extrabold">{card.title}</h2>
                    <p className="max-w-sm mt-3 text-xl font-light">{card.description}</p>
                    <a
                        href={card.buttonLink}
                        className={`mt-12 text-lg border-2 inline-block w-full max-w-xs mx-auto px-6 py-4 rounded-lg text-white font-medium ${card.textColor} bg-opacity-80 hover:bg-opacity-100`}
                    >
                        {card.buttonText}
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Info;