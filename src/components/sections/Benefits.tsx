
import React from "react";
import { DollarSign, Clock, Plane, DoorOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, className }) => {
  return (
    <div className={cn(
      "card card-hover flex flex-col items-center text-center p-6 group transition-all duration-300",
      className
    )}>
      <div className="rounded-full bg-navy/5 p-4 mb-5 group-hover:bg-navy/10 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="heading-sm mb-3 text-navy">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding bg-silver-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 text-navy">Premium Service, Guaranteed</h2>
          <p className="text-lg text-gray-600">
            Experience the difference with our premium transfer service connecting Schiphol Airport and the beautiful village of Giethoorn.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BenefitCard 
            icon={<DollarSign className="h-8 w-8 text-navy" />}
            title="Fixed Price Guarantee"
            description="No surprises or hidden costs. The price you see is the price you pay, regardless of traffic or delays."
            className="animate-fade-in [animation-delay:0.1s]"
          />
          
          <BenefitCard 
            icon={<Clock className="h-8 w-8 text-navy" />}
            title="90-Minute Direct Route"
            description="Enjoy a direct journey with our professional drivers taking the most efficient route to your destination."
            className="animate-fade-in [animation-delay:0.2s]"
          />
          
          <BenefitCard 
            icon={<Plane className="h-8 w-8 text-navy" />}
            title="Free Flight Monitoring"
            description="We track your flight and adjust pickup times if your flight is delayed, with a complimentary 60-minute wait time."
            className="animate-fade-in [animation-delay:0.3s]"
          />
          
          <BenefitCard 
            icon={<DoorOpen className="h-8 w-8 text-navy" />}
            title="24/7 Door-to-Door Service"
            description="Our service operates around the clock, picking you up and dropping you off exactly where you need to be."
            className="animate-fade-in [animation-delay:0.4s]"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
