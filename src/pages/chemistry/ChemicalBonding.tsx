
import React from 'react';
import { ArrowLeft, ArrowRight, AtomIcon, Download, FileText, Info, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

const ChemicalBonding = () => {
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
              <span className="text-sm">Chemical Bonding</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <AtomIcon className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold">Chemical Bonding</h1>
            </div>
            <p className="text-xl max-w-3xl mt-4">
              Understanding how atoms form bonds and molecules, including ionic, covalent, and metallic bonding.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <div className="prose max-w-none">
                <h2>Chemical Bonding</h2>
                <p>
                  Chemical bonding involves the attraction between atoms, ions, or molecules that enables the 
                  formation of chemical compounds. The strength of chemical bonds varies widely, but they are 
                  generally much stronger than intermolecular forces.
                </p>
                
                <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Ionic Bonding Visualization */}
                  <div className="border border-green-200 rounded-lg p-6 bg-green-50">
                    <h3 className="text-lg font-medium mb-3">Ionic Bonding</h3>
                    <div className="h-48 flex items-center justify-center relative mb-4">
                      <div className="relative">
                        {/* Sodium atom losing electron */}
                        <div className="absolute left-0 top-0 w-20 h-20">
                          <div className="w-16 h-16 rounded-full bg-purple-100 border-2 border-purple-300 flex items-center justify-center">
                            <span className="font-bold text-purple-600">Na</span>
                          </div>
                          <div className="absolute w-4 h-4 rounded-full bg-blue-500 right-0 top-1/2 transform -translate-y-1/2 animate-[ping_1.5s_ease-in-out_infinite]"></div>
                        </div>
                        
                        {/* Arrow */}
                        <div className="absolute left-24 top-8 w-24 h-8 flex items-center justify-center">
                          <div className="w-full h-0.5 bg-gray-400"></div>
                          <div className="absolute right-0 w-3 h-3 border-t-2 border-r-2 border-gray-400 transform rotate-45 translate-x-0.5 -translate-y-0.5"></div>
                        </div>
                        
                        {/* Chlorine atom gaining electron */}
                        <div className="absolute right-0 top-0 w-20 h-20">
                          <div className="w-16 h-16 rounded-full bg-green-100 border-2 border-green-300 flex items-center justify-center">
                            <span className="font-bold text-green-600">Cl</span>
                          </div>
                        </div>
                        
                        {/* Ionic Compound */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-purple-100 border-2 border-purple-300 flex items-center justify-center mr-1">
                            <span className="font-bold text-purple-600 text-sm">Na<sup>+</sup></span>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-green-100 border-2 border-green-300 flex items-center justify-center ml-1">
                            <span className="font-bold text-green-600 text-sm">Cl<sup>-</sup></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Involves the complete transfer of electrons from one atom to another, 
                      forming ions with opposite charges that attract each other.
                    </p>
                  </div>
                  
                  {/* Covalent Bonding Visualization */}
                  <div className="border border-green-200 rounded-lg p-6 bg-green-50">
                    <h3 className="text-lg font-medium mb-3">Covalent Bonding</h3>
                    <div className="h-48 flex items-center justify-center relative mb-4">
                      <div className="relative">
                        {/* Hydrogen atoms */}
                        <div className="absolute left-4 top-8 w-16 h-16">
                          <div className="w-12 h-12 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center">
                            <span className="font-bold text-blue-600">H</span>
                          </div>
                          <div className="absolute w-3 h-3 rounded-full bg-blue-500 right-0 top-1/2 transform -translate-y-1/2"></div>
                        </div>
                        
                        <div className="absolute right-4 top-8 w-16 h-16">
                          <div className="w-12 h-12 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center">
                            <span className="font-bold text-blue-600">H</span>
                          </div>
                          <div className="absolute w-3 h-3 rounded-full bg-blue-500 left-0 top-1/2 transform -translate-y-1/2"></div>
                        </div>
                        
                        {/* Shared electrons */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-4 bg-blue-200 rounded-full border border-blue-300 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
                          <div className="w-2 h-2 rounded-full bg-blue-500 ml-1"></div>
                        </div>
                        
                        {/* H2 molecule */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                          <div className="px-4 py-2 bg-blue-100 border-2 border-blue-300 rounded-lg">
                            <span className="font-bold text-blue-600">H<sub>2</sub></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Involves the sharing of electron pairs between atoms, creating a stable 
                      bond that holds the atoms together in a molecule.
                    </p>
                  </div>
                </div>
                
                <h2>Types of Chemical Bonds</h2>
                
                <h3>Ionic Bonding</h3>
                <p>
                  Ionic bonds form when electrons are transferred from one atom to another, creating oppositely 
                  charged ions that attract each other. This typically occurs between metals and nonmetals.
                </p>
                <ul>
                  <li>Formed when one atom donates electron(s) to another atom</li>
                  <li>Results in positively charged cations and negatively charged anions</li>
                  <li>Generally forms crystalline structures</li>
                  <li>Examples: NaCl (table salt), CaF₂ (calcium fluoride)</li>
                </ul>
                
                <h3>Covalent Bonding</h3>
                <p>
                  Covalent bonds involve the sharing of electron pairs between atoms. This type of bonding 
                  typically occurs between nonmetal atoms.
                </p>
                <ul>
                  <li>Electrons are shared rather than transferred</li>
                  <li>Can be single, double, or triple bonds</li>
                  <li>Can be polar or nonpolar depending on electronegativity differences</li>
                  <li>Examples: H₂O (water), CO₂ (carbon dioxide), O₂ (oxygen)</li>
                </ul>
                
                <h3>Metallic Bonding</h3>
                <p>
                  Metallic bonds occur in metals where the valence electrons are delocalized and shared among 
                  a lattice of positive metal ions.
                </p>
                <ul>
                  <li>Valence electrons move freely through the structure (electron sea model)</li>
                  <li>Explains properties like electrical conductivity and malleability</li>
                  <li>Examples: Cu (copper), Fe (iron), Al (aluminum)</li>
                </ul>
                
                <h2>Intermolecular Forces</h2>
                <p>
                  Intermolecular forces are attractions between entire molecules rather than between atoms. 
                  They are generally weaker than chemical bonds.
                </p>
                
                <div className="my-6">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-green-100">
                        <th className="border border-green-200 px-4 py-2">Type</th>
                        <th className="border border-green-200 px-4 py-2">Strength</th>
                        <th className="border border-green-200 px-4 py-2">Description</th>
                        <th className="border border-green-200 px-4 py-2">Examples</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-green-200 px-4 py-2 font-medium">Hydrogen Bonding</td>
                        <td className="border border-green-200 px-4 py-2">Strongest</td>
                        <td className="border border-green-200 px-4 py-2">Between H atom bonded to F, O, or N and another F, O, or N atom</td>
                        <td className="border border-green-200 px-4 py-2">Water, Alcohols, DNA</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="border border-green-200 px-4 py-2 font-medium">Dipole-Dipole</td>
                        <td className="border border-green-200 px-4 py-2">Medium</td>
                        <td className="border border-green-200 px-4 py-2">Between polar molecules</td>
                        <td className="border border-green-200 px-4 py-2">HCl, Acetone</td>
                      </tr>
                      <tr>
                        <td className="border border-green-200 px-4 py-2 font-medium">London Dispersion</td>
                        <td className="border border-green-200 px-4 py-2">Weakest</td>
                        <td className="border border-green-200 px-4 py-2">Temporary dipoles between all molecules</td>
                        <td className="border border-green-200 px-4 py-2">Noble gases, Alkanes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
                        <span className="text-sm">Ionic Bonding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Info className="h-3 w-3" />
                        </div>
                        <span className="text-sm">Covalent Bonding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Info className="h-3 w-3" />
                        </div>
                        <span className="text-sm">Polar and Nonpolar Bonds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Info className="h-3 w-3" />
                        </div>
                        <span className="text-sm">Metallic Bonding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Info className="h-3 w-3" />
                        </div>
                        <span className="text-sm">Intermolecular Forces</span>
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
                        <Link to="/chemistry/atomic-structure">Atomic Structure</Link>
                      </Button>
                      <Button variant="link" asChild className="p-0 h-auto flex justify-start text-green-600">
                        <Link to="/chemistry/states-of-matter">States of Matter</Link>
                      </Button>
                      <Button variant="link" asChild className="p-0 h-auto flex justify-start text-green-600">
                        <Link to="/chemistry/molecular-geometry">Molecular Geometry</Link>
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
              <Link to="/chemistry/atomic-structure" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Previous: Atomic Structure
              </Link>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/chemistry/states-of-matter" className="flex items-center gap-2">
                Next: States of Matter
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

export default ChemicalBonding;
