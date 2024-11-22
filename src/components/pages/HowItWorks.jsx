import React from 'react';
import { HousePlus, WashingMachine, MessagesSquare, ScrollText } from 'lucide-react';

function HowItWorks() {
    const cards = [
        {
            id: 1,
            title: 'Find Housing Near Campus',
            description: 'Browse affordable and convenient housing options tailored for students.',
            icon: HousePlus,
        },
        {
            id: 2,
            title: 'Explore Amenities',
            description: 'Discover properties with amenities like Wi-Fi, laundry, and parking.',
            icon: WashingMachine,
        },
        {
            id: 3,
            title: 'Connect with Landlords',
            description: 'Easily get in touch with landlords or property managers.',
            icon: MessagesSquare,
        },
        {
            id: 4,
            title: 'Simple Lease Process',
            description: 'Enjoy a smooth and transparent leasing process.',
            icon: ScrollText,
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold pb-5 text-blue-500 text-center">What We Offer</h1>
            <h2 className="text-lg sm:text-xl font-light text-gray-500 max-w-2xl text-center pb-8">
                Find Housing That Fits Your Budget and Lifestyle. Where Comfort Meets Convenience for Students.
            </h2>
            <div className="flex flex-wrap lg:flex-row justify-center gap-6 sm:gap-10 py-8">
                {cards.map((feature) => (
                    <div
                        key={feature.id}
                        className="flex flex-col items-center p-6 rounded-lg max-w-xs w-full"
                    >
                        <div className="bg-blue-500 p-3 rounded-full mb-3">
                            <feature.icon className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-xl font-medium mb-2 text-center">{feature.title}</h1>
                        <p className="font-light text-gray-600 text-center">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HowItWorks;
