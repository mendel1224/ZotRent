import React from "react"
import cozyLoft from '../assets/images/cozyLoft.jpg';
import realEstateWoman from '../assets/images/woman.jpg'
function Listing() {
    return (
        <div className="bg-gray-100 min-h-screen p-10">
            <h1 className="text-4xl font-extrabold mt-6 text-gray-900">201 Prague Dr, Irvine, CA 95119</h1>
            <main className="flex flex-col md:flex-row gap-10 mt-10">

                <div className="flex-1">
                    <img
                        src={cozyLoft}
                        alt="House"
                        className="rounded-xl shadow-lg"
                    />
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg w-full md:max-w-sm">
                    <p className="text-gray-600">201 Prague Dr, Irvine, CA 95119</p>
                    <div className="flex justify-between mt-6 text-gray-800 font-medium">
                        <div>
                            <p>4</p>
                            <p className="text-gray-500 text-sm">beds</p>
                        </div>
                        <div>
                            <p>3</p>
                            <p className="text-gray-500 text-sm">baths</p>
                        </div>
                        <div>
                            <p>1,868</p>
                            <p className="text-gray-500 text-sm">sqft</p>
                        </div>
                    </div>
                    <p className="text-2xl font-bold mt-6">$800 / month</p>
                    <button className="bg-gray-200 mt-4 px-4 py-2 w-full rounded-md">Split options</button>
                    <div className="flex items-center gap-4 mt-6">
                        <img
                            src={realEstateWoman}
                            alt="Agent"
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <p className="font-medium text-gray-800">Amelia Stephenson</p>
                            <button className="text-blue-600 text-sm font-medium">Contact</button>
                        </div>
                    </div>
                    <button className="bg-gray-900 text-white font-medium mt-6 px-4 py-2 w-full rounded-md">
                        Request a tour <span className="block text-sm font-normal">Earliest at 11:00 tomorrow</span>
                    </button>
                </div>
            </main>

            <div className="bg-white mt-10 p-6 rounded-xl justify-between items-center shadow-lg flex flex-col md:flex-row gap-4">
                <div className="flex flex-col items-center gap-2">
                    <p className="text-gray-800 font-medium">Location</p>
                    <p className="text-black font-bold">Irvine, CA</p>
                </div>
                <div className="flex flex-col items-center gap-2 ">
                    <p className="text-gray-800 font-medium">Property type</p>
                    <p className="text-black font-bold">Apartments</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-gray-800 font-medium">Price</p>
                    <p className="text-black font-bold">$2,000-$13,000</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-gray-800 font-medium">Bedrooms</p>
                    <p className="text-black font-bold">3-5</p>
                </div>
                <button className="border px-4 py-2 rounded-md border-gray-400">More</button>
                <button className="bg-gray-900 text-white px-6 py-2 rounded-md">Search</button>
            </div>
        </div>
    );
}

export default Listing