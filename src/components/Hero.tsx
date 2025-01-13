import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const backgrounds = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", // Costa Rica
  "https://images.unsplash.com/photo-1542259009477-d625272157b7", // Hawaii
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e", // Japan
];

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentBg ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
      
      <div className="relative z-10 text-center text-white px-4 animate-fadeIn">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">Joe Lee</h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto">
          Harvard-educated former Marine turned Web3 Developer, building the future of decentralized applications
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-ocean hover:bg-ocean-light text-white">
            <Link to="/projects">View Projects</Link>
          </Button>
          <Button asChild className="bg-coral hover:bg-coral-light text-white">
            <Link to="/contact">
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;