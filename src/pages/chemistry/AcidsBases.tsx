
import React from 'react';
import { ArrowLeft, ArrowRight, TestTube2, Download, FileText, Info, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

const AcidsBases = () => {
  const topics = [
    {
      title: "Varying Definitions of Acids and Bases",
      description: "Arrhenius, Brønsted-Lowry, and Lewis definitions of acids and bases."
    },
    {
      title: "Properties of Acids and Bases",
      description: "Physical and chemical properties of acids and bases."
    },
    {
      title: "pH scale and Indicators",
      description: "Understanding pH measurement and using indicators to identify acids and bases."
    },
    {
      title: "Strong vs Weak Acids / Bases",
      description: "Differences in ionization and strength between various acids and bases."
    },
    {
      title: "Neutralization Reactions",
      description: "Reactions between acids and bases to form water and a salt."
    },
    {
      title: "Preparation of Salts",
      description: "Methods for preparing different types of salts."
    },
    {
      title: "Titrations",
      description: "Technique to determine the concentration of an acid or base."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-12">
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
              <span className="text-sm">Acids, Bases and Salts</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <TestTube2 className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold">Acids, Bases and Salts</h1>
            </div>
            <p className="text-xl max-w-3xl mt-4">
              Understanding acids and bases, their properties, reactions, and applications.
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
              <Link to="/chemistry/chemical-reactions" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Previous: Chemical Reactions
              </Link>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/chemistry/thermochemistry" className="flex items-center gap-2">
                Next: Thermochemistry
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

export default AcidsBases;
