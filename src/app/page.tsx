import React from 'react';
import HeroSection from './components/HeroSection';
import Courses from './components/Courses';
import WhyChooseUs from './components/ui/WhyChooseUs';
import TestimonialCards from './components/TestimonialCards';
import UpcomingWebinars from './components/UpcomingWebinars';
import ToolTip from './components/ToolTip';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Courses></Courses>
      <WhyChooseUs></WhyChooseUs>
      <TestimonialCards></TestimonialCards>
      <UpcomingWebinars/>
      <ToolTip/>
      <Footer/>
    </main>
    </>
  );
}
