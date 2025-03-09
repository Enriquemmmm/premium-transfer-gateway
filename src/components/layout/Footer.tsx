
import React from "react";
import { Phone, Mail, MessageSquare, Facebook, Twitter, Instagram, CreditCard, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Schiphol-Giethoorn</h3>
            <p className="text-white/80 mb-4">
              Premium airport transfer service connecting Schiphol Airport and the beautiful village of Giethoorn.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#benefits" className="text-white/80 hover:text-white transition-colors">Benefits</a>
              </li>
              <li>
                <a href="#booking" className="text-white/80 hover:text-white transition-colors">Book Now</a>
              </li>
              <li>
                <a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent" />
                <a href="tel:+31612345678" className="text-white/80 hover:text-white transition-colors">
                  +31 6 1234 5678
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent" />
                <a href="mailto:info@schiphol-giethoorn.com" className="text-white/80 hover:text-white transition-colors">
                  info@schiphol-giethoorn.com
                </a>
              </li>
              <li className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-3 text-accent" />
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Live Chat (24/7)
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">We Accept</h3>
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="bg-white/10 p-2 rounded">
                <img src="https://cdn.worldvectorlogo.com/logos/visa-2.svg" alt="Visa" className="h-8" />
              </div>
              <div className="bg-white/10 p-2 rounded">
                <img src="https://cdn.worldvectorlogo.com/logos/mastercard-2.svg" alt="Mastercard" className="h-8" />
              </div>
              <div className="bg-white/10 p-2 rounded">
                <img src="https://cdn.worldvectorlogo.com/logos/american-express-logo.svg" alt="American Express" className="h-8" />
              </div>
              <div className="bg-white/10 p-2 rounded">
                <img src="https://cdn.worldvectorlogo.com/logos/ideal-2.svg" alt="iDEAL" className="h-8" />
              </div>
              <div className="bg-white/10 p-2 rounded">
                <img src="https://cdn.worldvectorlogo.com/logos/paypal-2.svg" alt="PayPal" className="h-8" />
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-white/80">
              <Shield className="h-5 w-5 text-accent" />
              <span>Secure payment processing</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Schiphol-Giethoorn Transfer Service. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
