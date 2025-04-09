
import React from 'react';
import { ArrowRight, BookOpen, Atom, AtomIcon, Beaker, TestTube2, Droplets, BarChart3, FlaskConical, TestTube, Zap, Gauge, Microscope } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Chemistry = () => {
  const topics = [
    {
      title: "Atomic Structure and Periodicity",
      description: "Atomic theory and patterns in the periodic table",
      icon: Atom,
      path: "/chemistry/atomic-structure",
      image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=500&auto=format&fit=crop",
      color: "bg-green-600",
      subtopics: [
        "Structure of Particles and Atoms", 
        "Elements, Isotopes", 
        "Relative Atomic Mass", 
        "Electronic Configuration", 
        "Periodic Table Layout and Trends", 
        "Group Properties"
      ]
    },
    {
      title: "Chemical Bonding",
      description: "Mechanisms of chemical bonding between atoms",
      icon: AtomIcon,
      path: "/chemistry/chemical-bonding",
      image: "https://images.unsplash.com/photo-1618504392463-80f03f02caad?q=80&w=500&auto=format&fit=crop",
      color: "bg-green-500",
      subtopics: [
        "Group Properties", 
        "Types of Bonding", 
        "Lewis Dot Structures", 
        "Polar and Non-Polar Molecules", 
        "Intermolecular Forces", 
        "Molecular Shapes and VSEPR Theory"
      ]
    },
    {
      title: "States of Matter",
      description: "Properties of solids, liquids, and gases",
      icon: Beaker,
      path: "/chemistry/states-of-matter",
      image: "https://images.unsplash.com/photo-1596715671430-dd5d61b52f2c?q=80&w=500&auto=format&fit=crop",
      color: "bg-green-400",
      subtopics: [
        "Solids, Liquids and Gas", 
        "Latent Heat", 
        "Heating Curves, Cooling Curves", 
        "Gas Laws", 
        "Kinetic Molecular Theory of Gases"
      ]
    },
    {
      title: "Stoichiometry",
      description: "Quantitative relationships in chemical reactions",
      icon: BarChart3,
      path: "/chemistry/stoichiometry",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=500&auto=format&fit=crop",
      color: "bg-emerald-600",
      subtopics: [
        "Mole Concept", 
        "Molar Mass and Molecular Mass", 
        "Empirical and Molecular Formula", 
        "Balanced Chemical Equations", 
        "Limiting Reactants", 
        "Percentage Yield and Purity", 
        "Concentration"
      ]
    },
    {
      title: "Chemical Reactions",
      description: "Types and mechanisms of chemical changes",
      icon: FlaskConical,
      path: "/chemistry/chemical-reactions",
      image: "https://images.unsplash.com/photo-1616661317531-d830b7c60a6e?q=80&w=500&auto=format&fit=crop",
      color: "bg-emerald-500",
      subtopics: [
        "Combination Reactions", 
        "Decomposition Reactions", 
        "Displacement Reactions", 
        "Redox Reactions", 
        "Activity Series of Metals", 
        "Exothermic and Endothermic Reactions"
      ]
    },
    {
      title: "Acids, Bases and Salts",
      description: "Properties and reactions of acids and bases",
      icon: TestTube2,
      path: "/chemistry/acids-bases",
      image: "https://images.unsplash.com/photo-1589219427095-92edfd6d35f3?q=80&w=500&auto=format&fit=crop",
      color: "bg-emerald-400",
      subtopics: [
        "Varying Definitions of Acids and Bases", 
        "Properties of Acids and Bases", 
        "pH scale and Indicators", 
        "Strong vs Weak Acids / Bases", 
        "Neutralization Reactions", 
        "Preparation of Salts", 
        "Titrations"
      ]
    },
    {
      title: "Thermochemistry",
      description: "Energy changes in chemical processes",
      icon: Gauge,
      path: "/chemistry/thermochemistry",
      image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=500&auto=format&fit=crop",
      color: "bg-teal-600",
      subtopics: [
        "Heat of Reaction, Formation, Combustion and Neutralization", 
        "Enthalphy Diagrams", 
        "Energy Level Diagrams", 
        "Bond Energy", 
        "Entropy", 
        "Gibbs Free Energy"
      ]
    },
    {
      title: "Chemical Kinetics",
      description: "Rates and mechanisms of chemical reactions",
      icon: Zap,
      path: "/chemistry/kinetics",
      image: "https://images.unsplash.com/photo-1576086135878-de63ad3307ea?q=80&w=500&auto=format&fit=crop",
      color: "bg-teal-500",
      subtopics: [
        "Rate of Reactions", 
        "Factors Affecting the Rate of Reactions", 
        "Collision Theory"
      ]
    },
    {
      title: "Equilibrium",
      description: "Chemical systems at dynamic equilibrium",
      icon: Droplets,
      path: "/chemistry/equilibrium",
      image: "https://images.unsplash.com/photo-1603126408348-67c58368bfb6?q=80&w=500&auto=format&fit=crop",
      color: "bg-teal-400",
      subtopics: [
        "Dynamic Equilibrium Concept", 
        "Le Chatelier's Principle", 
        "Acid Base Equilibria", 
        "Solubility Equilibria", 
        "Equilibrium Calculations", 
        "Buffer Solutions", 
        "Henderson-Hasselbalch Equation"
      ]
    },
    {
      title: "Electrochemistry",
      description: "Chemical reactions involving electricity",
      icon: TestTube,
      path: "/chemistry/electrochemistry",
      image: "https://images.unsplash.com/photo-1556126286-e4ad4b4e56de?q=80&w=500&auto=format&fit=crop",
      color: "bg-cyan-600",
      subtopics: [
        "Electrolysis", 
        "Faraday's Law of Electrolysis", 
        "Electrolytes and Non - Electrolytes", 
        "Electrodes", 
        "Redox Reactions in Electrolysis"
      ]
    },
    {
      title: "Organic Chemistry",
      description: "Chemistry of carbon compounds",
      icon: Microscope,
      path: "/chemistry/organic",
      image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=500&auto=format&fit=crop",
      color: "bg-cyan-500",
      subtopics: [
        "Hydrocarbons", 
        "Functional Groups", 
        "Naming Simple Organic Compounds", 
        "Isomerism", 
        "Basic Organic Reactions"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Link to="/" className="text-white/80 hover:text-white text-sm flex items-center gap-1">
                Home
              </Link>
              <span>/</span>
              <span className="text-sm">Chemistry</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Chemistry</h1>
            <p className="text-xl max-w-3xl">
              Discover the fascinating world of chemical reactions, atomic structure, and molecular interactions.
              Master the concepts needed for success in the IJSO competition.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold mb-6">Topics</h2>
          
          <Tabs defaultValue="grid" className="mb-8">
            <TabsList className="mb-4">
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="carousel">Carousel</TabsTrigger>
              <TabsTrigger value="list">List View</TabsTrigger>
            </TabsList>
            
            <TabsContent value="grid">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topics.map((topic) => (
                  <Card key={topic.title} className="h-full flex flex-col hover:shadow-md transition-shadow overflow-hidden group">
                    <div 
                      className="h-48 relative overflow-hidden" 
                      style={{ 
                        backgroundImage: `url(${topic.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-4 w-full">
                          <div className="flex items-center gap-2 mb-1">
                            <div className={`w-8 h-8 rounded-full ${topic.color} flex items-center justify-center`}>
                              <topic.icon className="h-4 w-4 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">{topic.title}</h3>
                          </div>
                          <p className="text-white/80 text-sm">{topic.description}</p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="flex-grow flex flex-col py-4">
                      <div className="flex-grow">
                        <div className="text-sm text-muted-foreground mb-3">
                          Key concepts: {topic.subtopics.slice(0, 3).join(", ")}, and more...
                        </div>
                      </div>
                      <Button variant="outline" asChild className="w-full justify-between mt-4 group-hover:bg-green-50 transition-colors">
                        <Link to={topic.path}>
                          Explore Topic <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="carousel">
              <Carousel className="w-full">
                <CarouselContent>
                  {topics.map((topic) => (
                    <CarouselItem key={topic.title} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="h-[400px] flex flex-col">
                        <div 
                          className="h-48 relative overflow-hidden" 
                          style={{ 
                            backgroundImage: `url(${topic.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                            <div className="p-4">
                              <div className={`w-8 h-8 rounded-full ${topic.color} flex items-center justify-center mb-2`}>
                                <topic.icon className="h-4 w-4 text-white" />
                              </div>
                              <h3 className="text-xl font-semibold text-white">{topic.title}</h3>
                            </div>
                          </div>
                        </div>
                        <CardContent className="flex-grow flex flex-col py-4">
                          <p className="text-sm text-muted-foreground mb-4">{topic.description}</p>
                          <div className="flex-grow flex flex-col">
                            <div className="text-xs text-muted-foreground mb-1">Key concepts:</div>
                            <ul className="text-sm space-y-1 mb-4">
                              {topic.subtopics.slice(0, 3).map((subtopic) => (
                                <li key={subtopic} className="flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                                  {subtopic}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Button asChild className="w-full mt-auto bg-green-600 hover:bg-green-700">
                            <Link to={topic.path}>
                              Explore {topic.title}
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-end gap-2 mt-4">
                  <CarouselPrevious className="static transform-none" />
                  <CarouselNext className="static transform-none" />
                </div>
              </Carousel>
            </TabsContent>
            
            <TabsContent value="list">
              <Accordion type="single" collapsible className="w-full">
                {topics.map((topic, index) => (
                  <AccordionItem key={topic.title} value={`item-${index + 1}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${topic.color} flex items-center justify-center`}>
                          <topic.icon className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-left">{topic.title}</h3>
                          <p className="text-sm text-muted-foreground text-left">{topic.description}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-11 pr-4 pb-2">
                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2">Key Concepts:</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                            {topic.subtopics.map((subtopic) => (
                              <li key={subtopic} className="text-sm flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                                {subtopic}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button asChild className="bg-green-600 hover:bg-green-700">
                          <Link to={topic.path}>
                            Explore Full Topic
                          </Link>
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-100">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-full">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Ready to practice?</h3>
                <p className="text-muted-foreground mb-4">
                  Enhance your chemistry knowledge with our collection of IJSO-style problems.
                  Select a topic above to begin exploring subtopics and practice questions.
                </p>
                <Button variant="default" className="bg-green-600 hover:bg-green-700">
                  View All Chemistry Problems
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

export default Chemistry;
