import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Features />

        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}