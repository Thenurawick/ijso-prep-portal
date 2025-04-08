
import React from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Zap } from 'lucide-react';
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

const Electricity = () => {
  const subsections = [
    {
      title: "Electric Charge and Properties",
      content: "Understand the fundamental nature of electric charge and its properties."
    },
    {
      title: "Coulomb's Law",
      content: "Explore the mathematical relationship between electric forces and charges."
    },
    {
      title: "Electric Field",
      content: "Study the concept of electric fields and their role in electromagnetic interactions."
    },
    {
      title: "Electric Potential and Potential Energy",
      content: "Learn about electric potential, potential energy, and their relationship to electric fields."
    },
    {
      title: "Conductors and Insulators",
      content: "Understand the difference between materials that conduct electricity and those that resist it."
    },
    {
      title: "Charing by Induction and Friction",
      content: "Explore different methods of charging objects through induction and friction."
    },
    {
      title: "Ohm's Law",
      content: "Study the relationship between voltage, current, and resistance in electrical circuits."
    },
    {
      title: "Resistivity and Factors Affecting Resistance",
      content: "Learn about the factors that influence electrical resistance in materials."
    },
    {
      title: "Electric Power and Energy",
      content: "Understand how electrical energy is converted into other forms and the concept of power."
    },
    {
      title: "Series and Parallel Circuits",
      content: "Explore different circuit configurations and their properties."
    },
    {
      title: "Kirchoff's Laws",
      content: "Study the laws governing current and voltage in electrical circuits."
    },
    {
      title: "Capacitors and Capacitance",
      content: "Learn about devices that store electrical energy and their properties."
    },
    {
      title: "Magnetic Fields and Field Lines",
      content: "Understand the concept of magnetic fields and how they are represented."
    },
    {
      title: "Magnetic Force on a Current",
      content: "Study the force experienced by current-carrying conductors in magnetic fields."
    },
    {
      title: "Right Hand Rule",
      content: "Learn the convention for determining directions of magnetic fields, forces, and currents."
    },
    {
      title: "Magnetic Force due to a Wire, Loop, Solenoid",
      content: "Explore magnetic fields created by different current-carrying configurations."
    },
    {
      title: "Electromagnetic Induction",
      content: "Understand how changing magnetic fields can induce electric currents."
    },
    {
      title: "Faraday's Law of Induction",
      content: "Study the law describing the relationship between induced EMF and changing magnetic flux."
    },
    {
      title: "Lenz's Law",
      content: "Learn about the direction of induced currents and their relationship to magnetic fields."
    },
    {
      title: "Motional EMF",
      content: "Explore the generation of electric potential through motion in magnetic fields."
    },
    {
      title: "Transformers",
      content: "Understand devices that transfer electrical energy between circuits using electromagnetic induction."
    },
    {
      title: "Applications: Electric Motors, Generators",
      content: "Study practical applications of electromagnetic principles in motors and generators."
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
              src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=1200&auto=format&fit=crop" 
              alt="Electricity background" 
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
              <span className="text-sm">Electricity & Magnetism</span>
            </div>
            <motion.h1 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Electricity & Magnetism
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore electric fields, circuits, and magnetic phenomena. Learn about the fundamental 
              principles governing electrical and magnetic interactions, and their practical applications.
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
              Electricity & Magnetism Subsections
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
                <h3 className="text-lg font-medium mb-2">Ready to practice electricity and magnetism?</h3>
                <p className="text-muted-foreground mb-4">
                  Apply your knowledge with our collection of IJSO-style electricity and magnetism problems. 
                  Test your understanding of electric fields, circuits, and magnetic phenomena.
                </p>
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                  View Electricity & Magnetism Practice Problems
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

export default Electricity;
