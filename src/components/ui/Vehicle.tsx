
import React from "react";
import { CheckCircle, Users, Briefcase, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface VehicleProps {
  name: string;
  description: string;
  image: string;
  price: string;
  capacity: number;
  luggage: number;
  duration: string;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

const Vehicle: React.FC<VehicleProps> = ({
  name,
  description,
  image,
  price,
  capacity,
  luggage,
  duration,
  isSelected,
  onClick,
  className,
}) => {
  return (
    <div 
      className={cn(
        "border rounded-lg overflow-hidden transition-all duration-300 cursor-pointer",
        isSelected 
          ? "border-accent shadow-md" 
          : "border-silver hover:border-accent/50",
        className
      )}
      onClick={onClick}
    >
      <div className="aspect-video bg-silver-light relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        {isSelected && (
          <div className="absolute top-2 right-2 bg-accent text-white rounded-full p-1">
            <CheckCircle className="h-5 w-5" />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-navy">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        
        <div className="mt-4 grid grid-cols-3 gap-2 text-sm text-gray-600">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{capacity}</span>
          </div>
          <div className="flex items-center">
            <Briefcase className="h-4 w-4 mr-1" />
            <span>{luggage}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <p className="font-bold text-navy text-lg">{price}</p>
          <button className={cn(
            "px-3 py-1 rounded text-sm font-medium",
            isSelected 
              ? "bg-accent text-white" 
              : "bg-navy/10 text-navy hover:bg-navy/20"
          )}>
            {isSelected ? "Selected" : "Select"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
