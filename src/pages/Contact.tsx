import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16 mt-16">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Whether you're interested in Web3 consulting, have a project idea, or just want to connect, I'd love to hear from you. Here's how you can reach me:
              </p>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-ocean" />
                <a href="mailto:xmrtsolutions@gmail.com" className="text-ocean hover:underline">
                  xmrtsolutions@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-ocean" />
                <a href="https://wa.me/50661500559" className="text-ocean hover:underline">
                  WhatsApp: +506 6150 0559
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-ocean" />
                <span>La Fortuna, Costa Rica</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Professional Services</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-gray-600">
                <li>• Web3 Development Consulting</li>
                <li>• Smart Contract Development</li>
                <li>• DApp Architecture & Implementation</li>
                <li>• Blockchain Integration</li>
                <li>• Technical Advisory</li>
                <li>• Code Reviews & Audits</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;