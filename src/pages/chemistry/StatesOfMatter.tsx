import React from 'react';
import { ArrowLeft, ArrowRight, Beaker, Download, FileText, Info, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

const StatesOfMatter = () => {
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
              <Link to="/chemistry" className="text-white/80 hover:text-white text-sm flex items-center gap-1">
                Chemistry
              </Link>
              <span>/</span>
              <span className="text-sm">States of Matter</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Beaker className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold">States of Matter</h1>
            </div>
            <p className="text-xl max-w-3xl mt-4">
              Explore the properties of solids, liquids, and gases, and learn about the transitions between states.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <div className="prose max-w-none">
                <h2>States of Matter</h2>
                <p>
                  Matter exists in three common states: solid, liquid, and gas. The state of a substance
                  depends on the balance between the kinetic energy of its particles and the attractive
                  forces between them.
                </p>
                
                <div className="my-8 relative h-80 border border-green-200 rounded-lg bg-green-50 overflow-hidden">
                  <div className="absolute inset-0 flex">
                    {/* Solid State */}
                    <div className="w-1/3 h-full relative overflow-hidden border-r border-green-200">
                      <div className="absolute top-0 left-0 w-full px-4 py-2 bg-green-100 font-medium text-center">
                        Solid
                      </div>
                      <div className="h-full pt-10 flex flex-wrap justify-center content-center px-4">
                        {Array(40).fill(0).map((_, i) => (
                          <div 
                            key={i} 
                            className="w-6 h-6 m-1 rounded-full bg-blue-500 animate-[pulse_3s_ease-in-out_infinite]"
                            style={{ 
                              animationDelay: `${(i % 5) * 0.2}s`,
                              transform: `translateX(${(i % 3) * 2}px) translateY(${(i % 4) * 2}px)` 
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Liquid State */}
                    <div className="w-1/3 h-full relative overflow-hidden border-r border-green-200">
                      <div className="absolute top-0 left-0 w-full px-4 py-2 bg-green-100 font-medium text-center">
                        Liquid
                      </div>
                      <div className="h-full pt-10 px-4">
                        {Array(30).fill(0).map((_, i) => (
                          <div 
                            key={i} 
                            className="absolute w-6 h-6 rounded-full bg-blue-500"
                            style={{ 
                              top: `${20 + (i % 10) * 20}%`,
                              left: `${10 + (i % 5) * 18}%`,
                              animation: `float ${2 + (i % 3)}s ease-in-out infinite`
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Gas State */}
                    <div className="w-1/3 h-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full px-4 py-2 bg-green-100 font-medium text-center">
                        Gas
                      </div>
                      <div className="h-full pt-10 px-4">
                        {Array(20).fill(0).map((_, i) => (
                          <div 
                            key={i} 
                            className="absolute w-6 h-6 rounded-full bg-blue-500 opacity-80"
                            style={{ 
                              top: `${10 + (i % 20) * 15}%`,
                              left: `${5 + (i % 10) * 10}%`,
                              animation: `bounce ${3 + (i % 5)}s linear infinite`
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <style>
                  {`
                    @keyframes float {
                      0%, 100% { transform: translateY(0) translateX(0); }
                      25% { transform: translateY(10px) translateX(5px); }
                      50% { transform: translateY(5px) translateX(10px); }
                      75% { transform: translateY(-5px) translateX(8px); }
                    }
                    
                    @keyframes bounce {
                      0% { transform: translate(0, 0); }
                      25% { transform: translate(100%, 50%); }
                      50% { transform: translate(50%, 100%); }
                      75% { transform: translate(-50%, 50%); }
                      100% { transform: translate(0, 0); }
                    }
                  `}
                </style>
                
                <h3>Properties of Solids</h3>
                <ul>
                  <li>Definite shape and volume</li>
                  <li>Particles are closely packed in fixed positions</li>
                  <li>Particles vibrate but don't move freely</li>
                  <li>Low kinetic energy compared to liquids and gases</li>
                </ul>
                
                <h3>Properties of Liquids</h3>
                <ul>
                  <li>No definite shape but definite volume</li>
                  <li>Particles are close together but can move past each other</li>
                  <li>Moderate kinetic energy</li>
                  <li>Forms a meniscus when in a container</li>
                </ul>
                
                <h3>Properties of Gases</h3>
                <ul>
                  <li>No definite shape or volume</li>
                  <li>Particles are far apart and move freely</li>
                  <li>High kinetic energy</li>
                  <li>Expands to fill its container</li>
                </ul>
                
                <h2>Phase Transitions</h2>
                <p>
                  Matter can change from one state to another through phase transitions, which involve 
                  either the absorption or release of energy.
                </p>
                
                <div className="my-8 mx-auto max-w-xl">
                  <div className="relative h-64 border border-green-200 rounded-lg bg-green-50 p-4">
                    <div className="absolute inset-0">
                      {/* Phase Diagram */}
                      <div className="h-full relative px-8 pt-8 pb-4">
                        {/* Arrows and Labels */}
                        <div className="absolute top-12 left-1/4 transform -translate-x-1/2 text-center">
                          <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mb-2">
                            Solid
                          </div>
                        </div>
                        
                        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-center">
                          <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mb-2">
                            Liquid
                          </div>
                        </div>
                        
                        <div className="absolute top-12 left-3/4 transform -translate-x-1/2 text-center">
                          <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mb-2">
                            Gas
                          </div>
                        </div>
                        
                        {/* Melting */}
                        <div className="absolute top-24 left-1/3 transform -translate-x-1/2 w-32 text-center">
                          <div className="w-full h-px bg-green-600"></div>
                          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            Melting
                          </div>
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 -rotate-90">
                            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Freezing */}
                        <div className="absolute top-36 left-1/3 transform -translate-x-1/2 w-32 text-center">
                          <div className="w-full h-px bg-green-600"></div>
                          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            Freezing
                          </div>
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 rotate-90">
                            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Vaporization */}
                        <div className="absolute top-24 left-2/3 transform -translate-x-1/2 w-32 text-center">
                          <div className="w-full h-px bg-green-600"></div>
                          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            Vaporization
                          </div>
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 -rotate-90">
                            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Condensation */}
                        <div className="absolute top-36 left-2/3 transform -translate-x-1/2 w-32 text-center">
                          <div className="w-full h-px bg-green-600"></div>
                          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            Condensation
                          </div>
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 rotate-90">
                            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Sublimation */}
                        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 rotate-45 w-48 text-center origin-center">
                          <div className="w-full h-px bg-green-600 border-dashed"></div>
                          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            Sublimation
                          </div>
                          <div className="absolute -top-3 left-3/4 transform -translate-x-1/2 -rotate-45">
                            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Deposition */}
                        <div className="absolute top-44 left-1/2 transform -translate-x-1/2 rotate-45 w-48 text-center origin-center">
                          <div className="w-full h-px bg-green-600 border-dashed"></div>
                          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            Deposition
                          </div>
                          <div className="absolute -top-3 left-1/4 transform -translate-x-1/2 rotate-45">
                            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h2>Gas Laws</h2>
                <p>
                  The behavior of gases can be described by several gas laws that relate pressure, 
                  volume, temperature, and amount of gas.
                </p>
                
                <h3>Boyle's Law (P ∝ 1/V)</h3>
                <p>
                  At constant temperature, the pressure of a gas is inversely proportional to its volume.
                </p>
                
                <h3>Charles's Law (V ∝ T)</h3>
                <p>
                  At constant pressure, the volume of a gas is directly proportional to its absolute temperature.
                </p>
                
                <h3>Avogadro's Law (V ∝ n)</h3>
                <p>
                  At constant temperature and pressure, the volume of a gas is directly proportional to the 
                  amount (moles) of gas.
                </p>
                
                <h3>Ideal Gas Law (PV = nRT)</h3>
                <p>
                  Combines the above laws into a single equation relating pressure (P), volume (V), 
                  amount (n), and temperature (T), with R being the universal gas constant.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/4">
              <div className="sticky top-4">
                <Card className="mb-6">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium mb-4">Key Concepts</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Info className="h-3 w-3" />
                        </div>
                        <span className="text-sm">Solids, Liquids, and Gases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Info className="h-3 w-3" />
                        </div>
                        <span className="text-sm">Phase Transitions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Info className="h-3 w-3" />
                        </div>
                        <span className="text-sm">Kinetic Molecular Theory</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Info className="h-3 w-3" />
                        </div>
                        <span className="text-sm">Gas Laws</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Info className="h-3 w-3" />
                        </div>
                        <span className="text-sm">Solutions and Colligative Properties</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="mb-6">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium mb-4">Resources</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start gap-2">
                        <FileText className="h-4 w-4" />
                        <span>Study Notes (PDF)</span>
                      </Button>
                      <Button variant="outline" className="w-full justify-start gap-2">
                        <Download className="h-4 w-4" />
                        <span>Practice Problems</span>
                      </Button>
                      <Button variant="outline" className="w-full justify-start gap-2">
                        <Share2 className="h-4 w-4" />
                        <span>Share This Topic</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium mb-4">Related Topics</h3>
                    <div className="space-y-2">
                      <Button variant="link" asChild className="p-0 h-auto flex justify-start text-green-600">
                        <Link to="/chemistry/chemical-bonding">Chemical Bonding</Link>
                      </Button>
                      <Button variant="link" asChild className="p-0 h-auto flex justify-start text-green-600">
                        <Link to="/chemistry/thermochemistry">Thermochemistry</Link>
                      </Button>
                      <Button variant="link" asChild className="p-0 h-auto flex justify-start text-green-600">
                        <Link to="/chemistry/solutions">Solutions</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link to="/chemistry/chemical-bonding" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Previous: Chemical Bonding
              </Link>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/chemistry/stoichiometry" className="flex items-center gap-2">
                Next: Stoichiometry
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

export default StatesOfMatter;
