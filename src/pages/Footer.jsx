import React from "react";

function Footer() {
    return (
        <div className="bg-blue-600/80 p-10 mx-5 my-10 rounded-xl text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold pb-3">Ready To Get Started?</h1>
            <h2 className="text-base md:text-lg pb-8 border-b">Browse Listings, Connect with Landlords, Move Stress-Free</h2>
            <div className="flex flex-col md:flex-row justify-between py-5 gap-10">
                <div className="flex flex-col gap-5 md:max-w-sm">
                    <h1 className="text-3xl md:text-4xl font-bold">ZotRent</h1>
                    <p className="text-sm md:text-lg max-w-sm">A student-focused housing platform designed to make finding affordable rental options easier for college students.</p>
                    <button className="bg-black py-3 md:py-4 rounded-lg text-center">Get Started Now!</button>
                </div>
                <div className="flex flex-wrap md:flex-row gap-7 md:gap-5">
                    <div className="text-lg flex flex-col gap-3">
                        <h1 className="font-semibold">Home</h1>
                        <p>About Us</p>
                        <p>Help</p>
                        <p>News</p>
                    </div>
                    <div className="text-lg flex flex-col gap-3">
                        <h1 className="font-semibold">Security</h1>
                        <p>Privacy Policy</p>
                        <p>User Agreements</p>
                        <p>Copyright</p>
                    </div>
                    <div className="text-lg flex flex-col gap-3">
                        <h1 className="font-semibold">Social Media</h1>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>Twitter</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
