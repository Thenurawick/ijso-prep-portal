
import React from 'react';
import { ArrowLeft, ArrowRight, Gauge, Download, FileText, Info, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

const Thermochemistry = () => {
  const topics = [
    {
      title: "Heat of Reaction, Formation, Combustion and Neutralization",
      description: "Understanding different types of enthalpy changes in chemical reactions."
    },
    {
      title: "Enthalpy Diagrams",
      description: "Visual representations of energy changes during reactions."
    },
    {
      title: "Energy Level Diagrams",
      description: "Illustrating energy changes and transition states in reactions."
    },
    {
      title: "Bond Energy",
      description: "Energy required to break chemical bonds and its role in reaction energetics."
    },
    {
      title: "Entropy",
      description: "Understanding disorder and randomness in chemical systems."
    },
    {
      title: "Gibbs Free Energy",
      description: "Determining the spontaneity of chemical reactions."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Link to="/" className="text-white/80 hover:text-white text-sm flex items-center gap-1">
                Home
              </Link>
              <span>/</span>
              <Link to="/chemistry" className="text-white/80 hover:text-white text-sm flex items-center gap-1">
                Chemistry
              </Link>
              <span>/</span>
              <span className="text-sm">Thermochemistry</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Gauge className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold">Thermochemistry</h1>
            </div>
            <p className="text-xl max-w-3xl mt-4">
              The study of energy changes in chemical reactions and processes.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {topics.map((topic, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                  <p className="text-muted-foreground mb-6">{topic.description}</p>
                  <Button variant="outline" className="w-full">
                    Explore Topic
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link to="/chemistry/acids-bases" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Previous: Acids, Bases and Salts
              </Link>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/chemistry/kinetics" className="flex items-center gap-2">
                Next: Chemical Kinetics
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Thermochemistry;
