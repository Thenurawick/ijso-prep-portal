
import React from 'react';
import { ArrowRight, BookOpen, Heart, Dna, Flower2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Biology = () => {
  const topics = [
    {
      title: "Cell Biology",
      description: "Cell structure, function, and processes",
      icon: Flower2,
      path: "/biology/cell-biology"
    },
    {
      title: "Genetics",
      description: "Inheritance, DNA, and genetic mechanisms",
      icon: Dna,
      path: "/biology/genetics"
    },
    {
      title: "Physiology",
      description: "Organ systems and their functions",
      icon: Heart,
      path: "/biology/physiology"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-purple-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Link to="/" className="text-white/80 hover:text-white text-sm flex items-center gap-1">
                Home
              </Link>
              <span>/</span>
              <span className="text-sm">Biology</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Biology</h1>
            <p className="text-xl max-w-3xl">
              Explore the science of life from molecular foundations to complex ecosystems.
              Build your knowledge and problem-solving skills for the IJSO biology section.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold mb-6">Topics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {topics.map((topic) => (
              <Card key={topic.title} className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <topic.icon className="h-5 w-5 text-purple-600" />
                    <CardTitle>{topic.title}</CardTitle>
                  </div>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-end">
                  <Button variant="outline" asChild className="w-full justify-between mt-4">
                    <Link to={topic.path}>
                      Explore Topic <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
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
                <Button variant="default" className="bg-purple-600 hover:bg-purple-700">
                  View All Biology Problems
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Biology;
