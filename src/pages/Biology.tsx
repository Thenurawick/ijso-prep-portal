
import React from 'react';
import { ArrowRight, BookOpen, Dna, Flower2, Heart, Droplets, Rabbit } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Biology = () => {
  const topics = [
    {
      title: "Genetics",
      description: "Inheritance, DNA, and genetic mechanisms",
      icon: Dna,
      path: "/biology/genetics",
      image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Botany",
      description: "Plant structure, function, and diversity",
      icon: Flower2,
      path: "/biology/botany",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Zoology",
      description: "Animal structure, function, and behavior",
      icon: Rabbit,
      path: "/biology/zoology",
      image: "https://images.unsplash.com/photo-1533147670608-2a2f9775d2a1?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Cell Biology",
      description: "Cell structure, function, and processes",
      icon: Droplets,
      path: "/biology/cell-biology",
      image: "https://images.unsplash.com/photo-1626302886730-9a9b0f3383c9?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Ecology",
      description: "Interactions between organisms and environment",
      icon: Heart,
      path: "/biology/ecology",
      image: "https://images.unsplash.com/photo-1500829243541-74b677fecc30?q=80&w=500&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-purple-600 text-white py-12 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-600 opacity-90"></div>
            <img 
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop" 
              alt="Biology background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Link to="/" className="text-white/80 hover:text-white text-sm flex items-center gap-1">
                Home
              </Link>
              <span>/</span>
              <span className="text-sm">Biology</span>
            </div>
            <motion.h1 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Biology
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore the science of life from molecular foundations to complex ecosystems.
              Build your knowledge and problem-solving skills for the IJSO biology section.
            </motion.p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.h2 
            className="text-2xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Topics
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="h-full flex flex-col overflow-hidden">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={topic.image} 
                      alt={topic.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <topic.icon className="h-5 w-5 text-purple-600" />
                      <CardTitle>{topic.title}</CardTitle>
                    </div>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-end">
                    <Button variant="outline" asChild className="w-full justify-between mt-4 group">
                      <Link to={topic.path}>
                        Explore Topic 
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="bg-purple-50 p-6 rounded-lg border border-purple-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-2 rounded-full">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Ready to practice?</h3>
                <p className="text-muted-foreground mb-4">
                  Deepen your understanding of biological concepts with our IJSO-style problems.
                  Select a topic above to begin exploring subtopics and practice questions.
                </p>
                <Button variant="default" className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300">
                  View All Biology Problems
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

export default Biology;
