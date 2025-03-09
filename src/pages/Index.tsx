
import React, { useEffect } from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import BookingForm from "@/components/booking/BookingForm";
import Benefits from "@/components/sections/Benefits";
import TrustElements from "@/components/sections/TrustElements";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";
import { MessageSquare, ChevronUp, Users, Briefcase } from "lucide-react";

const Index = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    
    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const animateElements = document.querySelectorAll(".animate-on-scroll");
    
    animateElements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <Hero />
      
      {/* Booking Form */}
      <section className="relative -mt-20 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <BookingForm className="animate-scale-in shadow-xl" />
          </div>
        </div>
      </section>
      
      <Benefits />
      
      {/* Vehicle Showcase */}
      <section id="vehicles" className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
            <h2 className="heading-lg mb-4 text-navy">Our Premium Fleet</h2>
            <p className="text-lg text-gray-600">
              Choose the perfect vehicle for your journey between Schiphol Airport and Giethoorn.
              All our vehicles are maintained to the highest standards of comfort and safety.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card card-hover animate-on-scroll opacity-0">
              <div className="aspect-video bg-silver-light rounded-t-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2936&auto=format&fit=crop" 
                  alt="Business Sedan" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-sm mb-2 text-navy">Business Sedan</h3>
                <p className="text-gray-600 mb-4">
                  Comfortable and elegant sedan ideal for up to 3 passengers with standard luggage.
                  Perfect for business travelers or small families.
                </p>
                
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>3 passengers</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" />
                    <span>3 luggage</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-navy">€199</p>
                  <button className="btn-outline py-2">Select</button>
                </div>
              </div>
            </div>
            
            <div className="card card-hover animate-on-scroll opacity-0" style={{ animationDelay: "0.1s" }}>
              <div className="aspect-video bg-silver-light rounded-t-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2942&auto=format&fit=crop" 
                  alt="Comfort Van" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-sm mb-2 text-navy">Comfort Van</h3>
                <p className="text-gray-600 mb-4">
                  Spacious van with ample room for up to 6 passengers and their luggage.
                  Ideal for larger families or groups traveling together.
                </p>
                
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>6 passengers</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" />
                    <span>6 luggage</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-navy">€249</p>
                  <button className="btn-outline py-2">Select</button>
                </div>
              </div>
            </div>
            
            <div className="card card-hover animate-on-scroll opacity-0" style={{ animationDelay: "0.2s" }}>
              <div className="aspect-video bg-silver-light rounded-t-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2940&auto=format&fit=crop" 
                  alt="Luxury Sedan" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-sm mb-2 text-navy">Luxury Sedan</h3>
                <p className="text-gray-600 mb-4">
                  Premium luxury vehicle offering exceptional comfort and style.
                  Includes enhanced amenities for a truly first-class experience.
                </p>
                
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>3 passengers</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" />
                    <span>3 luggage</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-navy">€299</p>
                  <button className="btn-outline py-2">Select</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <TrustElements />
      
      {/* Pricing Table */}
      <section id="pricing" className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
            <h2 className="heading-lg mb-4 text-navy">Transparent Pricing</h2>
            <p className="text-lg text-gray-600">
              Our fixed prices include all taxes, tolls, and fees. No hidden costs or surprises.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-premium overflow-hidden animate-on-scroll opacity-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="py-4 px-6 text-left">Vehicle Type</th>
                    <th className="py-4 px-6 text-left">One-Way</th>
                    <th className="py-4 px-6 text-left">Round-Trip</th>
                    <th className="py-4 px-6 text-left">Max. Passengers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-silver/20">
                    <td className="py-4 px-6 font-medium">Business Sedan</td>
                    <td className="py-4 px-6">€199</td>
                    <td className="py-4 px-6">€379 <span className="text-green-600 text-sm">(10% off)</span></td>
                    <td className="py-4 px-6">3</td>
                  </tr>
                  <tr className="border-b border-silver/20">
                    <td className="py-4 px-6 font-medium">Comfort Van</td>
                    <td className="py-4 px-6">€249</td>
                    <td className="py-4 px-6">€479 <span className="text-green-600 text-sm">(10% off)</span></td>
                    <td className="py-4 px-6">6</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Luxury Sedan</td>
                    <td className="py-4 px-6">€299</td>
                    <td className="py-4 px-6">€569 <span className="text-green-600 text-sm">(10% off)</span></td>
                    <td className="py-4 px-6">3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-8 text-center animate-on-scroll opacity-0">
            <p className="text-gray-600 mb-6">Special rates available for groups larger than 8 passengers. Contact us for a custom quote.</p>
            <div className="inline-block px-4 py-3 bg-silver-light rounded-lg border border-silver">
              <p className="text-navy font-medium">
                Journey Time: Approximately 90 minutes (depending on traffic conditions)
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <FAQ />
      
      {/* Call to Action */}
      <section className="py-20 bg-navy/90 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-scale-in">
            <h2 className="heading-lg mb-6">Ready to Book Your Premium Transfer?</h2>
            <p className="text-xl mb-8 text-white/90">
              Secure your journey between Schiphol Airport and Giethoorn today and travel with confidence.
            </p>
            <button onClick={() => {
              const bookingElement = document.getElementById("booking");
              if (bookingElement) {
                bookingElement.scrollIntoView({ behavior: "smooth" });
              }
            }} className="btn-primary text-lg py-4 px-8">
              Book Your Transfer Now
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Floating Help Button */}
      <button className="fixed bottom-8 right-8 z-40 bg-accent text-white rounded-full p-4 shadow-xl hover:bg-accent-light transition-colors">
        <MessageSquare className="h-6 w-6" />
      </button>
      
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 left-8 z-40 bg-white text-navy rounded-full p-4 shadow-xl hover:bg-silver-light transition-colors"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Index;
