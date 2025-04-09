
import React from 'react';
import { ArrowLeft, ArrowRight, Droplets, Download, FileText, Info, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Equilibrium = () => {
  const topics = [
    {
      title: "Dynamic Equilibrium Concept",
      description: "Understanding the balance between forward and reverse reactions.",
      icon: "⚖️"
    },
    {
      title: "Le Chatelier's Principle",
      description: "How equilibrium systems respond to changes in conditions.",
      icon: "🔄"
    },
    {
      title: "Acid Base Equilibria",
      description: "Equilibrium concepts applied to acid-base systems.",
      icon: "🧪"
    },
    {
      title: "Solubility Equilibria",
      description: "Dissolution and precipitation at equilibrium.",
      icon: "💧"
    },
    {
      title: "Equilibrium Calculations",
      description: "Calculating equilibrium constants and concentrations.",
      icon: "🧮"
    },
    {
      title: "Buffer Solutions",
      description: "Systems that resist changes in pH.",
      icon: "🛡️"
    },
    {
      title: "Henderson-Hasselbalch Equation",
      description: "Mathematical relationship between pH, pKa, and concentrations in buffer solutions.",
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-teal-400 to-teal-500 text-white py-12">
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
              <span className="text-sm">Equilibrium</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Droplets className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold">Equilibrium</h1>
            </div>
            <p className="text-xl max-w-3xl mt-4">
              Understanding the dynamic balance in reversible chemical reactions.
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
                    <h3 className="text-lg font-semibold">{topic.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{topic.description}</p>
                  <Button variant="outline" className="w-full">
                    Explore {topic.title}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="bg-teal-50 p-6 rounded-lg border border-teal-100 mb-8">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">Chemical Equilibrium Visualized</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-medium text-teal-700 mb-4">N₂O₄ ⇌ 2NO₂ Equilibrium</h3>
                
                <div className="h-60 bg-teal-50 rounded-lg relative overflow-hidden mb-4">
                  {/* Dynamic equilibrium animation */}
                  <div className="absolute inset-0">
                    <div className="absolute left-0 top-0 bottom-0 w-1/2 border-r border-dashed border-teal-300 flex items-center justify-center">
                      <div className="relative h-40 w-40">
                        {/* N2O4 molecules */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          {Array.from({length: 10}).map((_, i) => (
                            <div 
                              key={`n2o4-${i}`} 
                              className="absolute w-8 h-4 bg-blue-400 rounded-full" 
                              style={{
                                top: `${Math.sin(i) * 60}px`,
                                left: `${Math.cos(i) * 60}px`,
                                opacity: 0.8,
                                animation: `pulse ${2 + (i % 3)}s ease-in-out infinite`
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-teal-600">N₂O₄ (colorless)</div>
                    </div>
                    
                    <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center">
                      <div className="relative h-40 w-40">
                        {/* NO2 molecules */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          {Array.from({length: 20}).map((_, i) => (
                            <div 
                              key={`no2-${i}`} 
                              className="absolute w-4 h-4 bg-amber-500 rounded-full" 
                              style={{
                                top: `${Math.sin(i) * 70}px`,
                                left: `${Math.cos(i) * 70}px`,
                                opacity: 0.7,
                                animation: `float ${1.5 + (i % 4)}s ease-in-out infinite`
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-teal-600">NO₂ (brown)</div>
                    </div>
                    
                    {/* Arrows indicating the forward and reverse reactions */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 flex items-center justify-center">
                      <div className="bg-white/80 px-3 py-1 rounded-full">
                        <div className="flex items-center">
                          <div className="h-0.5 w-12 bg-teal-500 relative">
                            <div className="absolute right-0 top-1/2 transform translate-x-0 -translate-y-1/2 border-t-[4px] border-r-[4px] border-b-[4px] border-t-transparent border-r-teal-500 border-b-transparent"></div>
                          </div>
                          <div className="mx-2 text-xs text-teal-600">⇌</div>
                          <div className="h-0.5 w-12 bg-teal-500 relative">
                            <div className="absolute left-0 top-1/2 transform -translate-x-0 -translate-y-1/2 border-t-[4px] border-l-[4px] border-b-[4px] border-t-transparent border-l-teal-500 border-b-transparent"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <p>At equilibrium, the rate of the forward reaction (N₂O₄ → 2NO₂) equals the rate of the reverse reaction (2NO₂ → N₂O₄), resulting in constant concentrations despite ongoing molecular changes.</p>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-medium text-teal-700 mb-4">Le Chatelier's Principle in Action</h3>
                
                <div className="space-y-4">
                  <div className="bg-teal-50 p-3 rounded-lg flex items-start gap-3">
                    <div className="text-2xl mt-1">🌡️</div>
                    <div>
                      <h4 className="font-medium text-teal-700">Effect of Temperature</h4>
                      <p className="text-sm text-muted-foreground">For the endothermic reaction N₂O₄ ⇌ 2NO₂:</p>
                      <ul className="text-sm text-muted-foreground list-disc list-inside mt-1">
                        <li>Increasing temperature shifts equilibrium to the right (more NO₂, darker brown)</li>
                        <li>Decreasing temperature shifts equilibrium to the left (more N₂O₄, lighter color)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 p-3 rounded-lg flex items-start gap-3">
                    <div className="text-2xl mt-1">🏋️</div>
                    <div>
                      <h4 className="font-medium text-teal-700">Effect of Pressure</h4>
                      <p className="text-sm text-muted-foreground">For N₂O₄ ⇌ 2NO₂ (where volume increases in the forward reaction):</p>
                      <ul className="text-sm text-muted-foreground list-disc list-inside mt-1">
                        <li>Increasing pressure shifts equilibrium to the left (more N₂O₄)</li>
                        <li>Decreasing pressure shifts equilibrium to the right (more NO₂)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 p-3 rounded-lg flex items-start gap-3">
                    <div className="text-2xl mt-1">🧪</div>
                    <div>
                      <h4 className="font-medium text-teal-700">Effect of Concentration</h4>
                      <p className="text-sm text-muted-foreground">Adding or removing reactants or products:</p>
                      <ul className="text-sm text-muted-foreground list-disc list-inside mt-1">
                        <li>Adding more N₂O₄ shifts equilibrium to the right</li>
                        <li>Adding more NO₂ shifts equilibrium to the left</li>
                        <li>Removing either component causes the opposite shift</li>
                      </ul>
                    </div>
                  </div>
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
              
              @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.2); }
              }
            `}
          </style>
          
          <Tabs defaultValue="keq" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="keq">Equilibrium Constants</TabsTrigger>
              <TabsTrigger value="buffer">Buffer Systems</TabsTrigger>
              <TabsTrigger value="problems">Sample Problems</TabsTrigger>
            </TabsList>
            <TabsContent value="keq" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-medium mb-3">Equilibrium Constants</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">For the reaction: aA + bB ⇌ cC + dD</h4>
                  <div className="bg-teal-50 p-3 rounded my-2">
                    <p className="font-mono text-center">Keq = [C]^c × [D]^d / ([A]^a × [B]^b)</p>
                  </div>
                  <p className="text-sm text-muted-foreground">The equilibrium constant expresses the ratio of products to reactants at equilibrium.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white border border-teal-100 rounded p-3">
                    <h4 className="font-medium text-teal-700">What Keq Tells Us</h4>
                    <ul className="text-sm text-muted-foreground list-disc list-inside mt-2 space-y-1">
                      <li>Keq >> 1: Products are favored</li>
                      <li>Keq << 1: Reactants are favored</li>
                      <li>Keq ≈ 1: Neither is strongly favored</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-teal-100 rounded p-3">
                    <h4 className="font-medium text-teal-700">Types of Equilibrium Constants</h4>
                    <ul className="text-sm text-muted-foreground list-disc list-inside mt-2 space-y-1">
                      <li>Kc: Based on concentrations</li>
                      <li>Kp: Based on partial pressures</li>
                      <li>Ka: Acid dissociation constant</li>
                      <li>Kb: Base dissociation constant</li>
                      <li>Ksp: Solubility product constant</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="buffer" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-medium mb-3">Buffer Systems</h3>
              <div className="mb-4">
                <p className="text-muted-foreground">Buffer solutions consist of a weak acid and its conjugate base (or a weak base and its conjugate acid) that resist changes in pH when small amounts of acid or base are added.</p>
              </div>
              
              <div className="bg-teal-50 p-4 rounded-lg mb-4">
                <h4 className="font-medium mb-2">Henderson-Hasselbalch Equation</h4>
                <div className="bg-white p-2 rounded my-2">
                  <p className="font-mono text-center">pH = pKa + log([A⁻]/[HA])</p>
                </div>
                <p className="text-sm text-muted-foreground">This equation relates the pH of a buffer solution to the pKa of the weak acid and the ratio of base to acid concentrations.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-teal-100 p-3 rounded">
                  <h4 className="font-medium text-teal-700">Common Buffer Systems</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside mt-2">
                    <li>Acetic acid/acetate</li>
                    <li>Carbonic acid/bicarbonate</li>
                    <li>Phosphoric acid/phosphate</li>
                    <li>Ammonia/ammonium</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-teal-100 p-3 rounded">
                  <h4 className="font-medium text-teal-700">Buffer Capacity</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    The amount of acid or base a buffer can neutralize before significant pH change occurs. Highest when [acid] = [conjugate base].
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="problems" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-medium mb-3">Sample Equilibrium Problems</h3>
              <div className="space-y-6">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="font-medium">Problem 1: Calculating Keq</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    At equilibrium, a 1.0 L container has [N₂] = 0.1 M, [H₂] = 0.2 M, and [NH₃] = 0.4 M for the reaction:
                    N₂(g) + 3H₂(g) ⇌ 2NH₃(g). Calculate Keq.
                  </p>
                  <Button className="mt-3 bg-teal-600 hover:bg-teal-700">Show Solution</Button>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="font-medium">Problem 2: Buffer pH</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Calculate the pH of a buffer solution containing 0.1 M acetic acid (pKa = 4.76) and 0.15 M sodium acetate.
                  </p>
                  <Button className="mt-3 bg-teal-600 hover:bg-teal-700">Show Solution</Button>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="font-medium">Problem 3: Le Chatelier's Principle</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Predict the direction of equilibrium shift for the exothermic reaction:
                    2SO₂(g) + O₂(g) ⇌ 2SO₃(g) when: (a) temperature increases, (b) pressure increases, (c) SO₃ is removed.
                  </p>
                  <Button className="mt-3 bg-teal-600 hover:bg-teal-700">Show Solution</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <Separator className="my-8" />
          
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link to="/chemistry/kinetics" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Previous: Chemical Kinetics
              </Link>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/chemistry/electrochemistry" className="flex items-center gap-2">
                Next: Electrochemistry
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

export default Equilibrium;
