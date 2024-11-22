import React from 'react';
import MapSection from './MapSection';
import {
    SquareX,
    ChevronDown,
    Ellipsis,
    Search,
    PenLine,
    Plus,
    Minus,
} from 'lucide-react';
import cozyLoft from '../assets/images/cozyLoft.jpg';
import singleRoom from '../assets/images/SingleRoom.jpg';
import spaciousApartment from '../assets/images/SpaciousAPT.jpeg';
import {Link} from "react-router-dom";

function ExplorePage() {
    return (
        <div className="relative h-screen w-full">
            <div className="absolute inset-0 z-0">
                <MapSection />
            </div>

            <div className="absolute top-5 left-5 right-5 z-10 flex flex-col gap-4">
                <div className="flex flex-wrap gap-3">
                    <div className="font-semibold bg-gray-900 text-sm text-white px-4 py-2 rounded-lg flex items-center gap-2">
                        Type: Apartment <SquareX className="text-gray-400" />
                    </div>
                    <div className="font-semibold bg-gray-900 text-sm text-white px-4 py-2 rounded-lg flex items-center gap-2">
                        Price: $800 - $1250 <SquareX className="text-gray-400" />
                    </div>
                    <div className="font-semibold bg-white text-sm text-gray-900 px-4 py-2 rounded-lg border-2 border-gray-400 flex items-center gap-2">
                        Area <ChevronDown />
                    </div>
                    <div className="font-semibold bg-white text-sm text-gray-900 px-4 py-2 rounded-lg border-2 border-gray-400 flex items-center gap-2">
                        Floor <ChevronDown />
                    </div>
                    <div className="font-semibold bg-white text-sm text-gray-900 px-4 py-2 rounded-lg border-2 border-gray-400 flex items-center">
                        <Ellipsis />
                    </div>
                </div>

                <div className="relative flex-grow max-w-lg">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Irvine, California"
                        className="w-full pl-10 pr-4 py-4 rounded-2xl border-2 border-gray-400"
                    />
                    <SquareX className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
            </div>

            <div className="absolute bottom-10 left-5 flex flex-col items-center gap-3">
                <div className="bg-gray-400/50 p-3 rounded-full">
                    <PenLine className="text-gray-900" />
                </div>
                <div className="bg-gray-400/50 p-3 rounded-full flex flex-col gap-2">
                    <Plus className="text-gray-900" />
                    <Minus className="text-gray-900" />
                </div>
            </div>

            <div className="absolute top-0 right-0 h-full w-[400px] bg-white shadow-lg z-10 p-6 overflow-y-auto">
                <div className="mb-6">
                    <h2 className="font-bold text-lg">Most Popular</h2>
                </div>

                <div className="border rounded-lg p-4 shadow">
                    <Link to={"/listing"}>
                        <img
                            src={cozyLoft}
                            alt="Property"
                            className="w-full h-[200px] object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-semibold text-lg">Cozy apartment for rent</h3>
                        <p className="text-gray-500 text-sm">$800 / month</p>
                        <button className="mt-3 px-4 py-2 bg-black text-white rounded-lg">
                            Show contacts
                        </button>
                    </Link>

                </div>
                <div className="border rounded-lg p-4 shadow">
                    <Link>
                        <img
                            src={spaciousApartment}
                            alt="Property"
                            className="w-full h-[200px] object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-semibold text-lg">Spacious apartment for rent</h3>
                        <p className="text-gray-500 text-sm">$950 / month</p>
                        <button className="mt-3 px-4 py-2 bg-black text-white rounded-lg">
                            Show contacts
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default ExplorePage;
