import React from 'react';
import { Header } from '../components/blocks/Header';
import { Hero } from '../components/blocks/Hero';
import { CategorySection } from '../components/blocks/CategorySection';
import { ProductSection } from '../components/blocks/ProductSection';
import { DailyEssentials } from '../components/blocks/DailyEssentials';
import { Footer } from '../components/blocks/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex flex-col gap-4">
        <Hero />
        <CategorySection />
        <ProductSection />
        <DailyEssentials />
      </main>
      <Footer />
    </div>
  );
}
