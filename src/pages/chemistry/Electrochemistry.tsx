
import React from 'react';
import { ArrowLeft, ArrowRight, TestTube, Download, FileText, Info, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Electrochemistry = () => {
  const topics = [
    {
      title: "Electrolysis",
      description: "Using electricity to drive non-spontaneous chemical reactions.",
      icon: "⚡"
    },
    {
      title: "Faraday's Law of Electrolysis",
      description: "Relating the amount of substance produced to the electricity used.",
      icon: "⚖️"
    },
    {
      title: "Electrolytes and Non-Electrolytes",
      description: "Substances that do and don't conduct electricity in solution.",
      icon: "🔌"
    },
    {
      title: "Electrodes",
      description: "The conductors through which electricity enters or leaves a cell.",
      icon: "🔋"
    },
    {
      title: "Redox Reactions in Electrolysis",
      description: "The oxidation-reduction processes occurring during electrolysis.",
      icon: "↔️"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white py-12">
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
              <span className="text-sm">Electrochemistry</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <TestTube className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold">Electrochemistry</h1>
            </div>
            <p className="text-xl max-w-3xl mt-4">
              The relationship between electricity and chemical reactions.
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
          
          <div className="bg-cyan-50 rounded-lg border border-cyan-100 overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-cyan-800 mb-4">Galvanic Cell Demonstration</h2>
              <p className="text-cyan-700 mb-6">
                Explore how a basic zinc-copper galvanic cell works:
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 p-4 bg-white">
                <div className="h-80 bg-cyan-50 rounded-lg relative overflow-hidden">
                  {/* Galvanic Cell Visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Left beaker - Zinc electrode */}
                    <div className="h-60 w-32 bg-white bg-opacity-60 rounded-lg mx-4 relative border border-gray-200">
                      <div className="absolute inset-x-0 bottom-0 h-48 bg-blue-200 rounded-b-lg"></div>
                      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-4 h-48 bg-gray-400 rounded-t-sm">
                        <div className="absolute top-0 left-0 right-0 text-[8px] text-center font-bold text-white">Zn</div>
                        {/* Zinc ions */}
                        {Array.from({length: 8}).map((_, i) => (
                          <div 
                            key={`zn-${i}`} 
                            className="absolute w-2 h-2 rounded-full bg-gray-400 text-[8px] flex items-center justify-center text-white"
                            style={{
                              top: `${20 + (i * 5)}px`,
                              left: `${i % 2 === 0 ? -6 : 8}px`,
                              animation: `float ${2 + (i % 3)}s ease-in-out infinite`
                            }}
                          >
                            +
                          </div>
                        ))}
                      </div>
                      <div className="absolute bottom-1 left-2 text-[10px] text-blue-800">Zn²⁺</div>
                    </div>
                    
                    {/* Salt bridge */}
                    <div className="h-12 w-32 bg-yellow-100 border border-yellow-300 rounded-lg relative">
                      {/* Ions moving through salt bridge */}
                      <div className="absolute top-1/2 transform -translate-y-1/2 w-full">
                        <div className="h-1 w-1 bg-red-400 rounded-full absolute animate-[moveLeft_4s_linear_infinite]" style={{ left: '75%' }}></div>
                        <div className="h-1 w-1 bg-blue-400 rounded-full absolute animate-[moveRight_4s_linear_infinite]" style={{ left: '25%' }}></div>
                        <div className="h-1 w-1 bg-red-400 rounded-full absolute animate-[moveLeft_5s_linear_infinite]" style={{ left: '60%', top: '4px' }}></div>
                        <div className="h-1 w-1 bg-blue-400 rounded-full absolute animate-[moveRight_5s_linear_infinite]" style={{ left: '40%', top: '4px' }}></div>
                      </div>
                    </div>
                    
                    {/* Right beaker - Copper electrode */}
                    <div className="h-60 w-32 bg-white bg-opacity-60 rounded-lg mx-4 relative border border-gray-200">
                      <div className="absolute inset-x-0 bottom-0 h-48 bg-blue-200 rounded-b-lg"></div>
                      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-4 h-48 bg-yellow-600 rounded-t-sm">
                        <div className="absolute top-0 left-0 right-0 text-[8px] text-center font-bold text-white">Cu</div>
                        {/* Copper ions */}
                        {Array.from({length: 8}).map((_, i) => (
                          <div 
                            key={`cu-${i}`} 
                            className="absolute w-2 h-2 rounded-full bg-yellow-600 text-[8px] flex items-center justify-center text-white"
                            style={{
                              top: `${20 + (i * 5)}px`,
                              left: `${i % 2 === 0 ? -6 : 8}px`,
                              animation: `float ${2 + (i % 3)}s ease-in-out infinite`
                            }}
                          >
                            +
                          </div>
                        ))}
                      </div>
                      <div className="absolute bottom-1 left-2 text-[10px] text-blue-800">Cu²⁺</div>
                    </div>
                    
                    {/* Voltmeter and wires */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-40 h-16 bg-white border border-gray-300 rounded flex items-center justify-center">
                      <div className="h-8 w-16 bg-gray-100 border border-gray-400 rounded relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-sm font-bold">1.10 V</div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-24 left-1/3 w-2 h-48 bg-red-500 rounded"></div>
                    <div className="absolute top-24 right-1/3 w-2 h-48 bg-black rounded"></div>
                    
                    {/* Electron flow */}
                    <div className="absolute top-20 w-3/4 h-4">
                      {Array.from({length: 6}).map((_, i) => (
                        <div 
                          key={`e-${i}`} 
                          className="absolute w-2 h-2 rounded-full bg-blue-500"
                          style={{
                            left: `${(i * 20) + 5}%`,
                            animation: `moveRight ${1 + (i % 2)}s linear infinite`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3 p-4 bg-cyan-100">
                <h3 className="font-medium text-cyan-800 mb-4">How It Works:</h3>
                <ol className="text-sm text-cyan-700 space-y-3 list-decimal pl-5">
                  <li>
                    <span className="font-medium">Oxidation at Anode (Zinc):</span>
                    <p className="mt-1 text-xs">Zn → Zn²⁺ + 2e⁻</p>
                    <p className="text-xs text-cyan-600 mt-1">Zinc metal loses electrons and dissolves as Zn²⁺ ions.</p>
                  </li>
                  <li>
                    <span className="font-medium">Electron Flow:</span>
                    <p className="text-xs text-cyan-600 mt-1">Electrons travel through the external circuit from zinc to copper.</p>
                  </li>
                  <li>
                    <span className="font-medium">Reduction at Cathode (Copper):</span>
                    <p className="mt-1 text-xs">Cu²⁺ + 2e⁻ → Cu</p>
                    <p className="text-xs text-cyan-600 mt-1">Copper ions gain electrons and deposit as copper metal.</p>
                  </li>
                  <li>
                    <span className="font-medium">Ion Flow:</span>
                    <p className="text-xs text-cyan-600 mt-1">The salt bridge allows ions to flow between the solutions, maintaining electrical neutrality.</p>
                  </li>
                  <li>
                    <span className="font-medium">Overall Reaction:</span>
                    <p className="mt-1 text-xs">Zn + Cu²⁺ → Zn²⁺ + Cu</p>
                    <p className="text-xs text-cyan-600 mt-1">A spontaneous redox reaction generates electrical energy.</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          
          <style>
            {`
              @keyframes float {
                0%, 100% { transform: translateY(0) translateX(0); }
                25% { transform: translateY(5px) translateX(3px); }
                50% { transform: translateY(2px) translateX(5px); }
                75% { transform: translateY(-3px) translateX(2px); }
              }
              
              @keyframes moveRight {
                0% { transform: translateX(0); }
                100% { transform: translateX(100px); }
              }
              
              @keyframes moveLeft {
                0% { transform: translateX(0); }
                100% { transform: translateX(-100px); }
              }
            `}
          </style>
          
          <Tabs defaultValue="electrolysis" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="electrolysis">Electrolysis</TabsTrigger>
              <TabsTrigger value="faraday">Faraday's Laws</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
            </TabsList>
            <TabsContent value="electrolysis" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-medium mb-3">Electrolysis Process</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Electrolysis is the process of using electrical energy to drive a non-spontaneous chemical reaction. It involves passing an electric current through an electrolyte to cause chemical changes.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-cyan-50 rounded p-3">
                    <h4 className="font-medium text-cyan-700 mb-2">Electrolysis of Water</h4>
                    <div className="bg-white p-2 rounded mb-2">
                      <p className="text-xs text-center">
                        Cathode: 2H₂O + 2e⁻ → H₂ + 2OH⁻<br />
                        Anode: 2H₂O → O₂ + 4H⁺ + 4e⁻<br />
                        Overall: 2H₂O → 2H₂ + O₂
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground">Water is split into hydrogen gas at the cathode and oxygen gas at the anode.</p>
                  </div>
                  
                  <div className="bg-cyan-50 rounded p-3">
                    <h4 className="font-medium text-cyan-700 mb-2">Electroplating</h4>
                    <div className="bg-white p-2 rounded mb-2">
                      <p className="text-xs text-center">
                        Anode: M → M^n+ + ne⁻<br />
                        Cathode: M^n+ + ne⁻ → M<br />
                        (where M is the metal being plated)
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground">Metal ions from the solution are reduced at the cathode, coating it with a thin layer of metal.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="faraday" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-medium mb-3">Faraday's Laws of Electrolysis</h3>
              <div className="space-y-6">
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h4 className="font-medium text-cyan-700 mb-2">First Law</h4>
                  <p className="text-muted-foreground mb-2">
                    The mass of a substance produced at an electrode during electrolysis is directly proportional to the quantity of electricity passed through the electrolyte.
                  </p>
                  <div className="bg-white p-2 rounded">
                    <p className="text-center font-mono">m ∝ Q</p>
                    <p className="text-xs text-center text-muted-foreground mt-1">
                      m: mass of substance produced<br />
                      Q: quantity of electricity (coulombs)
                    </p>
                  </div>
                </div>
                
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h4 className="font-medium text-cyan-700 mb-2">Second Law</h4>
                  <p className="text-muted-foreground mb-2">
                    When the same quantity of electricity is passed through different electrolytes, the mass of substances produced at the electrodes is directly proportional to their chemical equivalents.
                  </p>
                  <div className="bg-white p-2 rounded">
                    <p className="text-center font-mono">m = (M × Q) / (n × F)</p>
                    <p className="text-xs text-center text-muted-foreground mt-1">
                      m: mass deposited (g)<br />
                      M: molar mass (g/mol)<br />
                      Q: charge passed (coulombs)<br />
                      n: number of electrons transferred<br />
                      F: Faraday's constant (96,485 C/mol)
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="applications" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-medium mb-3">Industrial Applications</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-cyan-100 p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-medium">Metal Extraction and Refining</h4>
                    <p className="text-muted-foreground">
                      Electrochemical processes are used to extract metals like aluminum from their ores and to purify copper and other metals.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-cyan-100 p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-medium">Electroplating</h4>
                    <p className="text-muted-foreground">
                      Decorative and protective metal coatings are applied to objects using electrolysis. Examples include chrome plating, gold plating, and nickel plating.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-cyan-100 p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-medium">Chlor-Alkali Process</h4>
                    <p className="text-muted-foreground">
                      Electrolysis of sodium chloride solution (brine) to produce chlorine gas, hydrogen gas, and sodium hydroxide—three important industrial chemicals.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-cyan-100 p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-medium">Batteries and Fuel Cells</h4>
                    <p className="text-muted-foreground">
                      Electrochemical cells convert chemical energy into electrical energy (batteries) or convert fuel directly into electricity (fuel cells).
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <Separator className="my-8" />
          
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link to="/chemistry/equilibrium" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Previous: Equilibrium
              </Link>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/chemistry/organic" className="flex items-center gap-2">
                Next: Organic Chemistry
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

export default Electrochemistry;
