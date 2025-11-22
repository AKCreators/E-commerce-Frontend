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
                        <div className="text-blue-600 font-bold text-2xl">Brand</div>
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
        { title: "Smart watches", price: "$10.30", tag: "-25%", color: "bg-red-500" },
        { title: "Laptops", price: "$129.00", tag: "-15%", color: "bg-green-500" },
        { title: "GoPro cameras", price: "$399.00", tag: "-40%", color: "bg-purple-500" },
        { title: "Headphones", price: "$49.00", tag: "-25%", color: "bg-blue-500" },
        { title: "Canon cameras", price: "$299.00", tag: "-25%", color: "bg-orange-500" },
    ];

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mt-6 p-6">
            <div className="flex items-center justify-between mb-6">
                <h4 className="font-semibold text-xl text-gray-800">Deals and offers</h4>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>Ends in:</span>
                    <div className="flex space-x-1">
                        <span className="bg-gray-100 px-2 py-1 rounded">04</span>
                        <span>:</span>
                        <span className="bg-gray-100 px-2 py-1 rounded">12</span>
                        <span>:</span>
                        <span className="bg-gray-100 px-2 py-1 rounded">45</span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {deals.map((d, i) => (
                    <div key={i} className="text-center group hover:scale-105 transition-transform duration-200">
                        <div className="relative">
                            <div className="h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center group-hover:shadow-md transition-shadow duration-200">
                                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center">
                                    <span className="text-2xl">⌚</span>
                                </div>
                            </div>
                            <div className={`absolute -top-2 -right-2 ${d.color} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                                {d.tag}
                            </div>
                        </div>
                        <div className="text-sm font-medium mt-3 text-gray-800">{d.title}</div>
                        <div className="text-lg font-bold text-gray-900 mt-1">{d.price}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SectionRow = ({ title, items }) => (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm mt-6 p-6">
        <div className="flex items-center justify-between mb-6">
            <h4 className="font-semibold text-xl text-gray-800">{title}</h4>
            <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 transition-colors duration-200">
                <span>Source now</span>
                <span>→</span>
            </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {items.map((it, idx) => (
                <div key={idx} className="text-center group hover:scale-105 transition-transform duration-200">
                    <div className="h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-3 flex items-center justify-center group-hover:shadow-md transition-shadow duration-200">
                        <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
                            <span className="text-xl">📦</span>
                        </div>
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{it.title}</div>
                    <div className="text-xs text-gray-400 mt-1">From USD {it.from}</div>
                </div>
            ))}
        </div>
    </div>
);

const QuoteBanner = () => (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl mt-6 p-8 text-white shadow-lg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
                <h3 className="text-3xl font-bold leading-tight">An easy way to send requests to all suppliers</h3>
                <p className="mt-4 text-blue-100 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                </p>
            </div>

            <div>
                <div className="bg-white rounded-xl p-6 text-black shadow-2xl">
                    <label className="block text-sm font-medium text-gray-700 mb-2">What item you need?</label>
                    <input
                        className="w-full border border-gray-300 rounded-lg py-3 px-4 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter product name"
                    />
                    <label className="block text-sm font-medium text-gray-700 mb-2">Details</label>
                    <textarea
                        className="w-full border border-gray-300 rounded-lg py-3 px-4 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows={3}
                        placeholder="Enter product details and specifications"
                    ></textarea>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">Qty:</span>
                            <input
                                type="number"
                                className="w-20 border border-gray-300 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                defaultValue="1"
                            />
                        </div>
                        <button className="bg-blue-500 text-white rounded-lg px-6 py-3 text-sm font-medium hover:bg-blue-600 transition-colors duration-200 shadow-sm">
                            Send inquiry
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const RecommendedGrid = () => {
    const items = new Array(10).fill(0).map((_, i) => ({
        id: i,
        title: ["T-shirt", "Jacket", "Suit", "Wallet", "Backpack"][i % 5],
        price: ["$10.30", "$12.50", "$34.00", "$99.00", "$9.99"][i % 5],
        rating: (4 + Math.random()).toFixed(1),
    }));

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mt-6 p-6">
            <h4 className="font-semibold text-xl text-gray-800 mb-6">Recommended items</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {items.map((it) => (
                    <div key={it.id} className="border border-gray-200 rounded-xl p-4 text-center bg-white hover:shadow-md hover:border-blue-200 transition-all duration-200 group">
                        <div className="h-36 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-3 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                            <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center">
                                <span className="text-2xl">👕</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center space-x-1 mb-2">
                            <StarIcon />
                            <span className="text-xs text-gray-600">{it.rating}</span>
                        </div>
                        <div className="text-lg font-bold text-gray-900 mb-1">{it.price}</div>
                        <div className="text-sm text-gray-500 line-clamp-2">{it.title} description</div>
                    </div>
                ))}
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
    const sectionItems = new Array(6).fill(0).map((_, i) => ({
        title: `Product ${i + 1}`,
        from: 19 + i
    }));

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main>


                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <HeroSection />
                    <DealsRow />
                    <SectionRow title="Home and outdoor" items={sectionItems} />
                    <SectionRow title="Consumer electronics and gadgets" items={sectionItems} />
                    <QuoteBanner />
                    <RecommendedGrid />
                    <Footer />
                </div>
            </main>
        </div>
    );
}