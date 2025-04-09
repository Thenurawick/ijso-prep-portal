
import React from 'react';
import { ArrowLeft, Atom, Download, FileText, Info, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Separator } from "@/components/ui/separator";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, CartesianGrid, Tooltip, Legend } from 'recharts';

const atomicRadiusData = [
  { element: 'Li', radius: 152, group: 1 },
  { element: 'Na', radius: 186, group: 1 },
  { element: 'K', radius: 227, group: 1 },
  { element: 'Rb', radius: 248, group: 1 },
  { element: 'Cs', radius: 265, group: 1 },
];

const ionizationEnergyData = [
  { element: 'Li', energy: 520 },
  { element: 'Na', energy: 496 },
  { element: 'K', energy: 419 },
  { element: 'Rb', energy: 403 },
  { element: 'Cs', energy: 376 },
];

const periodicTrendsData = [
  { position: 1, atomic: 152, ionization: 520, electronegativity: 0.98 },
  { position: 2, atomic: 186, ionization: 496, electronegativity: 0.93 },
  { position: 3, atomic: 227, ionization: 419, electronegativity: 0.82 },
  { position: 4, atomic: 248, ionization: 403, electronegativity: 0.82 },
  { position: 5, atomic: 265, ionization: 376, electronegativity: 0.79 },
];

const AtomicStructure = () => {
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
              <span className="text-sm">Atomic Structure and Periodicity</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Atom className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold">Atomic Structure and Periodicity</h1>
            </div>
            <p className="text-xl max-w-3xl mt-4">
              Understanding the structure of atoms and how elements are organized in the periodic table.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <Tabs defaultValue="overview" className="mb-12">
                <TabsList className="mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="models">Atomic Models</TabsTrigger>
                  <TabsTrigger value="particles">Subatomic Particles</TabsTrigger>
                  <TabsTrigger value="electron">Electron Configuration</TabsTrigger>
                  <TabsTrigger value="periodic">Periodic Trends</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  <div className="prose max-w-none">
                    <h2>Atomic Structure and the Periodic Table</h2>
                    <p>
                      Atomic structure refers to the arrangement of subatomic particles (protons, neutrons, and electrons) 
                      within an atom. The study of atomic structure has evolved through several models, from Thomson's 
                      "plum pudding" model to the current quantum mechanical model.
                    </p>
                    
                    <div className="my-8 flex justify-center">
                      <div className="relative w-full max-w-md h-80 bg-black/5 rounded-lg flex items-center justify-center">
                        <div className="relative">
                          {/* Nucleus */}
                          <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center z-10 relative animate-pulse">
                            <span className="text-white font-bold">Nucleus</span>
                          </div>
                          
                          {/* Electron orbits */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-blue-400 border-dashed animate-[spin_8s_linear_infinite]"></div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border-2 border-blue-400 border-dashed animate-[spin_12s_linear_infinite] rotate-45"></div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-2 border-blue-400 border-dashed animate-[spin_16s_linear_infinite] rotate-90"></div>
                          
                          {/* Electrons */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40">
                            <div className="absolute w-4 h-4 bg-blue-500 rounded-full top-0 left-1/2 -translate-x-1/2 animate-pulse"></div>
                          </div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60">
                            <div className="absolute w-4 h-4 bg-blue-500 rounded-full top-0 left-1/2 -translate-x-1/2 animate-pulse"></div>
                            <div className="absolute w-4 h-4 bg-blue-500 rounded-full bottom-0 left-1/2 -translate-x-1/2 animate-pulse"></div>
                          </div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80">
                            <div className="absolute w-4 h-4 bg-blue-500 rounded-full top-0 left-1/2 -translate-x-1/2 animate-pulse"></div>
                            <div className="absolute w-4 h-4 bg-blue-500 rounded-full bottom-0 left-1/2 -translate-x-1/2 animate-pulse"></div>
                            <div className="absolute w-4 h-4 bg-blue-500 rounded-full left-0 top-1/2 -translate-y-1/2 animate-pulse"></div>
                            <div className="absolute w-4 h-4 bg-blue-500 rounded-full right-0 top-1/2 -translate-y-1/2 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3>Key Concepts in Atomic Structure</h3>
                    <ul>
                      <li><strong>Atomic Number (Z):</strong> The number of protons in an atom's nucleus</li>
                      <li><strong>Mass Number (A):</strong> The sum of protons and neutrons in an atom</li>
                      <li><strong>Isotopes:</strong> Atoms of the same element with different numbers of neutrons</li>
                      <li><strong>Electron Configuration:</strong> The arrangement of electrons in orbitals</li>
                      <li><strong>Valence Electrons:</strong> Electrons in the outermost energy level</li>
                    </ul>
                    
                    <h3>The Periodic Table</h3>
                    <p>
                      The periodic table organizes elements based on their atomic structure and properties. 
                      Elements in the same group (column) have similar chemical properties due to having the 
                      same number of valence electrons.
                    </p>
                    
                    <h3>Periodic Trends</h3>
                    <p>
                      Several properties of elements show trends across the periodic table:
                    </p>
                    <ul>
                      <li><strong>Atomic Radius:</strong> Generally decreases across a period and increases down a group</li>
                      <li><strong>Ionization Energy:</strong> Generally increases across a period and decreases down a group</li>
                      <li><strong>Electronegativity:</strong> Generally increases across a period and decreases down a group</li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="models">
                  <div className="prose max-w-none">
                    <h2>Evolution of Atomic Models</h2>
                    
                    <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <Card>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-medium mb-2">Dalton's Model (1808)</h3>
                          <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                            <div className="w-24 h-24 bg-gray-700 rounded-full"></div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Proposed that atoms are indivisible and indestructible particles. 
                            Each element consists of identical atoms.
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-medium mb-2">Thomson's Model (1904)</h3>
                          <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                            <div className="w-24 h-24 bg-gray-300 rounded-full relative">
                              <div className="absolute w-3 h-3 bg-blue-500 rounded-full top-2 left-3"></div>
                              <div className="absolute w-3 h-3 bg-blue-500 rounded-full bottom-4 right-5"></div>
                              <div className="absolute w-3 h-3 bg-blue-500 rounded-full top-1/2 left-1/2"></div>
                              <div className="absolute w-3 h-3 bg-blue-500 rounded-full bottom-2 left-4"></div>
                              <div className="absolute w-3 h-3 bg-blue-500 rounded-full top-5 right-3"></div>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            The "plum pudding" model suggested that electrons are embedded in a 
                            positively charged "pudding".
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-medium mb-2">Rutherford's Model (1911)</h3>
                          <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                            <div className="relative">
                              <div className="w-8 h-8 bg-red-500 rounded-full z-10 relative"></div>
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-gray-400"></div>
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full" style={{ transform: 'translate(-12px, -12px) rotate(45deg) translateX(24px)' }}></div>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Based on the gold foil experiment, proposed that atoms have a small, 
                            dense, positively charged nucleus with electrons orbiting around it.
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-medium mb-2">Bohr's Model (1913)</h3>
                          <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                            <div className="relative">
                              <div className="w-8 h-8 bg-red-500 rounded-full z-10 relative"></div>
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-gray-400"></div>
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-gray-400"></div>
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full" style={{ transform: 'translate(-8px, -8px) rotate(45deg) translateX(16px)' }}></div>
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full" style={{ transform: 'translate(-14px, -14px) rotate(125deg) translateX(28px)' }}></div>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Electrons move in fixed circular orbits around the nucleus, with each 
                            orbit having a fixed energy level.
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-medium mb-2">Quantum Mechanical Model (1926)</h3>
                          <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                            <div className="relative">
                              <div className="w-6 h-6 bg-red-500 rounded-full z-10 relative"></div>
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-16 rounded-full border border-gray-400 rotate-45"></div>
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-24 rounded-full border border-gray-400 -rotate-45"></div>
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-16 rounded-full border border-gray-400 rotate-15"></div>
                              <div className="opacity-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-200 rounded-full blur-md"></div>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Electrons exist in atomic orbitals, which represent probability 
                            distributions rather than fixed paths.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="particles">
                  <div className="prose max-w-none">
                    <h2>Subatomic Particles</h2>
                    <p>Atoms are composed of three main subatomic particles: protons, neutrons, and electrons.</p>
                    
                    <div className="my-8">
                      <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                          <thead>
                            <tr className="bg-green-100">
                              <th className="border border-green-200 px-4 py-2">Particle</th>
                              <th className="border border-green-200 px-4 py-2">Charge</th>
                              <th className="border border-green-200 px-4 py-2">Mass (amu)</th>
                              <th className="border border-green-200 px-4 py-2">Location</th>
                              <th className="border border-green-200 px-4 py-2">Discovery</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-green-200 px-4 py-2 font-medium">Proton</td>
                              <td className="border border-green-200 px-4 py-2">+1</td>
                              <td className="border border-green-200 px-4 py-2">1.007</td>
                              <td className="border border-green-200 px-4 py-2">Nucleus</td>
                              <td className="border border-green-200 px-4 py-2">Rutherford (1919)</td>
                            </tr>
                            <tr className="bg-green-50">
                              <td className="border border-green-200 px-4 py-2 font-medium">Neutron</td>
                              <td className="border border-green-200 px-4 py-2">0</td>
                              <td className="border border-green-200 px-4 py-2">1.008</td>
                              <td className="border border-green-200 px-4 py-2">Nucleus</td>
                              <td className="border border-green-200 px-4 py-2">Chadwick (1932)</td>
                            </tr>
                            <tr>
                              <td className="border border-green-200 px-4 py-2 font-medium">Electron</td>
                              <td className="border border-green-200 px-4 py-2">-1</td>
                              <td className="border border-green-200 px-4 py-2">0.0005</td>
                              <td className="border border-green-200 px-4 py-2">Orbitals</td>
                              <td className="border border-green-200 px-4 py-2">Thomson (1897)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                    <h3>Isotopes</h3>
                    <p>
                      Isotopes are atoms of the same element that have different numbers of neutrons. 
                      They have the same atomic number (Z) but different mass numbers (A).
                    </p>
                    
                    <div className="my-6 flex flex-wrap justify-center gap-4">
                      {/* Hydrogen Isotopes */}
                      <div className="border border-green-200 rounded-lg p-4 max-w-xs">
                        <h4 className="text-center font-medium mb-2">Hydrogen Isotopes</h4>
                        <div className="flex justify-around">
                          <div className="text-center">
                            <div className="flex justify-center mb-2">
                              <div className="relative w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                                <div className="absolute w-3 h-3 bg-blue-500 rounded-full" style={{ transform: 'rotate(45deg) translateX(8px)' }}></div>
                              </div>
                            </div>
                            <span className="text-sm">¹H (Protium)</span>
                          </div>
                          <div className="text-center">
                            <div className="flex justify-center mb-2">
                              <div className="relative w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                                <div className="flex gap-1">
                                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                                  <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                                </div>
                                <div className="absolute w-3 h-3 bg-blue-500 rounded-full" style={{ transform: 'rotate(45deg) translateX(8px)' }}></div>
                              </div>
                            </div>
                            <span className="text-sm">²H (Deuterium)</span>
                          </div>
                          <div className="text-center">
                            <div className="flex justify-center mb-2">
                              <div className="relative w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                                <div className="flex gap-0.5">
                                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                                  <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                                  <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                                </div>
                                <div className="absolute w-3 h-3 bg-blue-500 rounded-full" style={{ transform: 'rotate(45deg) translateX(8px)' }}></div>
                              </div>
                            </div>
                            <span className="text-sm">³H (Tritium)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="electron">
                  <div className="prose max-w-none">
                    <h2>Electron Configuration</h2>
                    <p>
                      Electron configuration describes how electrons are arranged in orbitals around an atom's nucleus.
                      This arrangement affects an element's chemical properties.
                    </p>
                    
                    <h3>Energy Levels and Sublevels</h3>
                    <p>
                      Electrons occupy orbitals within different energy levels (shells) and sublevels (subshells).
                    </p>
                    
                    <div className="my-8 bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-medium mb-4">Orbital Filling Diagram</h4>
                      
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 text-right font-medium">1</div>
                          <div className="flex gap-2">
                            <div className="border border-gray-300 px-4 py-2 rounded bg-white shadow-sm">
                              <div className="text-center font-medium">1s</div>
                              <div className="flex justify-center mt-1 gap-4">
                                <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center text-sm bg-green-100">↑↓</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="w-10 text-right font-medium">2</div>
                          <div className="flex gap-2">
                            <div className="border border-gray-300 px-4 py-2 rounded bg-white shadow-sm">
                              <div className="text-center font-medium">2s</div>
                              <div className="flex justify-center mt-1 gap-4">
                                <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center text-sm bg-green-100">↑↓</div>
                              </div>
                            </div>
                            <div className="border border-gray-300 px-4 py-2 rounded bg-white shadow-sm">
                              <div className="text-center font-medium">2p</div>
                              <div className="flex justify-center mt-1 gap-4">
                                <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center text-sm bg-green-100">↑↓</div>
                                <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center text-sm bg-green-100">↑↓</div>
                                <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center text-sm bg-green-100">↑↓</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="w-10 text-right font-medium">3</div>
                          <div className="flex gap-2">
                            <div className="border border-gray-300 px-4 py-2 rounded bg-white shadow-sm">
                              <div className="text-center font-medium">3s</div>
                              <div className="flex justify-center mt-1 gap-4">
                                <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center text-sm bg-green-100">↑↓</div>
                              </div>
                            </div>
                            <div className="border border-gray-300 px-4 py-2 rounded bg-white shadow-sm">
                              <div className="text-center font-medium">3p</div>
                              <div className="flex justify-center mt-1 gap-4">
                                <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center text-sm bg-green-100">↑↓</div>
                                <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center text-sm bg-green-100">↑↓</div>
                                <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center text-sm bg-green-100">↑↓</div>
                              </div>
                            </div>
                            <div className="border border-gray-300 px-4 py-2 rounded bg-white shadow-sm">
                              <div className="text-center font-medium">3d</div>
                              <div className="flex justify-center mt-1 gap-2">
                                <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center text-sm bg-green-100">↑↓</div>
                                <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center text-sm bg-green-100">↑↓</div>
                                <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center text-sm bg-green-100">↑↓</div>
                                <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center text-sm bg-green-100">↑↓</div>
                                <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center text-sm bg-green-100">↑↓</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3>Writing Electron Configurations</h3>
                    <p>
                      Electron configurations are written using a shorthand notation that indicates 
                      the energy level, sublevel, and number of electrons in each sublevel.
                    </p>
                    
                    <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Sodium (Na, Z=11)</h4>
                        <p className="mb-1">Full configuration: 1s² 2s² 2p⁶ 3s¹</p>
                        <p>Noble gas notation: [Ne] 3s¹</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Calcium (Ca, Z=20)</h4>
                        <p className="mb-1">Full configuration: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s²</p>
                        <p>Noble gas notation: [Ar] 4s²</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="periodic">
                  <div className="prose max-w-none">
                    <h2>Periodic Trends</h2>
                    <p>
                      The periodic table shows several trends in atomic properties that help predict 
                      element behavior and reactivity.
                    </p>
                    
                    <div className="my-8">
                      <h3 className="mb-4">Atomic Radius</h3>
                      <p className="mb-4">
                        Atomic radius generally decreases across a period (left to right) and 
                        increases down a group (top to bottom).
                      </p>
                      
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-8">
                        <h4 className="text-sm font-medium mb-2">Atomic Radius of Group 1 Elements (pm)</h4>
                        <div className="h-80">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                              data={atomicRadiusData}
                              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            >
                              <XAxis dataKey="element" />
                              <YAxis domain={[0, 300]} />
                              <Tooltip />
                              <Legend />
                              <Bar dataKey="radius" name="Atomic Radius (pm)" fill="#10b981" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                      
                      <h3 className="mb-4">Ionization Energy</h3>
                      <p className="mb-4">
                        Ionization energy generally increases across a period and decreases down a group.
                      </p>
                      
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-8">
                        <h4 className="text-sm font-medium mb-2">First Ionization Energy of Group 1 Elements (kJ/mol)</h4>
                        <div className="h-80">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                              data={ionizationEnergyData}
                              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="element" />
                              <YAxis domain={[350, 550]} />
                              <Tooltip />
                              <Legend />
                              <Line type="monotone" dataKey="energy" name="Ionization Energy (kJ/mol)" stroke="#0ea5e9" strokeWidth={2} />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                      
                      <h3 className="mb-4">Combined Periodic Trends</h3>
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <h4 className="text-sm font-medium mb-2">Trends for Group 1 Elements (Normalized)</h4>
                        <div className="h-80">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                              data={periodicTrendsData}
                              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="position" />
                              <YAxis />
                              <Tooltip />
                              <Legend />
                              <Line type="monotone" dataKey="atomic" name="Atomic Radius" stroke="#10b981" strokeWidth={2} />
                              <Line type="monotone" dataKey="ionization" name="Ionization Energy" stroke="#0ea5e9" strokeWidth={2} />
                              <Line type="monotone" dataKey="electronegativity" name="Electronegativity" stroke="#6366f1" strokeWidth={2} />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
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
                        <span className="text-sm">Atomic Models: Dalton, Thomson, Rutherford, Bohr, Quantum</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Info className="h-3 w-3" />
                        </div>
                        <span className="text-sm">Subatomic Particles: Protons, Neutrons, Electrons</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Info className="h-3 w-3" />
                        </div>
                        <span className="text-sm">Electron Configuration and Orbital Filling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Info className="h-3 w-3" />
                        </div>
                        <span className="text-sm">Periodic Trends: Atomic Radius, Ionization Energy, Electronegativity</span>
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
                        <Link to="/chemistry/periodic-trends">Periodicity</Link>
                      </Button>
                      <Button variant="link" asChild className="p-0 h-auto flex justify-start text-green-600">
                        <Link to="/chemistry/quantum-mechanics">Quantum Mechanics</Link>
                      </Button>
                      <Button variant="link" asChild className="p-0 h-auto flex justify-start text-green-600">
                        <Link to="/chemistry/nuclear-chemistry">Nuclear Chemistry</Link>
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
              <Link to="/chemistry" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Chemistry
              </Link>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/chemistry/chemical-bonding">
                Next: Chemical Bonding
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AtomicStructure;
