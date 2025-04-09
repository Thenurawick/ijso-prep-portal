
import React from 'react';
import { ArrowLeft, ArrowRight, BarChart3, Download, FileText, Info, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

const Stoichiometry = () => {
  const topics = [
    {
      title: "Mole Concept",
      description: "Understanding the basic unit for measuring substance amount in chemistry."
    },
    {
      title: "Molar Mass and Molecular Mass",
      description: "Calculating the mass of one mole of a substance or molecule."
    },
    {
      title: "Empirical and Molecular Formula",
      description: "Determining the simplest and actual ratio of atoms in a compound."
    },
    {
      title: "Balanced Chemical Equations",
      description: "Ensuring mass conservation in chemical reaction representations."
    },
    {
      title: "Limiting Reactants",
      description: "Identifying which reactant determines the maximum product yield."
    },
    {
      title: "Percentage Yield and Purity",
      description: "Calculating actual vs. theoretical yields and substance purity."
    },
    {
      title: "Concentration",
      description: "Measuring the amount of solute dissolved in a specific volume of solution."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-12">
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
              <span className="text-sm">Stoichiometry</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <BarChart3 className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold">Stoichiometry</h1>
            </div>
            <p className="text-xl max-w-3xl mt-4">
              The quantitative relationship between reactants and products in chemical reactions.
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
              <Link to="/chemistry/states-of-matter" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Previous: States of Matter
              </Link>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/chemistry/chemical-reactions" className="flex items-center gap-2">
                Next: Chemical Reactions
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

export default Stoichiometry;
