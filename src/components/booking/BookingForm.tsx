
import React, { useState } from "react";
import { Calendar, Clock, Users, Briefcase, Car, ChevronRight, AlertCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | 3;
type VehicleType = 'sedan' | 'van' | 'luxury';

interface BookingFormProps {
  className?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ className }) => {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType | null>(null);
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [passengers, setPassengers] = useState<string>('1');
  const [luggage, setLuggage] = useState<string>('1');
  const [flightNumber, setFlightNumber] = useState<string>('');
  const [formValid, setFormValid] = useState(false);
  
  const validateStep1 = () => {
    return date && time && passengers && luggage;
  };
  
  const validateStep2 = () => {
    return selectedVehicle !== null;
  };
  
  const handleNextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    }
  };
  
  const handlePreviousStep = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    } else if (currentStep === 3) {
      setCurrentStep(2);
    }
  };
  
  return (
    <div id="booking" className={cn("glass-panel rounded-2xl overflow-hidden", className)}>
      <div className="bg-navy text-white py-4 px-6">
        <h2 className="text-2xl font-bold">Book Your Transfer</h2>
        <p className="text-white/80">Fixed price, no hidden costs</p>
      </div>
      
      {/* Progress Steps */}
      <div className="flex border-b border-silver/30">
        <div 
          className={cn(
            "flex-1 py-3 px-4 text-center font-medium transition-colors", 
            currentStep === 1 
              ? "text-accent border-b-2 border-accent" 
              : "text-gray-600"
          )}
        >
          Trip Details
        </div>
        <div 
          className={cn(
            "flex-1 py-3 px-4 text-center font-medium transition-colors", 
            currentStep === 2 
              ? "text-accent border-b-2 border-accent" 
              : "text-gray-600"
          )}
        >
          Select Vehicle
        </div>
        <div 
          className={cn(
            "flex-1 py-3 px-4 text-center font-medium transition-colors", 
            currentStep === 3 
              ? "text-accent border-b-2 border-accent" 
              : "text-gray-600"
          )}
        >
          Your Details
        </div>
      </div>
      
      <div className="p-6">
        {/* Step 1: Trip Details */}
        {currentStep === 1 && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                  <input
                    type="date"
                    className="input-field pl-10"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                  <input
                    type="time"
                    className="input-field pl-10"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Flight Number (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. KL1234"
                  className="input-field"
                  value={flightNumber}
                  onChange={(e) => setFlightNumber(e.target.value)}
                />
                {flightNumber && (
                  <p className="text-sm text-gray-600 mt-1 flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    Free flight monitoring included
                  </p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Direction</label>
                <select className="input-field">
                  <option>Schiphol to Giethoorn</option>
                  <option>Giethoorn to Schiphol</option>
                  <option>Round Trip</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                  <select
                    className="input-field pl-10"
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    required
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>{num} {num === 1 ? 'passenger' : 'passengers'}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Luggage</label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                  <select
                    className="input-field pl-10"
                    value={luggage}
                    onChange={(e) => setLuggage(e.target.value)}
                    required
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>{num} {num === 1 ? 'piece' : 'pieces'}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button
                className={cn(
                  "btn-primary flex items-center", 
                  !validateStep1() && "opacity-50 cursor-not-allowed"
                )}
                onClick={handleNextStep}
                disabled={!validateStep1()}
              >
                Continue to Select Vehicle
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        )}
        
        {/* Step 2: Vehicle Selection */}
        {currentStep === 2 && (
          <div className="animate-fade-in">
            <p className="text-gray-700 mb-6">
              Select the vehicle that best suits your needs. All our vehicles include professional drivers,
              complimentary water, and Wi-Fi.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div 
                className={cn(
                  "border rounded-lg overflow-hidden transition-all duration-300",
                  selectedVehicle === 'sedan' 
                    ? "border-accent shadow-md" 
                    : "border-silver hover:border-accent/50"
                )}
                onClick={() => setSelectedVehicle('sedan')}
              >
                <div className="aspect-video bg-silver-light relative">
                  <img 
                    src="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2936&auto=format&fit=crop" 
                    alt="Sedan" 
                    className="w-full h-full object-cover"
                  />
                  {selectedVehicle === 'sedan' && (
                    <div className="absolute top-2 right-2 bg-accent text-white rounded-full p-1">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-navy">Business Sedan</h3>
                  <p className="text-gray-600 text-sm">Up to 3 passengers, 3 luggage</p>
                  <div className="mt-3 flex justify-between items-center">
                    <p className="font-bold text-navy text-lg">€199</p>
                    <Car className="h-5 w-5 text-navy" />
                  </div>
                </div>
              </div>
              
              <div 
                className={cn(
                  "border rounded-lg overflow-hidden transition-all duration-300",
                  selectedVehicle === 'van' 
                    ? "border-accent shadow-md" 
                    : "border-silver hover:border-accent/50"
                )}
                onClick={() => setSelectedVehicle('van')}
              >
                <div className="aspect-video bg-silver-light relative">
                  <img 
                    src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2942&auto=format&fit=crop" 
                    alt="Van" 
                    className="w-full h-full object-cover"
                  />
                  {selectedVehicle === 'van' && (
                    <div className="absolute top-2 right-2 bg-accent text-white rounded-full p-1">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-navy">Comfort Van</h3>
                  <p className="text-gray-600 text-sm">Up to 6 passengers, 6 luggage</p>
                  <div className="mt-3 flex justify-between items-center">
                    <p className="font-bold text-navy text-lg">€249</p>
                    <Car className="h-5 w-5 text-navy" />
                  </div>
                </div>
              </div>
              
              <div 
                className={cn(
                  "border rounded-lg overflow-hidden transition-all duration-300",
                  selectedVehicle === 'luxury' 
                    ? "border-accent shadow-md" 
                    : "border-silver hover:border-accent/50"
                )}
                onClick={() => setSelectedVehicle('luxury')}
              >
                <div className="aspect-video bg-silver-light relative">
                  <img 
                    src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2940&auto=format&fit=crop" 
                    alt="Luxury" 
                    className="w-full h-full object-cover"
                  />
                  {selectedVehicle === 'luxury' && (
                    <div className="absolute top-2 right-2 bg-accent text-white rounded-full p-1">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-navy">Luxury Sedan</h3>
                  <p className="text-gray-600 text-sm">Up to 3 passengers, 3 luggage</p>
                  <div className="mt-3 flex justify-between items-center">
                    <p className="font-bold text-navy text-lg">€299</p>
                    <Car className="h-5 w-5 text-navy" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between">
              <button
                className="btn-outline"
                onClick={handlePreviousStep}
              >
                Back
              </button>
              
              <button
                className={cn(
                  "btn-primary flex items-center", 
                  !validateStep2() && "opacity-50 cursor-not-allowed"
                )}
                onClick={handleNextStep}
                disabled={!validateStep2()}
              >
                Continue to Payment
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        )}
        
        {/* Step 3: Customer Details */}
        {currentStep === 3 && (
          <div className="animate-fade-in">
            <div className="bg-silver-light p-4 rounded-lg mb-6">
              <h3 className="font-medium text-navy">Your Booking Summary</h3>
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                <p className="text-gray-600">Date:</p>
                <p className="font-medium text-navy">{date}</p>
                <p className="text-gray-600">Time:</p>
                <p className="font-medium text-navy">{time}</p>
                <p className="text-gray-600">Passengers:</p>
                <p className="font-medium text-navy">{passengers}</p>
                <p className="text-gray-600">Vehicle:</p>
                <p className="font-medium text-navy capitalize">{selectedVehicle}</p>
                <p className="text-gray-600">Price:</p>
                <p className="font-medium text-navy">
                  {selectedVehicle === 'sedan' ? '€199' : selectedVehicle === 'van' ? '€249' : '€299'}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input type="text" className="input-field" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input type="text" className="input-field" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="input-field" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" className="input-field" required />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Address</label>
                <input type="text" className="input-field" required />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Dropoff Address</label>
                <input type="text" className="input-field" required />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests (Optional)</label>
                <textarea className="input-field" rows={3}></textarea>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-medium text-navy mb-3">Payment Method</h3>
              <div className="flex flex-wrap gap-3">
                <button className="border border-silver rounded-md px-4 py-2 flex items-center hover:border-accent">
                  <img src="https://cdn.worldvectorlogo.com/logos/ideal-2.svg" alt="iDEAL" className="h-6 mr-2" />
                  iDEAL
                </button>
                <button className="border border-silver rounded-md px-4 py-2 flex items-center hover:border-accent">
                  <img src="https://cdn.worldvectorlogo.com/logos/mastercard-2.svg" alt="Credit Card" className="h-6 mr-2" />
                  Credit Card
                </button>
                <button className="border border-silver rounded-md px-4 py-2 flex items-center hover:border-accent">
                  <img src="https://cdn.worldvectorlogo.com/logos/paypal-2.svg" alt="PayPal" className="h-6 mr-2" />
                  PayPal
                </button>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="mt-1 mr-2"
                  onChange={(e) => setFormValid(e.target.checked)}
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the <a href="#" className="text-accent hover:underline">Terms & Conditions</a> and <a href="#" className="text-accent hover:underline">Privacy Policy</a>
                </label>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between">
              <button
                className="btn-outline"
                onClick={handlePreviousStep}
              >
                Back
              </button>
              
              <button
                className={cn(
                  "btn-primary", 
                  !formValid && "opacity-50 cursor-not-allowed"
                )}
                disabled={!formValid}
              >
                Complete Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
