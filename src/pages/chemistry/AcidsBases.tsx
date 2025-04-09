
import React from 'react';
import { ArrowLeft, ArrowRight, TestTube2, Download, FileText, Info, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AcidsBases = () => {
  const topics = [
    {
      title: "Varying Definitions of Acids and Bases",
      description: "Arrhenius, Brønsted-Lowry, and Lewis definitions of acids and bases.",
      icon: "🧪"
    },
    {
      title: "Properties of Acids and Bases",
      description: "Physical and chemical properties of acids and bases.",
      icon: "🔬"
    },
    {
      title: "pH scale and Indicators",
      description: "Understanding pH measurement and using indicators to identify acids and bases.",
      icon: "📊"
    },
    {
      title: "Strong vs Weak Acids / Bases",
      description: "Differences in ionization and strength between various acids and bases.",
      icon: "⚖️"
    },
    {
      title: "Neutralization Reactions",
      description: "Reactions between acids and bases to form water and a salt.",
      icon: "⚗️"
    },
    {
      title: "Preparation of Salts",
      description: "Methods for preparing different types of salts.",
      icon: "🧂"
    },
    {
      title: "Titrations",
      description: "Technique to determine the concentration of an acid or base.",
      icon: "📏"
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
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{topic.icon}</div>
                    <h3 className="text-xl font-semibold">{topic.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{topic.description}</p>
                  <Button variant="outline" className="w-full">
                    Explore {topic.title}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100 mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="bg-white p-4 rounded-lg">
                <div className="relative h-32 w-32 mx-auto">
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="h-24 w-16 bg-blue-100 rounded-b-lg relative overflow-hidden">
                      {/* Animated liquid */}
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-blue-400 animate-[pulse_3s_infinite]"></div>
                      {/* pH indicator strip */}
                      <div className="absolute bottom-2 left-2 right-2 h-20 w-2 bg-gradient-to-b from-red-500 via-purple-500 to-blue-500"></div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-2 text-sm text-muted-foreground">pH Scale Visualization</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">Why Study Acids and Bases?</h3>
                <p className="text-emerald-700 mb-4">
                  Acids and bases are fundamental to chemistry and have numerous applications in daily life, from food science to industrial processes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium text-emerald-700 mb-2">Real-world Applications</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                      <li>Food science and preservation</li>
                      <li>Medical treatments and diagnostics</li>
                      <li>Industrial manufacturing</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium text-emerald-700 mb-2">Academic Importance</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                      <li>Foundation for advanced chemistry</li>
                      <li>Critical for understanding biochemistry</li>
                      <li>Essential knowledge for IJSO competition</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="theory" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="theory">Key Theory</TabsTrigger>
              <TabsTrigger value="practice">Practice Questions</TabsTrigger>
              <TabsTrigger value="experiments">Experiments</TabsTrigger>
            </TabsList>
            <TabsContent value="theory" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-medium mb-3">Essential Acid-Base Theory</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Arrhenius Definition</h4>
                  <p className="text-muted-foreground">Acids produce H⁺ ions in water, while bases produce OH⁻ ions.</p>
                </div>
                <div>
                  <h4 className="font-medium">Brønsted-Lowry Definition</h4>
                  <p className="text-muted-foreground">Acids are proton donors, while bases are proton acceptors.</p>
                </div>
                <div>
                  <h4 className="font-medium">Lewis Definition</h4>
                  <p className="text-muted-foreground">Acids are electron pair acceptors, while bases are electron pair donors.</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="practice" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-medium mb-3">Practice Questions</h3>
              <p className="text-muted-foreground mb-4">Test your understanding with these sample questions:</p>
              <div className="space-y-4">
                <div className="bg-slate-50 p-3 rounded">
                  <p className="font-medium">1. Calculate the pH of a 0.01 M HCl solution.</p>
                </div>
                <div className="bg-slate-50 p-3 rounded">
                  <p className="font-medium">2. Identify the conjugate base of H₃PO₄.</p>
                </div>
                <div className="bg-slate-50 p-3 rounded">
                  <p className="font-medium">3. Explain why NH₃ acts as a weak base in water.</p>
                </div>
              </div>
              <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700">View More Practice Questions</Button>
            </TabsContent>
            <TabsContent value="experiments" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-medium mb-3">Hands-on Experiments</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-emerald-100 p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-medium">Red Cabbage pH Indicator</h4>
                    <p className="text-muted-foreground">Create a natural pH indicator using red cabbage and test household substances.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-emerald-100 p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-medium">Acid-Base Titration</h4>
                    <p className="text-muted-foreground">Determine the concentration of an unknown acid or base through precise titration.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-emerald-100 p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-medium">Buffer Solution Preparation</h4>
                    <p className="text-muted-foreground">Create buffer solutions and test their resistance to pH changes.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
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
