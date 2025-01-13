import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16 mt-16">
        <h1 className="text-4xl font-bold mb-8">About Joe Lee</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Background</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Harvard-educated former Marine turned Web3 Developer, I bring a unique blend of military discipline and academic excellence to the world of blockchain technology. Born in Vallejo and raised in Northern California, my journey has taken me from the shores of Hawaii to the bustling cities of Japan during my time in the Marine Corps.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Professional Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                After serving in the Marines, I transitioned into civilian life as a senior multimedia journalist with the USO in Arlington, Virginia. My tech journey began with PHP/MySQL and JavaScript, evolved through Laravel after Harvard, and now focuses on modern Jamstack technologies and Web3 development.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Current Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Now based in the beautiful La Fortuna, Costa Rica, I'm leading Project Estrella, a groundbreaking DAO initiative, while building and consulting on various Web3 projects. My work combines cutting-edge blockchain technology with practical, user-focused solutions.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Life & Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                When not coding, you'll find me exploring Costa Rica's natural beauty, contributing to the Web3 community, or sharing my knowledge with other developers. I'm passionate about decentralized technology and its potential to transform the digital landscape.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;