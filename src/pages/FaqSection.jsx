import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

function FaqSection() {
    const experiences = [
        {
            id: 1,
            header: "What is ZotRent?",
            description: "ZotRent is a platform designed to help college students find affordable housing near their campus. We provide listings for apartments, rooms, and other rental options that suit students’ budgets and needs. Whether you're looking for a place to rent for a semester or a full year, ZotRent makes it easy to find your ideal home."
        },
        {
            id: 2,
            header: "How do I search for housing?",
            description: "You can search for housing by entering your preferences such as budget, location, and housing type. Our user-friendly search filters allow you to find the perfect place based on your specific needs. You can also view photos, details, and contact information for each listing"
        },
        {
            id: 3,
            header: "Is ZotRent available for students at all universities?",
            description: "ZotRent currently focuses on campuses in and around Irvine, CA, but we plan to expand to other universities soon. Check back for updates, or sign up for notifications to be alerted when we add new campuses!"
        },
        {
            id: 4,
            header: "Do I need to create an account to use the site?",
            description: "While you can browse listings without an account, creating an account on ZotRent allows you to save your favorite listings, set up alerts for new properties, and apply directly to rental listings with a simplified process."
        },
        {
            id: 5,
            header: "Are the listings on ZotRent verified?",
            description: "Yes! We work hard to ensure that all the listings on our platform are legitimate. Our team reviews each listing for accuracy, but we recommend that you personally verify the details before signing any rental agreements."
        },
    ];

    const [openSections, setOpenSections] = useState({}); // Initialize as empty object

    const handleToggle = (id) => {
        setOpenSections((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className="container relative max-w-4xl mx-auto py-10">
            <div className={"py-20"}>
                <h1 className={"text-center text-4xl font-extrabold text-blue-600"}>Frequently Asked Questions</h1>
            </div>
            {experiences.map((experience) => (
                <div key={experience.id} className="mb-4">
                    <div
                        className="flex flex-col space-y-2 p-10 cursor-pointer border border-gray-500 rounded-xl"
                        onClick={() => handleToggle(experience.id)}
                    >
                        <div className="flex items-center justify-between">
                            <p className="text-[0.8rem] font-md md:text-xl">
                                {experience.header}
                            </p>
                            {openSections[experience.id] ? (
                                <ChevronUp className="transform transition-transform duration-300 ease-in-out" />
                            ) : (
                                <ChevronDown className="transform transition-transform duration-300 ease-in-out opacity-100" />
                            )}
                        </div>
                        <div
                            className={`transition-[max-height] duration-700 ease-in-out overflow-hidden ${
                                openSections[experience.id] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                            }`}
                        >
                            <div className="text-lg text-gray-700 transition-opacity duration-700 ease-in-out">
                                <p>{experience.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <p className={"flex justify-center text-gray-400 text-lg py-14"}>Still have questions? Email us support@zotrent.com</p>
        </div>
    );
}

export default FaqSection;