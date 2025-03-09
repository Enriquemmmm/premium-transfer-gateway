
import React from "react";
import { Star, Award, Shield, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReviewProps {
  text: string;
  author: string;
  rating: number;
  className?: string;
}

const Review: React.FC<ReviewProps> = ({ text, author, rating, className }) => {
  return (
    <div className={cn("card p-6 flex flex-col h-full", className)}>
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={cn(
              "h-5 w-5 mr-1", 
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            )} 
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4 flex-grow">{text}</p>
      <p className="font-medium text-navy">{author}</p>
    </div>
  );
};

const TrustElements = () => {
  const reviews = [
    {
      text: "Excellent service from start to finish. Our driver was professional and the vehicle was immaculate. Will definitely use this service again for our next visit to Giethoorn.",
      author: "Sarah J., United Kingdom",
      rating: 5
    },
    {
      text: "Very reliable and punctual. Despite our flight delay, the driver was waiting for us with a clear sign. The journey was comfortable and stress-free.",
      author: "Markus K., Germany",
      rating: 5
    },
    {
      text: "The booking process was simple and the communication was excellent. Our driver was friendly and provided interesting information about the Netherlands during our journey.",
      author: "Elena L., Italy",
      rating: 5
    },
    {
      text: "A premium service that's worth every euro. Clean vehicle, professional driver, and a smooth, comfortable ride to Giethoorn. Highly recommended!",
      author: "Thomas W., USA",
      rating: 5
    }
  ];
  
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-navy/5 rounded-full px-4 py-1 mb-4">
            <Award className="h-5 w-5 text-navy mr-2" />
            <span className="text-navy font-medium">Trusted by thousands of travelers</span>
          </div>
          <h2 className="heading-lg mb-4 text-navy">Why Our Customers Trust Us</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-bold text-navy">4.9/5</span>
            <span className="text-gray-600">based on 384 reviews</span>
          </div>
        </div>
        
        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reviews.map((review, i) => (
            <Review 
              key={i} 
              {...review} 
              className={`animate-fade-in [animation-delay:${i * 0.1}s]`}
            />
          ))}
        </div>
        
        {/* Trust Badges */}
        <div className="flex flex-col items-center">
          <h3 className="heading-sm mb-6 text-center text-navy">Trusted Partnerships & Certifications</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center w-full max-w-4xl animate-fade-in">
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-navy mb-3" />
              <p className="text-center font-medium text-navy">ISO 9001 Certified</p>
            </div>
            
            <div className="flex flex-col items-center">
              <img 
                src="https://www.schiphol.nl/static/homepage/favicon/mstile-144x144.png" 
                alt="Schiphol Partner" 
                className="h-12 w-auto mb-3"
              />
              <p className="text-center font-medium text-navy">Schiphol Official Partner</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-navy mb-3" />
              <p className="text-center font-medium text-navy">Netherlands Tourism Board</p>
            </div>
            
            <div className="flex flex-col items-center">
              <svg
                viewBox="0 0 512 512"
                className="h-12 w-12 text-navy mb-3 fill-current"
              >
                <path d="M104.2 124.12c-38.99 0-70.56 31.61-70.56 70.524 0 38.911 31.57 70.476 70.56 70.476 38.929 0 70.448-31.565 70.448-70.476 0-38.91-31.519-70.524-70.448-70.524zm303.72 0c-38.93 0-70.45 31.61-70.45 70.524 0 38.911 31.52 70.476 70.45 70.476 38.99 0 70.56-31.565 70.56-70.476 0-38.91-31.57-70.524-70.56-70.524zM255.99 140.6c-28.758 0-52.081 23.323-52.081 52.044 0 28.72 23.323 52.044 52.081 52.044 28.72 0 52.08-23.324 52.08-52.044.001-28.721-23.36-52.044-52.08-52.044zM104.12 283.2c-38.84 0-70.4 31.721-70.4 70.4 0 38.759 31.56 70.4 70.4 70.4 38.76 0 70.48-31.641 70.48-70.4 0-38.679-31.72-70.4-70.48-70.4zM256 299.6c-28.721 0-52.081 23.442-52.081 52 0 28.721 23.36 52 52.081 52 28.72 0 52.079-23.279 52.079-52 0-28.558-23.359-52-52.079-52zm151.92 0c-38.76 0-70.32 31.642-70.32 70.4 0 38.679 31.56 70.4 70.32 70.4 38.84 0 70.48-31.721 70.48-70.4 0-38.759-31.64-70.4-70.48-70.4z" />
              </svg>
              <p className="text-center font-medium text-navy">Giethoorn Tourism Partner</p>
            </div>
          </div>
          
          <div className="mt-12 py-4 px-6 rounded-lg bg-silver-light/80 text-center animate-fade-in">
            <p className="font-medium text-navy">Providing premium transfers since 2014</p>
            <p className="text-gray-600 mt-1">Over 50,000 satisfied customers and counting</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustElements;
