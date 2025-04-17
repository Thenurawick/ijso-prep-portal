
import React from 'react';
import { ArrowLeft, BookOpen, Microscope, Bug, FlaskConical, Dna, Atom } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Microbiology = () => {
  const subtopics = [
    {
      title: "Bacteria",
      description: "Structure, reproduction, and bacterial diseases",
      icon: Bug,
      path: "/biology/microbiology/bacteria"
    },
    {
      title: "Viruses",
      description: "Viral structure, replication, and viral diseases",
      icon: Atom,
      path: "/biology/microbiology/viruses"
    },
    {
      title: "Fungi",
      description: "Fungal characteristics, reproduction, and ecology",
      icon: FlaskConical,
      path: "/biology/microbiology/fungi"
    },
    {
      title: "Protists",
      description: "Diverse eukaryotic microorganisms and their roles",
      icon: Dna,
      path: "/biology/microbiology/protists"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-purple-600 text-white py-12 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-purple-600 opacity-90"></div>
            <img 
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1200&auto=format&fit=crop" 
              alt="Microbiology background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Link to="/" className="text-white/80 hover:text-white text-sm flex items-center gap-1">
                Home
              </Link>
              <span>/</span>
              <Link to="/biology" className="text-white/80 hover:text-white text-sm flex items-center gap-1">
                Biology
              </Link>
              <span>/</span>
              <span className="text-sm">Microbiology</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                <Link to="/biology" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" /> Back to Biology
                </Link>
              </Button>
            </div>
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Microscope className="h-8 w-8" />
                <h1 className="text-4xl font-bold">Microbiology</h1>
              </div>
              <p className="text-xl max-w-3xl">
                Explore the fascinating world of microorganisms - including bacteria, viruses, fungi, and protists.
                Learn how these tiny organisms impact health, environment, and biotechnology.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.h2 
            className="text-2xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Subtopics
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {subtopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <topic.icon className="h-5 w-5 text-purple-600" />
                      </div>
                      <CardTitle className="text-xl">{topic.title}</CardTitle>
                    </div>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full mt-4">
                      <Link to={topic.path}>
                        Explore {topic.title}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mb-12">
            <motion.h2 
              className="text-2xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Key Concepts
            </motion.h2>
            
            <motion.div 
              className="bg-purple-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="bg-purple-100 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-700 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Microbial Diversity</h3>
                    <p className="text-muted-foreground text-sm">Explore the vast diversity of microorganisms and their classification into bacteria, archaea, fungi, protists, and viruses.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="bg-purple-100 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-700 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Microbial Metabolism</h3>
                    <p className="text-muted-foreground text-sm">Understand the various metabolic pathways used by microorganisms to obtain energy and nutrients.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="bg-purple-100 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-700 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Microbial Ecology</h3>
                    <p className="text-muted-foreground text-sm">Learn about the roles of microorganisms in ecosystems, including nutrient cycling and interactions with other organisms.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="bg-purple-100 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-700 text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Applied Microbiology</h3>
                    <p className="text-muted-foreground text-sm">Discover how microorganisms are used in biotechnology, food production, and environmental management.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            className="bg-purple-100 p-6 rounded-lg border border-purple-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-purple-200 p-2 rounded-full">
                <BookOpen className="h-6 w-6 text-purple-700" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Ready to test your knowledge?</h3>
                <p className="text-muted-foreground mb-4">
                  Challenge yourself with our collection of IJSO-style microbiology problems.
                  From bacterial cell structures to viral replication cycles, put your understanding to the test.
                </p>
                <Button variant="default" className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300">
                  Practice Microbiology Problems
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

export default Microbiology;
