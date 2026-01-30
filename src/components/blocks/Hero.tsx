import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="container mx-auto px-4 lg:px-20 py-8 font-sans">
      <div className="w-full bg-dark rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center px-8 py-12 md:px-16 md:py-20 min-h-[400px]">
        {/* Text Content */}
        <div className="z-10 flex flex-col gap-3 max-w-xl">
           <div className="text-xl lg:text-3xl font-light text-white mb-1">
             Best Deal Online on smart watches
           </div>
           <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
             SMART WEARABLE.
           </h1>
           <div className="text-2xl lg:text-3xl font-bold text-white mt-2">
              UP to 80% OFF
           </div>
           
           {/* Dots */}
           <div className="flex gap-3 mt-10">
              <div className="w-8 h-2 bg-white rounded-full cursor-pointer"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full cursor-pointer hover:bg-white transition-colors"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full cursor-pointer hover:bg-white transition-colors"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full cursor-pointer hover:bg-white transition-colors"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full cursor-pointer hover:bg-white transition-colors"></div>
           </div>
        </div>

        {/* Image */}
        <div className="absolute right-0 bottom-0 top-0 w-full md:w-1/2 flex items-center justify-center md:justify-end pr-0 md:pr-20 pointer-events-none">
           <img src="./assets/images/13-535.png" alt="Smart Wearable" className="h-[80%] md:h-[95%] w-auto object-contain drop-shadow-2xl transform translate-x-10 md:translate-x-0"/>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-[-100px] right-[-50px] w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-50px] left-[20%] w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </section>
  );
};
