
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

const Waves = () => {
  const subsections = [
    {
      title: "Wave Properties",
      content: "Study the fundamental properties of waves including amplitude, frequency, wavelength, and period."
    },
    {
      title: "Transersal and Logitudinal Waves",
      content: "Explore different types of wave propagation and their characteristics in various mediums."
    },
    {
      title: "Superposition of Waves",
      content: "Study how multiple waves interact and combine to form complex wave patterns."
    },
    {
      title: "Interference of Waves",
      content: "Understand constructive and destructive interference patterns created when waves overlap."
    },
    {
      title: "Reflection and Transmission",
      content: "Examine how waves behave when they encounter boundaries between different media."
    },
    {
      title: "Refraction",
      content: "Study how waves change direction when they pass from one medium to another."
    },
    {
      title: "Standing Waves",
      content: "Explore the formation of stationary wave patterns in constrained systems."
    },
    {
      title: "Resonance",
      content: "Understand how systems respond to external forces at their natural frequencies."
    },
    {
      title: "Sound Waves and Speed of Sound",
      content: "Study the properties of sound waves and factors affecting the speed of sound in different media."
    },
    {
      title: "Doppler Effect",
      content: "Examine the change in frequency of waves observed when the source and observer are in relative motion."
    },
    {
      title: "Beats and Harmonics",
      content: "Understand interference patterns, beat frequency, and the formation of harmonic sequences."
    },
    {
      title: "Intensity and Loudness",
      content: "Study the energy carried by waves and how it relates to perceived loudness in sound."
    },
    {
      title: "Wave Equation",
      content: "Explore the mathematical description of wave propagation and its applications."
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
              src="https://images.unsplash.com/photo-1548263594-a71ea65a8598?q=80&w=1200&auto=format&fit=crop" 
              alt="Waves background" 
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
              <span className="text-sm">Waves</span>
            </div>
            <motion.h1 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Waves
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore wave phenomena including wave properties, interference, reflection, refraction,
              resonance, and sound. Master the mathematics and physics principles behind wave behavior in 
              various physical systems.
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
              Waves Subsections
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
                <h3 className="text-lg font-medium mb-2">Ready to practice wave physics?</h3>
                <p className="text-muted-foreground mb-4">
                  Apply your knowledge with our collection of IJSO-style wave problems. 
                  Test your understanding of wave properties, interference, resonance, and sound phenomena.
                </p>
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                  View Waves Practice Problems
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

export default Waves;
