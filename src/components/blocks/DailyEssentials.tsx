import React from 'react';

const essentials = [
  { id: 1, name: 'Daily Essentials', discount: 'UP to 50% OFF', image: './assets/images/22-259.png' },
  { id: 2, name: 'Vegitables', discount: 'UP to 50% OFF', image: './assets/images/22-261.png' },
  { id: 3, name: 'Fruits', discount: 'UP to 50% OFF', image: './assets/images/22-260.png' },
  { id: 4, name: 'Stawberry', discount: 'UP to 50% OFF', image: './assets/images/22-258.png' },
  { id: 5, name: 'Mango', discount: 'UP to 50% OFF', image: './assets/images/22-245.png' },
  { id: 6, name: 'Cherry', discount: 'UP to 50% OFF', image: './assets/images/22-244.png' },
];

export const DailyEssentials: React.FC = () => {
  return (
    <section className="container mx-auto px-4 lg:px-20 py-10 font-sans border-t border-border">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-text-gray">
          Daily <span className="text-primary">Essentials</span>
        </h2>
        <a href="#" className="text-dark font-semibold flex items-center gap-1 hover:text-primary transition-colors text-sm md:text-base">
          View All <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
         {essentials.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-2 group cursor-pointer">
               <div className="w-full aspect-square bg-bg-light rounded-2xl overflow-hidden relative flex items-center justify-center p-6 border border-transparent group-hover:border-border transition-colors shadow-sm group-hover:shadow-md">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"/>
               </div>
               <div className="text-center">
                  <h3 className="font-semibold text-text-gray group-hover:text-primary transition-colors">{item.name}</h3>
                  <p className="text-sm font-bold text-dark">{item.discount}</p>
               </div>
            </div>
         ))}
      </div>
    </section>
  );
};
