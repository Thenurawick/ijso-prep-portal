
import React from 'react';
import { ArrowLeft, Microscope } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

const OrganicChemistry = () => {
  const topics = [
    {
      title: "Hydrocarbons",
      description: "Organic compounds consisting of hydrogen and carbon."
    },
    {
      title: "Functional Groups",
      description: "Specific atoms or groups that give characteristic properties to molecules."
    },
    {
      title: "Naming Simple Organic Compounds",
      description: "Rules and conventions for naming organic substances."
    },
    {
      title: "Isomerism",
      description: "Different arrangements of atoms with the same molecular formula."
    },
    {
      title: "Basic Organic Reactions",
      description: "Common reaction types involving organic compounds."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-12">
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
              <span className="text-sm">Organic Chemistry</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Microscope className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold">Organic Chemistry</h1>
            </div>
            <p className="text-xl max-w-3xl mt-4">
              The study of carbon compounds and their properties, reactions, and structures.
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
              <Link to="/chemistry/electrochemistry" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Previous: Electrochemistry
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/chemistry" className="flex items-center gap-2">
                Back to Chemistry
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrganicChemistry;
