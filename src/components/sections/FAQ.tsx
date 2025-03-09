
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-silver last:border-0">
      <button
        className="flex justify-between items-center w-full py-4 px-0 text-left font-medium text-navy focus:outline-none"
        onClick={onClick}
      >
        {question}
        {isOpen ? 
          <ChevronUp className="h-5 w-5 text-navy flex-shrink-0" /> : 
          <ChevronDown className="h-5 w-5 text-navy flex-shrink-0" />
        }
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="pb-4 text-gray-600">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "How far in advance should I book my transfer?",
      answer: "We recommend booking as soon as your travel plans are confirmed. For peak seasons (summer months and holidays), we suggest booking at least two weeks in advance to ensure availability. For last-minute bookings, please contact our customer service to check availability."
    },
    {
      question: "What happens if my flight is delayed?",
      answer: "We monitor all incoming flights and adjust your pickup time accordingly. Your driver will wait for you for up to 60 minutes after your flight has landed, at no extra charge. For delays beyond 60 minutes, a small waiting fee may apply."
    },
    {
      question: "Is the price fixed regardless of traffic conditions?",
      answer: "Yes, the price is fixed and will not change due to traffic conditions or delays. The quoted price includes all taxes, tolls, and fees. There are no hidden costs."
    },
    {
      question: "How many passengers and how much luggage can fit in each vehicle?",
      answer: "Our Business Sedan accommodates up to 3 passengers with 3 standard suitcases. The Comfort Van fits up to 6 passengers with 6 suitcases. The Luxury Sedan accommodates 3 passengers with 3 suitcases. For larger groups or extra luggage, please contact us for custom arrangements."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We offer free cancellation up to 24 hours before your scheduled pickup time. For cancellations within 24 hours, a 50% fee applies. No-shows will be charged the full amount."
    },
    {
      question: "How long does the journey from Schiphol to Giethoorn take?",
      answer: "The journey typically takes about 90 minutes, depending on traffic conditions. Our drivers take the most efficient routes to ensure a timely arrival."
    },
    {
      question: "Are your drivers professional and English-speaking?",
      answer: "Yes, all our drivers are professional, licensed, and English-speaking. Many also speak additional languages such as Dutch, German, and French. Our drivers are knowledgeable about the area and can provide information about the Netherlands during your journey."
    },
    {
      question: "Can I request a specific pickup or drop-off location?",
      answer: "Yes, our service is door-to-door. We can pick you up from any location at Schiphol Airport (arrivals, departures, or specific terminal) and drop you off at your exact destination in Giethoorn, whether it's a hotel, vacation rental, or private residence."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit cards (Visa, MasterCard, American Express), iDEAL for Dutch customers, and PayPal. Payment is required at the time of booking."
    },
    {
      question: "Can I book a round trip or multiple transfers?",
      answer: "Yes, you can book a round trip or multiple transfers. Round trips receive a 10% discount on the return journey. For multiple transfers or group bookings, please contact our customer service for special rates."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="section-padding bg-silver-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4 text-navy">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Find answers to the most common questions about our Schiphol to Giethoorn transfer service.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-premium overflow-hidden">
          <div className="p-6">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center animate-fade-in">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a href="#" className="btn-outline">
            Contact Our Support Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
