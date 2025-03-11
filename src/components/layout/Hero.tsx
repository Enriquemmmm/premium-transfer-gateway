
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToBooking = () => {
    const bookingElement = document.getElementById("booking");
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 to-navy/30 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2942&auto=format&fit=crop" 
          alt="Professional White Van on Dutch Road" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-20">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/10 text-sm font-medium mb-6">
            Schiphol Airport ↔ Giethoorn | 24/7 Service
          </div>
          
          <h1 className="heading-xl text-white mb-6">
            Private Transfer: Schiphol Airport to Giethoorn | Fixed Price €199
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
            Travel comfortably from Schiphol Airport to the picturesque village of Giethoorn, one of Holland's most beloved tourist destinations. Enjoy premium door-to-door service with professional drivers, free flight monitoring, and a 60-minute wait time included.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToBooking}
              className="btn-primary group"
            >
              Book Now
              <ArrowRight className="inline-block ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button 
              onClick={scrollToBooking}
              className="bg-white/10 backdrop-blur-sm text-white font-medium py-3 px-6 rounded-md 
                         transition-all duration-300 border border-white/20
                         hover:bg-white/20 focus:outline-none"
            >
              Get Instant Quote
            </button>
          </div>
          
          {/* Availability Ticker */}
          <div className="mt-12 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 inline-flex items-center">
            <div className="h-3 w-3 rounded-full bg-green-400 mr-3 animate-pulse"></div>
            <p className="text-white font-medium">
              Available today: <span className="font-normal">12 vehicles ready for booking</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
