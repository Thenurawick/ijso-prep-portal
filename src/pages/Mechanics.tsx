
import React from 'react';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
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

const Mechanics = () => {
  const subsections = [
    {
      title: "Vectors",
      content: "Learn about vector quantities, vector addition, components, and operations in physical systems."
    },
    {
      title: "Newton's Laws",
      content: "Explore the three fundamental laws that describe the relationship between motion and forces acting on a body."
    },
    {
      title: "Forces and Friction",
      content: "Study different types of forces and the role of friction in mechanical systems."
    },
    {
      title: "Torque & Equilibrium",
      content: "Understand rotational force and conditions for static and dynamic equilibrium."
    },
    {
      title: "Center of Mass",
      content: "Learn how to determine the center of mass for different objects and systems."
    },
    {
      title: "Kinematic Formulas",
      content: "Master the equations describing the motion of objects without considering the causes of motion."
    },
    {
      title: "Nature of Energy and Energy Conservation",
      content: "Explore the fundamental concept of energy and the principle of energy conservation."
    },
    {
      title: "Forms of Energy",
      content: "Study different forms of energy including potential, kinetic, thermal, and others."
    },
    {
      title: "Sources of Energy",
      content: "Learn about various energy sources and their applications in physical systems."
    },
    {
      title: "Mechanical Energy & Work",
      content: "Understand the relationship between work, energy, and the conservation of mechanical energy."
    },
    {
      title: "Power & Efficiency",
      content: "Study the rate at which work is done and the concept of efficiency in energy conversion."
    },
    {
      title: "Momentum and Conservation of Momentum",
      content: "Understand linear momentum and how it is conserved in isolated systems."
    },
    {
      title: "Elastic & Inelastic Collisions",
      content: "Explore different types of collisions and their relationship to energy and momentum conservation."
    },
    {
      title: "Centripetal Force",
      content: "Study the force that makes an object follow a curved path around a central point."
    },
    {
      title: "Circular Kinematics",
      content: "Master the concepts of angular velocity, acceleration, and related variables in circular motion."
    },
    {
      title: "Pressure & Pascal's Law",
      content: "Understand fluid pressure and Pascal's principle for pressure transmission in fluids."
    },
    {
      title: "Buoyancy & Archimedes' Principle",
      content: "Study the upward force exerted by fluids on immersed objects and Archimedes' principle."
    },
    {
      title: "Bernoulli's Principle",
      content: "Explore the relationship between fluid pressure, velocity, and height in flowing fluids."
    },
    {
      title: "Hooke's Law and Elastic Motion",
      content: "Study the fundamental relationship between force, displacement, and the spring constant in elastic systems."
    },
    {
      title: "Harmonic Motion and Angular Frequency",
      content: "Understand simple harmonic motion, angular frequency, period, and amplitude in oscillating systems."
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
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop" 
              alt="Mechanics background" 
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
              <span className="text-sm">Mechanics</span>
            </div>
            <motion.h1 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Mechanics
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore the fundamental principles of classical mechanics, including Newton's laws, forces, 
              energy, momentum, fluid mechanics, and harmonic motion. Build a solid foundation for solving 
              physics problems.
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
              Mechanics Subsections
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
                            Explore {subsection.title}
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
                <h3 className="text-lg font-medium mb-2">Ready to practice mechanics?</h3>
                <p className="text-muted-foreground mb-4">
                  Apply your knowledge with our collection of IJSO-style mechanics problems. 
                  Test your understanding of forces, energy, momentum, and more.
                </p>
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                  View Mechanics Practice Problems
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

export default Mechanics;
