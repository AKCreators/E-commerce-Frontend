import React, { useState } from "react";

const SearchIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const MessageIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
);

const CartIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const StarIcon = () => (
    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const UserIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const OrdersIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
);

const MenuIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

// Flag Icons
const GermanyFlag = () => (
    <div className="w-5 h-3 bg-gradient-to-r from-black via-red-500 to-yellow-500 rounded-sm border"></div>
);

const USAFlag = () => (
    <div className="w-5 h-3 bg-blue-600 rounded-sm border relative">
        <div className="absolute inset-0 bg-red-500" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
        <div className="absolute top-0 left-0 w-2 h-1 bg-white"></div>
    </div>
);

const UKFlag = () => (
    <div className="w-5 h-3 bg-blue-700 rounded-sm border relative">
        <div className="absolute inset-0 bg-red-600" style={{
            clipPath: 'polygon(0 0, 30% 0, 30% 40%, 100% 40%, 100% 60%, 30% 60%, 30% 100%, 0 100%)'
        }}></div>
    </div>
);

const FranceFlag = () => (
    <div className="w-5 h-3 bg-gradient-to-r from-blue-500 via-white to-red-500 rounded-sm border"></div>
);

const ItalyFlag = () => (
    <div className="w-5 h-3 bg-gradient-to-r from-green-500 via-white to-red-500 rounded-sm border"></div>
);

const SpainFlag = () => (
    <div className="w-5 h-3 bg-red-500 rounded-sm border relative">
        <div className="absolute inset-y-0 inset-x-4 border-l border-r border-yellow-400"></div>
    </div>
);

const NavigationRow = () => {
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [isShippingOpen, setIsShippingOpen] = useState(false);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12">
                {/* Left side - Navigation links with hamburger */}
                <div className="flex items-center space-x-4">
                    {/* Hamburger Button for mobile */}
                    <button className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
                        <MenuIcon />
                    </button>

                    <nav className="flex items-center space-x-6 text-sm">
                        {/* All Category with hamburger icon on desktop */}
                        <div className="flex items-center space-x-2">
                            <button className="hidden lg:flex p-1 rounded hover:bg-gray-100 transition-colors duration-200">
                                <MenuIcon />
                            </button>
                            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
                                All category
                            </a>
                        </div>

                        {/* Other navigation links */}
                        <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 hidden sm:block">
                            Hot offers
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 hidden sm:block">
                            Gift boxes
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 hidden md:block">
                            Projects
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 hidden md:block">
                            Menu item
                        </a>

                        {/* Help Dropdown */}
                        <div className="relative">
                            <button
                                className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                                onClick={() => setIsHelpOpen(!isHelpOpen)}
                            >
                                <span>Help</span>
                                <ChevronDownIcon />
                            </button>

                            {/* Dropdown Menu */}
                            {isHelpOpen && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                                        Help Center
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                                        Contact Support
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                                        FAQs
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                                        Shipping Info
                                    </a>
                                </div>
                            )}
                        </div>
                    </nav>
                </div>

                {/* Right side - Language, Currency, Shipping */}
                <div className="flex items-center space-x-6 text-sm">
                    {/* Language & Currency Dropdown */}
                    <div className="relative">
                        <button
                            className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                        >
                            <span>English, USD</span>
                            <ChevronDownIcon />
                        </button>

                        {/* Dropdown Menu */}
                        {isLanguageOpen && (
                            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                <div className="px-4 py-2 text-xs text-gray-500 uppercase font-semibold">Language</div>
                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between">
                                    English
                                    <span className="text-green-500 text-xs">✓</span>
                                </button>
                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                                    Español
                                </button>
                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                                    Français
                                </button>
                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                                    Deutsch
                                </button>

                                <div className="border-t my-2"></div>

                                <div className="px-4 py-2 text-xs text-gray-500 uppercase font-semibold">Currency</div>
                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between">
                                    USD - US Dollar
                                    <span className="text-green-500 text-xs">✓</span>
                                </button>
                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                                    EUR - Euro
                                </button>
                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                                    GBP - British Pound
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Shipping Dropdown */}
                    <div className="relative">
                        <button
                            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                            onClick={() => setIsShippingOpen(!isShippingOpen)}
                        >
                            <GermanyFlag />
                            <span>Ship to</span>
                            <ChevronDownIcon />
                        </button>

                        {/* Dropdown Menu */}
                        {isShippingOpen && (
                            <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                <div className="px-4 py-2 text-xs text-gray-500 uppercase font-semibold">Ship to</div>

                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-3">
                                    <GermanyFlag />
                                    <span>Germany</span>
                                    <span className="text-green-500 text-xs ml-auto">✓</span>
                                </button>

                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-3">
                                    <USAFlag />
                                    <span>United States</span>
                                </button>

                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-3">
                                    <UKFlag />
                                    <span>United Kingdom</span>
                                </button>

                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-3">
                                    <FranceFlag />
                                    <span>France</span>
                                </button>

                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-3">
                                    <ItalyFlag />
                                    <span>Italy</span>
                                </button>

                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-3">
                                    <SpainFlag />
                                    <span>Spain</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Navbar = () => (
    <header className="bg-white border-b shadow-sm">
        {/* First Row: Brand, Search, Icons */}
        <div className="border-b border-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Brand */}
                    <div className="flex-shrink-0">
                        <img
                            src="/logo-colored.svg"
                            alt="Brand Logo"
                            className="h-10 w-auto"
                        />
                    </div>


                    {/* Search Bar */}
                    {/* SEARCH BAR SECTION */}
                    <div className="flex-1 max-w-2xl mx-8 flex">

                        {/* Search Input */}
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <SearchIcon className="w-5 h-5 text-gray-400" />
                            </div>

                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full border border-gray-300 rounded-l-lg py-3 pl-10 pr-4 text-sm 
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Category Dropdown */}
                        <select
                            className="border border-gray-300 border-l-0 py-3 px-3 text-sm text-gray-700
               focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option>All category</option>
                            <option>Electronics</option>
                            <option>Fashion</option>
                            <option>Sports</option>
                        </select>

                        {/* Search Button */}
                        <button className="bg-blue-600 text-white px-6 rounded-r-lg text-sm font-medium hover:bg-blue-700">
                            Search
                        </button>

                    </div>

                    {/* Icons */}
                    <div className="flex items-center space-x-6">
                        <button className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 group">
                            <UserIcon />
                            <span className="text-xs mt-1 group-hover:text-blue-600">Profile</span>
                        </button>
                        <button className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 group">
                            <MessageIcon />
                            <span className="text-xs mt-1 group-hover:text-blue-600">Message</span>
                        </button>
                        <button className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 group">
                            <OrdersIcon />
                            <span className="text-xs mt-1 group-hover:text-blue-600">Orders</span>
                        </button>
                        <button className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 group relative">
                            <CartIcon />
                            <span className="text-xs mt-1 group-hover:text-blue-600">Cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Second Row: Navigation with all features */}
        <NavigationRow />
    </header>
);

const HeroSection = () => {
    const categories = [
        "Automobiles",
        "Clothes and wear",
        "Home interiors",
        "Computer and tech",
        "Tools, equipments",
        "Sports and outdoor",
        "Animal and pets",
        "Machinery tools",
        "More category",
    ];

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mt-6 p-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-6">

                    {/* LEFT SIDEBAR */}
                    <div className="w-full lg:w-52">
                        <ul className="space-y-1">
                            {categories.map((cat, i) => (
                                <li key={i}>
                                    <a
                                        href="#"
                                        className={`block px-4 py-2 rounded-lg text-sm font-medium
                                            ${i === 0
                                                ? "bg-blue-50 text-blue-600"
                                                : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                                            }`}
                                    >
                                        {cat}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CENTER HERO BANNER */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                            {/* MAIN HERO (center big banner) */}
                            <div className="lg:col-span-2">
                                <div
                                    className="p-10 h-full min-h-80 flex items-center overflow-hidden bg-cover bg-center"
                                    style={{
                                        backgroundImage: "url('/15bee8c1b9d77e50133ea130b3270887efd96310.png')"
                                    }}
                                >
                                    <div className="max-w-sm">
                                        <p className="text-xl text-gray-800">Latest trending</p>
                                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                            Electronic items
                                        </h2>

                                        <button className="bg-white text-gray-700 px-6 py-2 rounded-lg font-medium border hover:bg-gray-100">
                                            Learn more
                                        </button>
                                    </div>
                                </div>
                            </div>


                            {/* RIGHT SIDE CARDS */}
                            <div className="space-y-6">

                                {/* USER CARD */}
                                <div className="rounded-xl border border-gray-200 shadow-sm p-4 bg-[#F0F8FF]">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <UserIcon className="w-6 h-6 text-blue-600" />
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-800">Hi, user</h3>
                                            <p className="text-xs text-gray-500">Let’s get started</p>
                                        </div>
                                    </div>

                                    <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700">
                                        Join now
                                    </button>

                                    <button className="w-full mt-2 border border-gray-300 py-2.5 rounded-lg text-sm font-medium hover:border-blue-600 hover:text-blue-600">
                                        Log in
                                    </button>
                                </div>

                                {/* PROMO CARD 1 */}
                                <div className="rounded-xl p-5 text-white bg-[#FF9933]">
                                    <p className="text-sm font-medium leading-5">
                                        Get US $10 off with a new supplier
                                    </p>
                                </div>

                                {/* PROMO CARD 2 */}
                                <div className="rounded-xl p-5 text-white bg-[#55BDC3]">
                                    <p className="text-sm font-medium leading-5">
                                        Send quotes with supplier preferences
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

// Rest of the components remain the same as in the previous version
const DealsRow = () => {
    const deals = [
        { title: "Smart watches", tag: "-25%", img: "/9d00665ee4b654e7de1ac596c31da4b9f1994793.png" },
        { title: "Laptops", tag: "-15%", img: "/f16c3be367d46067797d63f72c5d238bab2c834f.png" },
        { title: "GoPro cameras", tag: "-40%", img: "/260c7a4b2c0a4a3071479d3ea04dbef308c19301.png" },
        { title: "Headphones", tag: "-25%", img: "/fd01d17a7844418a11051c24070081697c1e9a58.png" },
        { title: "Canon cameras", tag: "-25%", img: "/ebb1aca726e944afe4e9b344a9d08d2cdf13f6ac.png" },
    ];

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mt-6 p-6">

            {/* MAIN ROW → LEFT (text + timer) | RIGHT (cards) */}
            <div className="flex">

                {/* LEFT SIDE */}
                <div className="w-1/4 pr-6">
                    <h4 className="font-semibold text-xl text-gray-900">Deals and offers</h4>
                    <p className="text-sm text-gray-500 mt-1">Hygiene equipments</p>

                    {/* TIMER BELOW TITLE */}
                    <div className="flex items-center space-x-2 mt-4">
                        {["04", "13", "34", "56"].map((t, i) => (
                            <div key={i} className="bg-gray-700 px-4 py-2 rounded text-center">
                                <div className="font-semibold text-gray-100">{t}</div>
                                <div className="text-xs text-gray-100">
                                    {["Days", "Hour", "Min", "Sec"][i]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE → PRODUCT CARDS */}
                <div className="w-3/4 grid grid-cols-5 gap-4">
                    {deals.map((d, i) => (
                        <div key={i} className="text-center">
                            <div className="h-32 flex items-center justify-center">
                                <img src={d.img} alt={d.title} className="h-24 object-contain" />
                            </div>

                            <div className="text-sm text-gray-800 mt-2">{d.title}</div>

                            <div className="flex justify-center mt-1">
                                <span className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
                                    {d.tag}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

const SectionRow = ({ title, subtitle, image, items }) => {
    return (
        <div className="bg-white rounded-xl border border-gray-300 shadow-sm mt-6 p-0">

            {/* MAIN WRAPPER – 2 COLUMNS */}
            <div className="grid grid-cols-12">

                {/* LEFT COLUMN with full background image */}
                <div
                    className="col-span-4 rounded-l-xl p-6 flex flex-col justify-between relative bg-cover bg-center bg-no-repeat opacity-70 select-none pointer-events-none"
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                >
                    {/* Overlay if needed */}
                    <div className="absolute inset-0 bg-white/0 rounded-l-xl"></div>

                    <div className="relative z-10">
                        <h2 className="text-xl font-semibold text-gray-900 leading-snug">
                            {title}
                        </h2>

                        <button className="mt-4 bg-white text-gray-700 px-4 py-2 rounded-md shadow hover:bg-gray-100">
                            Source now
                        </button>
                    </div>
                </div>


                {/* RIGHT COLUMN (8 ITEMS GRID) */}
                <div className="col-span-8 p-4">
                    <div className="grid grid-cols-4 gap-4">

                        {items.map((it, idx) => (
                            <div key={idx} className="border-b border-r last:border-r-0 pb-4 pr-4">

                                <div className="h-20 flex items-center justify-center mb-3">
                                    <img src={it.img} alt={it.title} className="h-16 object-contain" />
                                </div>

                                <div className="text-sm text-gray-800 font-medium">{it.title}</div>
                                <div className="text-xs text-gray-500">From USD {it.from}</div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};


const QuoteBanner = () => (
    <div
        className="relative rounded-xl mt-6 overflow-hidden shadow-lg"
        style={{
            background: "linear-gradient(94.99deg, #2C7CF1 7.19%, rgba(0, 209, 255, 0.5) 89.49%)",
        }}
    >

        {/* DULL BACKGROUND IMAGE */}
        <img
            src={"/mnt/data/Screenshot (276).png"}
            alt="warehouse"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        {/* MAIN CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 p-10">

            {/* LEFT TEXT SECTION */}
            <div className="lg:col-span-2 text-white">
                <h3 className="text-3xl font-bold leading-tight">
                    An easy way to send requests to all suppliers
                </h3>

                <p className="mt-4 text-blue-100 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt.
                </p>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white rounded-xl p-6 text-black shadow-2xl">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    What item you need?
                </label>

                <input
                    className="w-full border border-gray-300 rounded-lg py-3 px-4 text-sm mb-4 
                               focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter product name"
                />

                <label className="block text-sm font-medium text-gray-700 mb-2">Details</label>

                <textarea
                    className="w-full border border-gray-300 rounded-lg py-3 px-4 text-sm mb-4
                               focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    placeholder="Enter product details and specifications"
                ></textarea>

                <div className="mt-4">

                    {/* Quantity + Dropdown in one row */}
                    <div className="flex items-center space-x-4 mb-4">

                        {/* Quantity */}
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">Qty:</span>
                            <input
                                type="number"
                                className="w-20 border border-gray-300 rounded-lg py-2 px-3 text-sm 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                                defaultValue="1"
                            />
                        </div>

                        {/* Dropdown */}
                        <select
                            className="border border-gray-300 rounded-lg py-2 px-3 text-sm 
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option>Pcs</option>
                            <option>Kg</option>
                            <option>Box</option>
                            <option>Carton</option>
                        </select>

                    </div>

                    {/* Button below */}
                    <button
                        className="w-full bg-blue-500 text-white rounded-lg py-3 text-sm font-medium
               hover:bg-blue-600 transition shadow"
                    >
                        Send inquiry
                    </button>
                </div>
            </div>
        </div>
    </div>
);


const RecommendedGrid = () => {
    const items = new Array(10).fill(0).map((_, i) => ({
        id: i,
        title: ["T-shirts with multiple colors, for men", "Jeans shorts for men blue color", "Brown winter coat medium size", "Jeans bag for travel for men", "Leather wallet", "Canon camera black, 100x zoom", "Headset for gaming with mic", "Smartwatch silver color modern", "Blue wallet for men leather metarfial", "Jeans bag for travel for men"][i % 10],
        price: ["$10.30", "$10.30", "$12.50", "$34.00", "$99.00", "$9.99", "$8.99", "$10.30", "$10.30", "$80.95"][i % 10],

        img: [
            "/66ac8758b171e503e38e7b8c0a5fa03996d5d467.png",
            "/a14ab6ac18aa7b0da8ec069e90fab9443221e2f2.jpg",
            "/b720dd65fcc6274edfb7e97f682185ec460b6d4f.png",
            "/3e0d988a895e1e83befccaeafc962783f0de80c5.png",
            "/deea14d78e68b15c28eb29234224b8b2f71d5eb5.png",
            "/8ef134a2fbdc1fec81bd703736016e62fddab16b.png",
            "/37220adadb935c4b51e951193ddd1064f61e7b77.png",
            "/deea14d78e68b15c28eb29234224b8b2f71d5eb5.png",
            "/a542fa1c1ebac249f8cba9ff49b0a3c5c89dfbc7 (1).png",
            "/7984cd83b66e289400004efec8d3c212c576efd7.png"
        ][i % 10]
    }));

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mt-6 p-6">
            <h4 className="font-semibold text-xl text-gray-800 mb-6">Recommended items</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">

                {items.map((it) => (
                    <div
                        key={it.id}
                        className="border border-gray-200 rounded-xl p-4 text-center bg-white 
                                   hover:shadow-md hover:border-blue-200 transition-all duration-200 group"
                    >
                        <div className="h-36 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-3 
                                        flex items-center justify-center">

                            <img
                                src={it.img}
                                alt={it.title}
                                className="h-24 object-contain group-hover:scale-105 transition-transform duration-200"
                            />
                        </div>

                        <div className="text-lg font-bold text-gray-900 mb-1">{it.price}</div>
                        <div className="text-sm text-gray-500 line-clamp-2">{it.title} description</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const services = [
    {
        title: "Source from Industry Hubs",
        image: "/b564a957ce3a966c5d76f6c21ddcaeba336dd251.png",
        icon: "🔍",
    },
    {
        title: "Customize Your Products",
        image: "/4b08c60c3829236b56ad902eb0d7bc9954d83888.png",
        icon: "📄",
    },
    {
        title: "Fast, reliable shipping by ocean or air",
        image: "/1d9d9dbe3e097f229ff7711c3aefb5b0673a2278.png",
        icon: "✈️",
    },
    {
        title: "Product monitoring and inspection",
        image: "/0c52058c7fecb736fb193ed3a0a046668cf87a58.png",
        icon: "🛡️",
    },
];

const suppliers = [
    {
        country: "Arabic Emirates",
        flag: "https://cdn.jsdelivr.net/npm/country-flag-icons/3x2/AE.svg",
        website: "shopname.ae"
    },
    {
        country: "Australia",
        flag: "https://cdn.jsdelivr.net/npm/country-flag-icons/3x2/AU.svg",
        website: "shopname.au"
    },
    {
        country: "United States",
        flag: "https://cdn.jsdelivr.net/npm/country-flag-icons/3x2/US.svg",
        website: "shopname.us"
    },
    {
        country: "Russia",
        flag: "https://cdn.jsdelivr.net/npm/country-flag-icons/3x2/RU.svg",
        website: "shopname.ru"
    },
    {
        country: "Denmark",
        flag: "https://cdn.jsdelivr.net/npm/country-flag-icons/3x2/DK.svg",
        website: "denmark.com.dk"
    },
    {
        country: "France",
        flag: "https://cdn.jsdelivr.net/npm/country-flag-icons/3x2/FR.svg",
        website: "shopname.fr"
    },
    {
        country: "Italy",
        flag: "https://cdn.jsdelivr.net/npm/country-flag-icons/3x2/IT.svg",
        website: "shopname.it"
    },
    {
        country: "Great Britain",
        flag: "https://cdn.jsdelivr.net/npm/country-flag-icons/3x2/GB.svg",
        website: "shopname.co.uk"
    },
];



const ExtraSection = () => {
    return (
        <div className="w-full bg-white">
            {/* ---- Extra Services ---- */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-2xl font-semibold mb-6">Our extra services</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {services.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                            <img src={item.image} className="w-full h-40 object-cover" />
                            <div className="p-4 flex items-center justify-between">
                                <h3 className="text-sm font-medium">{item.title}</h3>
                                <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-full">
                                    <span className="text-lg">{item.icon}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ---- Suppliers by Region ---- */}
            <div className="max-w-6xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-semibold mb-8">Suppliers by region</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {suppliers.map((s, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <img src={s.flag} alt={s.country} className="w-6 h-4 object-cover" />
                            <div>
                                <div className="font-medium">{s.country}</div>
                                <div className="text-gray-500 text-sm">{s.website}</div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>

            {/* ---- Newsletter ---- */}
            <div className="bg-gray-100 py-10 mt-10">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-xl font-semibold">Subscribe on our newsletter</h2>
                    <p className="text-gray-500 mt-2">
                        Get daily news on upcoming offers from many suppliers all over the world
                    </p>

                    <div className="mt-6 flex justify-center">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-64 px-3 py-2 border rounded-l-lg outline-none"
                        />
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Footer = () => (
    <footer className="mt-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-gray-600">
            <div className="lg:col-span-2">
                <div className="text-blue-600 font-bold text-2xl mb-4">Brand</div>
                <p className="text-gray-500 leading-relaxed max-w-md">
                    Best information about the company goes here but now lorem ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className="flex space-x-4 mt-6">
                    {["💬", "🐦", "📘", "📷", "🎵"].map((icon, i) => (
                        <div key={i} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors duration-200 cursor-pointer">
                            {icon}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h5 className="font-semibold text-gray-800 mb-4">About</h5>
                <ul className="space-y-3">
                    {["About Us", "Find store", "Categories", "Blogs"].map((item, i) => (
                        <li key={i}>
                            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h5 className="font-semibold text-gray-800 mb-4">Information</h5>
                <ul className="space-y-3">
                    {["Help Center", "Money Refund", "Shipping", "Contact us"].map((item, i) => (
                        <li key={i}>
                            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h5 className="font-semibold text-gray-800 mb-4">For users</h5>
                <ul className="space-y-3">
                    {["Login", "Register", "Settings", "My Orders"].map((item, i) => (
                        <li key={i}>
                            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
            <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
                © 2024 Brand. All rights reserved.
            </div>
        </div>
    </footer>
);

export default function MainPageSingleFile() {

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main>


                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <HeroSection />
                    <DealsRow />
                    <SectionRow
                        title="Home and outdoor"
                        image="/e569161444be4cfea24366cb3d27cb335105ed84.jpg"
                        items={[
                            { title: "Soft chairs", from: 19, img: "/4450cf999324f0c42ef6175c1e8fd94fcdaea111.png" },
                            { title: "Sofa & chair", from: 19, img: "/e7609aa3afe3483e736054358d53f2f8797b4546.png" },
                            { title: "Kitchen dishes", from: 19, img: "/de013dbdda0ec19b2f735896bd129bb83cae628f.png" },
                            { title: "Smart watches", from: 19, img: "/a542fa1c1ebac249f8cba9ff49b0a3c5c89dfbc7 (1).png" },
                            { title: "Kitchen mixer", from: 100, img: "/67ecd6b2d628afe6f0f52ecee5cf9460f0d0d69d.png" },
                            { title: "Blenders", from: 39, img: "/649567d50c25ac335a1e2cc7d8d3584a3592fbbf.png" },
                            { title: "Home appliance", from: 19, img: "/a3565d31ff34eb5b476f6a97fc3fde243beb9597.jpg" },
                            { title: "Coffee maker", from: 10, img: "/37fcfe74e17c636fb7cc35743a81e426e6e52604.png" },
                        ]}
                    />
                    <SectionRow
                        title="Consumer electronics and gadgets"
                        image="/2899a4374c8412945ece65003461e7d1b12857d0.png"
                        items={[
                            { title: "Smart watches", from: 19, img: "/9d00665ee4b654e7de1ac596c31da4b9f1994793.png" },
                            { title: "Cameras", from: 89, img: "/260c7a4b2c0a4a3071479d3ea04dbef308c19301.png" },
                            { title: "Headphones", from: 10, img: "/37220adadb935c4b51e951193ddd1064f61e7b77.png" },
                            { title: "Smart watches", from: 90, img: "/7984cd83b66e289400004efec8d3c212c576efd7.png" },
                            { title: "Gaming set", from: 35, img: "/fd01d17a7844418a11051c24070081697c1e9a58.png" },
                            { title: "Laptops & PC", from: 340, img: "/f16c3be367d46067797d63f72c5d238bab2c834f.png" },
                            { title: "Smartphones", from: 19, img: "/d5df9baf5b845d5b649289426578b53ebaef4c65.png" },
                            { title: "Electric kettle", from: 240, img: "/01ad73c0a2d288ce5bd52ddfac2945120df5102b.png" },
                        ]}
                    />

                    <QuoteBanner />
                    <RecommendedGrid />
                    <ExtraSection />
                    <Footer />
                </div>
            </main>
        </div>
    );
}