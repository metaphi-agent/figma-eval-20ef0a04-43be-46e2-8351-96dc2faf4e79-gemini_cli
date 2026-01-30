import React from 'react';

const products = [
  { 
    id: 1, 
    name: 'Galaxy S22 Ultra', 
    price: '₹67999', 
    oldPrice: '₹85999', 
    save: '₹18000', 
    discount: '56% OFF', 
    image: './assets/images/22-471.png' 
  },
  { 
    id: 2, 
    name: 'Galaxy M13 (4GB | 64 GB)', 
    price: '₹10499', 
    oldPrice: '₹14999', 
    save: '₹4500', 
    discount: '56% OFF', 
    image: './assets/images/22-471.png' 
  },
   { 
    id: 3, 
    name: 'Galaxy M33 (4GB | 64 GB)', 
    price: '₹16999', 
    oldPrice: '₹24999', 
    save: '₹8000', 
    discount: '56% OFF', 
    image: './assets/images/22-471.png' 
  },
   { 
    id: 4, 
    name: 'Galaxy M53 (6GB | 128 GB)', 
    price: '₹31999', 
    oldPrice: '₹40999', 
    save: '₹9000', 
    discount: '56% OFF', 
    image: './assets/images/22-471.png' 
  },
   { 
    id: 5, 
    name: 'Galaxy S22 Ultra', 
    price: '₹67999', 
    oldPrice: '₹85999', 
    save: '₹18000', 
    discount: '56% OFF', 
    image: './assets/images/22-471.png' 
  },
];

export const ProductSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 lg:px-20 py-10 font-sans">
      <div className="flex justify-between items-center mb-6 border-b border-border pb-2">
        <h2 className="text-xl md:text-2xl font-bold text-text-gray">
          Grab the best deal on <span className="text-primary">Smartphones</span>
        </h2>
        <a href="#" className="text-dark font-semibold flex items-center gap-1 hover:text-primary transition-colors text-sm md:text-base">
          View All <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl border border-border hover:shadow-lg transition-shadow overflow-hidden relative flex flex-col h-full">
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-primary text-white text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1 rounded-bl-lg z-10">
               {product.discount}
            </div>

            {/* Image */}
            <div className="h-40 md:h-48 bg-bg-light flex items-center justify-center p-4">
               <img src={product.image} alt={product.name} className="h-full w-auto object-contain hover:scale-105 transition-transform duration-300 mix-blend-multiply"/>
            </div>

            {/* Content */}
            <div className="p-3 md:p-4 flex flex-col gap-1 flex-1">
               <h3 className="font-semibold text-dark text-sm md:text-base line-clamp-2 leading-tight">{product.name}</h3>
               <div className="flex flex-wrap items-baseline gap-2 mt-auto">
                 <span className="font-bold text-dark text-sm md:text-base">{product.price}</span>
                 <span className="text-xs text-text-gray line-through">{product.oldPrice}</span>
               </div>
               <div className="text-xs text-success font-semibold border-t border-border pt-2 mt-2">
                  Save - {product.save}
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
