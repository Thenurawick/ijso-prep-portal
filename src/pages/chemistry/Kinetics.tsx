
import React from 'react';
import { ArrowLeft, ArrowRight, Zap, Download, FileText, Info, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Kinetics = () => {
  const topics = [
    {
      title: "Rate of Reactions",
      description: "Measuring and expressing the speed of chemical reactions.",
      icon: "⏱️"
    },
    {
      title: "Factors Affecting the Rate of Reactions",
      description: "Temperature, concentration, surface area, catalysts, and other factors.",
      icon: "🔥"
    },
    {
      title: "Collision Theory",
      description: "Understanding how molecular collisions lead to chemical reactions.",
      icon: "💥"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-12">
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
              <span className="text-sm">Chemical Kinetics</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Zap className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold">Chemical Kinetics</h1>
            </div>
            <p className="text-xl max-w-3xl mt-4">
              The study of reaction rates and the factors that affect them.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
          
          <div className="bg-teal-50 rounded-lg border border-teal-100 overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-teal-800 mb-4">Chemical Reaction Rates Visualized</h2>
              <p className="text-teal-700 mb-6">
                Watch how different factors affect the speed of chemical reactions:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-teal-200">
              <div className="bg-white p-4">
                <h3 className="font-medium text-teal-800 mb-2">Temperature Effect</h3>
                <div className="h-40 bg-teal-50 rounded-lg relative overflow-hidden mb-2">
                  {/* Animation for temperature effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="relative">
                          <div className="w-8 h-8 rounded-full bg-blue-400 absolute" 
                               style={{animation: "bounce 3s linear infinite", top: "-16px", left: "-16px"}}></div>
                          <div className="w-8 h-8 rounded-full bg-red-400 absolute" 
                               style={{animation: "bounce 4s linear infinite", top: "16px", left: "16px"}}></div>
                          <div className="w-8 h-8 rounded-full bg-green-400 absolute" 
                               style={{animation: "bounce 2.5s linear infinite", top: "0px", left: "0px"}}></div>
                          <div className="w-8 h-8 rounded-full bg-yellow-400 absolute" 
                               style={{animation: "bounce 3.5s linear infinite", top: "-8px", left: "8px"}}></div>
                        </div>
                      </div>
                      {/* Thermometer */}
                      <div className="absolute top-0 right-0 w-4 h-24 bg-white border border-gray-300 rounded-t-full overflow-hidden">
                        <div className="w-2 h-12 bg-red-500 absolute bottom-0 left-1/2 transform -translate-x-1/2" 
                             style={{animation: "grow 4s ease-in-out infinite"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Higher temperatures increase the average kinetic energy, leading to more frequent and energetic collisions.
                </p>
              </div>
              
              <div className="bg-white p-4">
                <h3 className="font-medium text-teal-800 mb-2">Concentration Effect</h3>
                <div className="h-40 bg-teal-50 rounded-lg relative overflow-hidden mb-2">
                  {/* Animation for concentration effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="grid grid-cols-4 grid-rows-4 gap-1">
                          {Array.from({length: 16}).map((_, i) => (
                            <div key={i} className="w-6 h-6 rounded-full bg-purple-400" 
                                 style={{animation: `pulse ${1 + (i % 3)}s ease-in-out infinite`}}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Higher concentrations mean more particles in the same volume, increasing collision frequency.
                </p>
              </div>
              
              <div className="bg-white p-4">
                <h3 className="font-medium text-teal-800 mb-2">Catalyst Effect</h3>
                <div className="h-40 bg-teal-50 rounded-lg relative overflow-hidden mb-2">
                  {/* Animation for catalyst effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        {/* Energy barrier */}
                        <div className="w-32 h-2 bg-red-400 absolute top-1/2 transform -translate-y-1/2"></div>
                        {/* Lower energy barrier with catalyst */}
                        <div className="w-32 h-1 bg-green-400 absolute top-1/2 transform -translate-y-1/2 translate-y-4"></div>
                        
                        {/* Particles moving over barriers */}
                        <div className="w-6 h-6 rounded-full bg-blue-400 absolute" 
                             style={{animation: "moveOver 5s linear infinite", top: "16px", left: "-16px"}}></div>
                        <div className="w-6 h-6 rounded-full bg-yellow-400 absolute" 
                             style={{animation: "moveOverFast 2.5s linear infinite", top: "24px", left: "-16px"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Catalysts provide an alternative reaction pathway with a lower activation energy.
                </p>
              </div>
            </div>
          </div>
          
          <style>
            {`
              @keyframes bounce {
                0%, 100% { transform: translate(0, 0); }
                25% { transform: translate(10px, 15px); }
                50% { transform: translate(20px, 0px); }
                75% { transform: translate(-10px, 10px); }
              }
              
              @keyframes grow {
                0%, 100% { height: 12px; }
                50% { height: 22px; }
              }
              
              @keyframes moveOver {
                0% { transform: translate(0, 0); }
                40% { transform: translate(16px, -16px); }
                50% { transform: translate(32px, 0); }
                90% { transform: translate(48px, 0); }
                100% { transform: translate(64px, 0); }
              }
              
              @keyframes moveOverFast {
                0% { transform: translate(0, 0); }
                40% { transform: translate(16px, 8px); }
                50% { transform: translate(32px, 16px); }
                90% { transform: translate(48px, 16px); }
                100% { transform: translate(64px, 16px); }
              }
            `}
          </style>
          
          <Tabs defaultValue="theory" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="theory">Key Theory</TabsTrigger>
              <TabsTrigger value="equations">Rate Equations</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
            </TabsList>
            <TabsContent value="theory" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-medium mb-3">Fundamental Concepts</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Reaction Rate</h4>
                  <p className="text-muted-foreground">The change in concentration of reactants or products per unit time.</p>
                </div>
                <div>
                  <h4 className="font-medium">Activation Energy</h4>
                  <p className="text-muted-foreground">The minimum energy required for a reaction to occur.</p>
                </div>
                <div>
                  <h4 className="font-medium">Reaction Mechanism</h4>
                  <p className="text-muted-foreground">The step-by-step sequence of elementary reactions that make up an overall reaction.</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="equations" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-medium mb-3">Rate Law Expressions</h3>
              <div className="space-y-4">
                <div className="bg-slate-50 p-3 rounded">
                  <p className="font-medium">For a reaction: aA + bB → products</p>
                  <p className="text-muted-foreground mt-2">Rate = k[A]ˣ[B]ʸ</p>
                  <p className="text-sm text-muted-foreground mt-1">Where k is the rate constant, x and y are the reaction orders with respect to A and B.</p>
                </div>
                <div className="bg-slate-50 p-3 rounded">
                  <p className="font-medium">Arrhenius Equation</p>
                  <p className="text-muted-foreground mt-2">k = Ae^(-Ea/RT)</p>
                  <p className="text-sm text-muted-foreground mt-1">Relates rate constant to temperature and activation energy.</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="applications" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-medium mb-3">Real-World Applications</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-teal-100 p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-medium">Food Preservation</h4>
                    <p className="text-muted-foreground">Refrigeration slows down food spoilage by decreasing reaction rates.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-teal-100 p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-medium">Pharmaceutical Industry</h4>
                    <p className="text-muted-foreground">Drug shelf life is determined by the rate of decomposition reactions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-teal-100 p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-medium">Industrial Processes</h4>
                    <p className="text-muted-foreground">Catalysts are used to speed up reactions in manufacturing.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <Separator className="my-8" />
          
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link to="/chemistry/thermochemistry" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Previous: Thermochemistry
              </Link>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/chemistry/equilibrium" className="flex items-center gap-2">
                Next: Equilibrium
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

export default Kinetics;
