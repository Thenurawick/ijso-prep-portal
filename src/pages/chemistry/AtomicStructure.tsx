
import React from 'react';
import { ArrowRight, Atom } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

const AtomicStructure = () => {
  const topics = [
    {
      title: "Structure of Particles and Atoms",
      description: "Fundamental subatomic particles and atomic organization."
    },
    {
      title: "Elements, Isotopes",
      description: "Different types of atoms and variations in atomic structures."
    },
    {
      title: "Relative Atomic Mass",
      description: "Comparing the masses of different atoms and isotopes."
    },
    {
      title: "Electronic Configuration",
      description: "Arrangement of electrons in atomic orbitals and energy levels."
    },
    {
      title: "Periodic Table Layout and Trends",
      description: "Organization of elements and patterns in their properties."
    },
    {
      title: "Group Properties",
      description: "Shared characteristics of elements in the same group."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-12">
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
              <span className="text-sm">Atomic Structure</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Atom className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold">Atomic Structure</h1>
            </div>
            <p className="text-xl max-w-3xl mt-4">
              Exploring the fundamental building blocks of matter and their organization.
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
              <Link to="/chemistry" className="flex items-center gap-2">
                Back to Chemistry
              </Link>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/chemistry/chemical-bonding" className="flex items-center gap-2">
                Next: Chemical Bonding
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

export default AtomicStructure;
