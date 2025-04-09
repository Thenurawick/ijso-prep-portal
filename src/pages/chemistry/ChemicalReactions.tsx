
import React from 'react';
import { ArrowLeft, ArrowRight, FlaskConical, Download, FileText, Info, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

const ChemicalReactions = () => {
  const topics = [
    {
      title: "Combination Reactions",
      description: "Reactions where two or more substances combine to form a single product."
    },
    {
      title: "Decomposition Reactions",
      description: "Reactions where a single compound breaks down into simpler substances."
    },
    {
      title: "Displacement Reactions",
      description: "Reactions where an element replaces another in a compound."
    },
    {
      title: "Redox Reactions",
      description: "Reactions involving electron transfer between reactants."
    },
    {
      title: "Activity Series of Metals",
      description: "Hierarchical classification of metals based on their reactivity."
    },
    {
      title: "Exothermic and Endothermic Reactions",
      description: "Reactions that release or absorb energy in the form of heat."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-12">
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
              <span className="text-sm">Chemical Reactions</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <FlaskConical className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold">Chemical Reactions</h1>
            </div>
            <p className="text-xl max-w-3xl mt-4">
              Explore the different types and mechanisms of chemical reactions.
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
              <Link to="/chemistry/stoichiometry" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Previous: Stoichiometry
              </Link>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/chemistry/acids-bases" className="flex items-center gap-2">
                Next: Acids, Bases and Salts
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

export default ChemicalReactions;
