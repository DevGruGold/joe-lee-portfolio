import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project Estrella DAO",
      description: "A decentralized autonomous organization built on the blockchain, facilitating community-driven decision making and resource allocation.",
      link: "https://xmrtdao.vercel.app",
      github: "https://github.com/yourusername/project-estrella",
      tags: ["Web3", "Solidity", "React", "TypeScript"]
    },
    {
      title: "Mobile Monero dApps",
      description: "A collection of decentralized applications showcasing the potential of privacy-focused cryptocurrency technologies.",
      link: "https://mobilemonero.com/dapps",
      github: "https://github.com/yourusername/mobile-monero",
      tags: ["Monero", "Privacy", "Blockchain", "dApps"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16 mt-16">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-ocean/10 text-ocean px-2 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button asChild variant="outline">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Project
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;