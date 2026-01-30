import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full flex flex-col font-sans bg-white">
      {/* Top Bar */}
      <div className="bg-bg-light py-2 border-b border-border">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col md:flex-row justify-between items-center text-sm text-text-gray gap-2">
          <span>Welcome to worldwide Megamart!</span>
          <div className="flex gap-4 items-center overflow-x-auto max-w-full">
             <img src="./assets/icons/2-108.svg" alt="Deliver to" className="h-5 object-contain min-w-[100px]"/>
             <div className="h-4 w-px bg-gray-300 mx-2 hidden md:block"></div>
             <img src="./assets/icons/2-109.svg" alt="Track order" className="h-5 object-contain min-w-[80px]"/>
             <div className="h-4 w-px bg-gray-300 mx-2 hidden md:block"></div>
             <img src="./assets/icons/2-116.svg" alt="All Offers" className="h-5 object-contain min-w-[70px]"/>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="container mx-auto px-4 lg:px-20 py-6 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2 self-start lg:self-center">
           <div className="w-10 h-10 flex items-center justify-center">
             <img src="./assets/icons/2-135.svg" alt="Logo" className="w-full h-full object-contain"/>
           </div>
           <img src="./assets/icons/22-494.svg" alt="MegaMart" className="h-6 mt-1"/>
        </div>

        {/* Search */}
        <div className="flex-1 w-full lg:max-w-xl bg-bg-light rounded-lg flex items-center px-4 py-3 gap-3">
           <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
           <input type="text" placeholder="Search essentials, groceries and more..." className="bg-transparent border-none outline-none flex-1 text-sm placeholder-gray-400 text-text-dark w-full"/>
           <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6 font-semibold text-dark text-sm whitespace-nowrap self-end lg:self-center">
           <button className="flex items-center gap-2 hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              <span>Sign Up/Sign In</span>
           </button>
           <div className="h-6 w-px bg-gray-300 hidden md:block"></div>
           <button className="flex items-center gap-2 hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span>Cart</span>
           </button>
        </div>
      </div>
      
      {/* Categories Divider */}
      <div className="border-b border-border w-full"></div>
      
      {/* Categories Nav */}
       <div className="container mx-auto px-4 lg:px-20 py-3 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 lg:gap-8 text-sm font-semibold text-text-gray whitespace-nowrap">
            {['Groceries', 'Premium Fruits', 'Home & Kitchen', 'Fashion', 'Electronics', 'Beauty', 'Home Improvement', 'Sports, Toys & Luggage'].map((cat, i) => (
                <div key={i} className="flex items-center gap-1 cursor-pointer hover:text-primary hover:bg-blue-50 px-3 py-1 rounded-full transition-colors">
                    {cat}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
            ))}
          </div>
       </div>
    </header>
  );
};
