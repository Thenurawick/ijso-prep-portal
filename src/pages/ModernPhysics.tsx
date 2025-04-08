
import React from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Atom } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from "framer-motion";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ModernPhysics = () => {
  const subsections = [
    {
      title: "Structure of the Particles and the Atoms",
      content: "Explore the fundamental building blocks of matter and atomic structure."
    },
    {
      title: "Bohr Model of the Atom",
      content: "Understand Niels Bohr's model of atomic structure and its implications for energy levels."
    },
    {
      title: "Types of Radioactivity Decay",
      content: "Study different types of radioactive decay including alpha, beta, and gamma radiation."
    },
    {
      title: "Properties of Radiation",
      content: "Learn about the properties and characteristics of different types of radiation."
    },
    {
      title: "Half-Life and Radioactive Decay Law",
      content: "Understand the concept of half-life and the mathematical laws governing radioactive decay."
    },
    {
      title: "Nuclear Fission and Fusion",
      content: "Explore the processes by which atomic nuclei split apart or combine to release energy."
    },
    {
      title: "Photoelectric Effect",
      content: "Study the phenomenon where light causes electrons to be emitted from a material."
    },
    {
      title: "Wave - Particle Duality",
      content: "Understand the dual nature of light and matter as both waves and particles."
    },
    {
      title: "de Broglie Wavelength",
      content: "Learn about the wavelength associated with moving particles in quantum mechanics."
    },
    {
      title: "Basic Laser Principle",
      content: "Explore the fundamental principles behind laser operation and light amplification."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-blue-600 text-white py-12 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-90"></div>
            <img 
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop" 
              alt="Modern Physics background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Link to="/" className="text-white/80 hover:text-white text-sm flex items-center gap-1">
                Home
              </Link>
              <span>/</span>
              <Link to="/physics" className="text-white/80 hover:text-white text-sm flex items-center gap-1">
                Physics
              </Link>
              <span>/</span>
              <span className="text-sm">Modern Physics</span>
            </div>
            <motion.h1 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Modern Physics
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore quantum mechanics, relativity, and nuclear physics. Discover the revolutionary 
              concepts that transformed our understanding of the universe at both the smallest and 
              largest scales.
            </motion.p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-center mb-8">
            <motion.h2 
              className="text-2xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Modern Physics Subsections
            </motion.h2>
            <Button variant="outline" asChild className="group">
              <Link to="/physics">
                <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Physics
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-12">
            {subsections.map((subsection, index) => (
              <motion.div
                key={subsection.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Collapsible className="w-full">
                  <Card className="w-full">
                    <CollapsibleTrigger className="w-full">
                      <CardHeader className="flex flex-row items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors rounded-t-lg">
                        <CardTitle className="text-xl">{subsection.title}</CardTitle>
                        <ArrowRight className="h-5 w-5 text-gray-500 transition-transform ui-open:rotate-90" />
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="p-6 pt-0 border-t">
                        <p className="text-gray-600 mb-4">{subsection.content}</p>
                        <div className="flex justify-end">
                          <Button variant="outline" className="group">
                            Learn about {subsection.title}
                            <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="bg-blue-50 p-6 rounded-lg border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Ready to practice modern physics?</h3>
                <p className="text-muted-foreground mb-4">
                  Apply your knowledge with our collection of IJSO-style modern physics problems. 
                  Test your understanding of quantum mechanics, nuclear physics, and more.
                </p>
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                  View Modern Physics Practice Problems
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ModernPhysics;
