import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary pt-16 pb-8 text-white font-sans mt-10">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
           {/* Logo & Contact */}
           <div className="flex flex-col gap-8 max-w-sm">
              <div className="flex items-center gap-2">
                 <img src="./assets/icons/22-495.svg" alt="MegaMart" className="h-10 w-auto"/>
              </div>
              <div className="flex flex-col gap-6">
                 <div className="flex flex-col gap-4">
                     <h3 className="text-xl font-bold">Contact Us</h3>
                     <div className="flex flex-col gap-3 text-white/90 text-sm">
                        <p className="flex items-center gap-3">
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                           <span className="flex flex-col">
                               <span className="text-xs opacity-70">Whats App</span>
                               <span className="font-semibold text-base">+1 202-918-2132</span>
                           </span>
                        </p>
                        <p className="flex items-center gap-3">
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                           <span className="flex flex-col">
                               <span className="text-xs opacity-70">Call Us</span>
                               <span className="font-semibold text-base">+1 202-918-2132</span>
                           </span>
                        </p>
                     </div>
                 </div>
                 
                 <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold">Download App</h3>
                    <div className="flex gap-4">
                        <div className="bg-black/20 rounded-lg p-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-black/30 transition-colors border border-white/10">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 12.5c0-2.5 2-3.6 2.1-3.7-.1-.2-.8-2.6-3-2.6-1-.1-2.6.6-3.1.6-.5 0-2.3-1-3.6-.5-1.9.1-3.6 1.8-3.6 4.3 0 3.3 3 7.5 5.7 7.5 1.1 0 1.5-.7 2.8-.7 1.3 0 1.6.7 2.8.7 1.8 0 3-2.9 3-2.9-1.8-.8-2.3-2-2.3-3.7zM14.9 5.5c.8-1 1.4-2.4 1.2-3.6-1.2.1-2.7.8-3.5 1.8-.8.9-1.5 2.4-1.3 3.6 1.3.1 2.8-.7 3.6-1.8z"/></svg>
                        <div className="flex flex-col leading-tight">
                            <span className="text-[10px]">Download on the</span>
                            <span className="text-sm font-bold">App Store</span>
                        </div>
                        </div>
                        <div className="bg-black/20 rounded-lg p-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-black/30 transition-colors border border-white/10">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.77,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.3,13.08L21.42,12.45C21.88,12.2 22.13,11.66 22,11.13C22,10.74 21.8,10.38 21.42,10.16L20.3,9.53L17.41,11.4L17.41,12.6L20.3,13.08M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88Z"/></svg>
                        <div className="flex flex-col leading-tight">
                            <span className="text-[10px]">Get it on</span>
                            <span className="text-sm font-bold">Google Play</span>
                        </div>
                        </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Links */}
           <div className="grid grid-cols-2 gap-10 lg:gap-20 flex-1 lg:justify-end">
              <div className="flex flex-col gap-5">
                 <h3 className="font-bold text-lg border-b-2 border-white/20 pb-2 w-fit pr-10">Most Popular Categories</h3>
                 <ul className="flex flex-col gap-3 text-sm text-white/80">
                    <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">Staples</li>
                    <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">Beverages</li>
                    <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">Personal Care</li>
                    <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">Home Care</li>
                    <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">Baby Care</li>
                    <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">Vegetables & Fruits</li>
                    <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">Snacks & Foods</li>
                    <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">Dairy & Bakery</li>
                 </ul>
              </div>
              <div className="flex flex-col gap-5">
                 <h3 className="font-bold text-lg border-b-2 border-white/20 pb-2 w-fit pr-10">Customer Services</h3>
                 <ul className="flex flex-col gap-3 text-sm text-white/80">
                    <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">About Us</li>
                    <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">Terms & Conditions</li>
                    <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">FAQ</li>
                    <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">Privacy Policy</li>
                    <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">E-waste Policy</li>
                    <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">Cancellation & Return Policy</li>
                 </ul>
              </div>
           </div>
        </div>

        <div className="border-t border-white/20 mt-16 pt-8 text-center text-sm text-white/60">
           © 2022 All rights reserved. Reliance Retail Ltd.
        </div>
      </div>
    </footer>
  );
};
