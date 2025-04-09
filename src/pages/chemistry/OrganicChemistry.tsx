
import React from 'react';
import { ArrowLeft, Microscope, Download, FileText, Info, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const OrganicChemistry = () => {
  const topics = [
    {
      title: "Hydrocarbons",
      description: "Organic compounds consisting of hydrogen and carbon.",
      icon: "🔥"
    },
    {
      title: "Functional Groups",
      description: "Specific atoms or groups that give characteristic properties to molecules.",
      icon: "🧩"
    },
    {
      title: "Naming Simple Organic Compounds",
      description: "Rules and conventions for naming organic substances.",
      icon: "🔤"
    },
    {
      title: "Isomerism",
      description: "Different arrangements of atoms with the same molecular formula.",
      icon: "🔄"
    },
    {
      title: "Basic Organic Reactions",
      description: "Common reaction types involving organic compounds.",
      icon: "⚗️"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-12">
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
              <span className="text-sm">Organic Chemistry</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Microscope className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold">Organic Chemistry</h1>
            </div>
            <p className="text-xl max-w-3xl mt-4">
              The study of carbon compounds and their properties, reactions, and structures.
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
          
          <div className="bg-cyan-50 rounded-lg overflow-hidden border border-cyan-100 mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-cyan-800 mb-4">Functional Groups in Organic Chemistry</h2>
              <p className="text-cyan-700 mb-6">
                Functional groups are specific atoms or groups of atoms that give characteristic properties to organic molecules.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-cyan-200">
              <div className="bg-white p-4">
                <div className="text-center mb-2">
                  <span className="text-2xl">-OH</span>
                </div>
                <h3 className="font-medium text-center text-cyan-800 mb-2">Hydroxyl</h3>
                <div className="h-24 bg-cyan-50 rounded-lg relative overflow-hidden mb-3">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Simple molecular structure visualization */}
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-gray-700 absolute top-0 left-4"></div>
                      <div className="w-6 h-6 rounded-full bg-red-500 absolute top-0 left-16"></div>
                      <div className="w-6 h-6 rounded-full bg-white border border-gray-300 absolute top-0 left-26"></div>
                      
                      <div className="h-1 w-6 bg-gray-700 absolute top-4 left-12"></div>
                      <div className="h-1 w-4 bg-gray-700 absolute top-4 left-22 transform rotate-45"></div>
                      
                      <div className="absolute top-12 left-2 text-xs font-mono">
                        R-OH
                      </div>
                      <div className="absolute top-12 right-2 text-xs">
                        Alcohols
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Found in alcohols. Makes compounds soluble in water and allows hydrogen bonding.
                </p>
              </div>
              
              <div className="bg-white p-4">
                <div className="text-center mb-2">
                  <span className="text-2xl">C=O</span>
                </div>
                <h3 className="font-medium text-center text-cyan-800 mb-2">Carbonyl</h3>
                <div className="h-24 bg-cyan-50 rounded-lg relative overflow-hidden mb-3">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-gray-700 absolute top-0 left-4"></div>
                      <div className="w-8 h-8 rounded-full bg-red-500 absolute top-0 left-16"></div>
                      
                      <div className="h-1 w-4 bg-gray-700 absolute top-3 left-12 transform -rotate-12"></div>
                      <div className="h-1 w-4 bg-gray-700 absolute top-5 left-12 transform rotate-12"></div>
                      
                      <div className="absolute top-12 left-2 text-xs font-mono">
                        R-C=O
                      </div>
                      <div className="absolute top-12 right-2 text-xs">
                        Aldehydes, Ketones
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Found in aldehydes and ketones. Makes compounds reactive in addition reactions.
                </p>
              </div>
              
              <div className="bg-white p-4">
                <div className="text-center mb-2">
                  <span className="text-2xl">-COOH</span>
                </div>
                <h3 className="font-medium text-center text-cyan-800 mb-2">Carboxyl</h3>
                <div className="h-24 bg-cyan-50 rounded-lg relative overflow-hidden mb-3">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-gray-700 absolute top-0 left-0"></div>
                      <div className="w-8 h-8 rounded-full bg-red-500 absolute top-0 left-10"></div>
                      <div className="w-8 h-8 rounded-full bg-red-500 absolute top-0 left-20"></div>
                      <div className="w-6 h-6 rounded-full bg-white border border-gray-300 absolute top-0 left-30"></div>
                      
                      <div className="h-1 w-2 bg-gray-700 absolute top-4 left-8"></div>
                      <div className="h-1 w-2 bg-gray-700 absolute top-2 left-18 transform -rotate-45"></div>
                      <div className="h-1 w-2 bg-gray-700 absolute top-6 left-18 transform rotate-45"></div>
                      <div className="h-1 w-2 bg-gray-700 absolute top-4 left-28"></div>
                      
                      <div className="absolute top-12 left-2 text-xs font-mono">
                        R-COOH
                      </div>
                      <div className="absolute top-12 right-2 text-xs">
                        Carboxylic Acids
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Found in carboxylic acids. Makes compounds acidic and able to form esters.
                </p>
              </div>
              
              <div className="bg-white p-4">
                <div className="text-center mb-2">
                  <span className="text-2xl">-NH₂</span>
                </div>
                <h3 className="font-medium text-center text-cyan-800 mb-2">Amino</h3>
                <div className="h-24 bg-cyan-50 rounded-lg relative overflow-hidden mb-3">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-gray-700 absolute top-0 left-4"></div>
                      <div className="w-8 h-8 rounded-full bg-blue-500 absolute top-0 left-16"></div>
                      <div className="w-6 h-6 rounded-full bg-white border border-gray-300 absolute top-0 left-26"></div>
                      <div className="w-6 h-6 rounded-full bg-white border border-gray-300 absolute top-8 left-20"></div>
                      
                      <div className="h-1 w-4 bg-gray-700 absolute top-4 left-12"></div>
                      <div className="h-1 w-4 bg-gray-700 absolute top-4 left-24 transform rotate-45"></div>
                      <div className="h-1 w-4 bg-gray-700 absolute top-8 left-20 transform -rotate-45"></div>
                      
                      <div className="absolute top-16 left-2 text-xs font-mono">
                        R-NH₂
                      </div>
                      <div className="absolute top-16 right-2 text-xs">
                        Amines
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Found in amines. Makes compounds basic and important in biological systems.
                </p>
              </div>
              
              <div className="bg-white p-4">
                <div className="text-center mb-2">
                  <span className="text-2xl">C=C</span>
                </div>
                <h3 className="font-medium text-center text-cyan-800 mb-2">Alkene</h3>
                <div className="h-24 bg-cyan-50 rounded-lg relative overflow-hidden mb-3">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-gray-700 absolute top-0 left-4"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-700 absolute top-0 left-16"></div>
                      
                      <div className="h-1 w-4 bg-gray-700 absolute top-3 left-12 transform -rotate-12"></div>
                      <div className="h-1 w-4 bg-gray-700 absolute top-5 left-12 transform rotate-12"></div>
                      
                      <div className="absolute top-12 left-8 text-xs font-mono">
                        C=C
                      </div>
                      <div className="absolute top-16 left-4 text-xs">
                        Addition reactions
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Found in alkenes. Carbon-carbon double bonds are sites for addition reactions.
                </p>
              </div>
              
              <div className="bg-white p-4">
                <div className="text-center mb-2">
                  <span className="text-2xl">-X</span>
                </div>
                <h3 className="font-medium text-center text-cyan-800 mb-2">Halogen</h3>
                <div className="h-24 bg-cyan-50 rounded-lg relative overflow-hidden mb-3">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-gray-700 absolute top-0 left-4"></div>
                      <div className="w-8 h-8 rounded-full bg-green-500 absolute top-0 left-16"></div>
                      
                      <div className="h-1 w-4 bg-gray-700 absolute top-4 left-12"></div>
                      
                      <div className="absolute top-12 left-4 text-xs font-mono">
                        R-X (X = F, Cl, Br, I)
                      </div>
                      <div className="absolute top-16 left-4 text-xs">
                        Haloalkanes
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Found in haloalkanes. Makes compounds useful in substitution and elimination reactions.
                </p>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="hydrocarbons" className="mb-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="hydrocarbons">Hydrocarbons</TabsTrigger>
              <TabsTrigger value="naming">Nomenclature</TabsTrigger>
              <TabsTrigger value="isomerism">Isomerism</TabsTrigger>
              <TabsTrigger value="reactions">Reactions</TabsTrigger>
            </TabsList>
            <TabsContent value="hydrocarbons" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-medium mb-3">Hydrocarbon Types</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-cyan-50 p-3 rounded">
                  <h4 className="font-medium text-cyan-700 mb-2">Alkanes (CₙH₂ₙ₊₂)</h4>
                  <div className="bg-white p-2 rounded mb-2">
                    <p className="text-xs text-center">
                      Methane (CH₄), Ethane (C₂H₆), Propane (C₃H₈)...
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">Single carbon-carbon bonds. Relatively unreactive. Used as fuels.</p>
                </div>
                
                <div className="bg-cyan-50 p-3 rounded">
                  <h4 className="font-medium text-cyan-700 mb-2">Alkenes (CₙH₂ₙ)</h4>
                  <div className="bg-white p-2 rounded mb-2">
                    <p className="text-xs text-center">
                      Ethene (C₂H₄), Propene (C₃H₆), Butene (C₄H₈)...
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">Contain carbon-carbon double bonds. Undergo addition reactions.</p>
                </div>
                
                <div className="bg-cyan-50 p-3 rounded">
                  <h4 className="font-medium text-cyan-700 mb-2">Alkynes (CₙH₂ₙ₋₂)</h4>
                  <div className="bg-white p-2 rounded mb-2">
                    <p className="text-xs text-center">
                      Ethyne/Acetylene (C₂H₂), Propyne (C₃H₄)...
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">Contain carbon-carbon triple bonds. Highly reactive in addition reactions.</p>
                </div>
                
                <div className="bg-cyan-50 p-3 rounded">
                  <h4 className="font-medium text-cyan-700 mb-2">Aromatics</h4>
                  <div className="bg-white p-2 rounded mb-2">
                    <p className="text-xs text-center">
                      Benzene (C₆H₆), Toluene (C₇H₈)...
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">Contain a benzene ring. Undergo substitution rather than addition reactions.</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="naming" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-medium mb-3">IUPAC Nomenclature Rules</h3>
              <div className="space-y-4">
                <div className="bg-cyan-50 p-3 rounded">
                  <h4 className="font-medium text-cyan-700 mb-2">Basic Steps in Naming</h4>
                  <ol className="text-sm text-muted-foreground list-decimal pl-5 space-y-2">
                    <li>Identify the longest carbon chain (parent chain)</li>
                    <li>Number the chain to give substituents the lowest possible numbers</li>
                    <li>Name the substituents (prefixes)</li>
                    <li>Name the parent chain (root name + suffix)</li>
                    <li>Combine the parts: prefixes + root name + suffix</li>
                  </ol>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border border-cyan-100 p-3 rounded">
                    <h4 className="font-medium text-cyan-700 mb-2">Common Alkane Roots</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>1 carbon: <span className="font-mono">meth-</span></li>
                      <li>2 carbons: <span className="font-mono">eth-</span></li>
                      <li>3 carbons: <span className="font-mono">prop-</span></li>
                      <li>4 carbons: <span className="font-mono">but-</span></li>
                      <li>5 carbons: <span className="font-mono">pent-</span></li>
                      <li>6 carbons: <span className="font-mono">hex-</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-cyan-100 p-3 rounded">
                    <h4 className="font-medium text-cyan-700 mb-2">Common Suffixes</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Alkane: <span className="font-mono">-ane</span></li>
                      <li>Alkene: <span className="font-mono">-ene</span></li>
                      <li>Alkyne: <span className="font-mono">-yne</span></li>
                      <li>Alcohol: <span className="font-mono">-ol</span></li>
                      <li>Aldehyde: <span className="font-mono">-al</span></li>
                      <li>Ketone: <span className="font-mono">-one</span></li>
                      <li>Carboxylic acid: <span className="font-mono">-oic acid</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="isomerism" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-medium mb-3">Types of Isomerism</h3>
              <div className="space-y-6">
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h4 className="font-medium text-cyan-700 mb-2">Structural Isomerism</h4>
                  <p className="text-muted-foreground mb-2">
                    Compounds with the same molecular formula but different structural arrangements of atoms.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded">
                      <h5 className="text-sm font-medium text-cyan-700">Chain Isomerism</h5>
                      <p className="text-xs text-muted-foreground mt-1">
                        Different arrangements of the carbon skeleton (e.g., n-butane vs. isobutane).
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <h5 className="text-sm font-medium text-cyan-700">Positional Isomerism</h5>
                      <p className="text-xs text-muted-foreground mt-1">
                        Same carbon skeleton but functional groups in different positions (e.g., 1-propanol vs. 2-propanol).
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <h5 className="text-sm font-medium text-cyan-700">Functional Group Isomerism</h5>
                      <p className="text-xs text-muted-foreground mt-1">
                        Same molecular formula but different functional groups (e.g., ethanol vs. dimethyl ether).
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <h5 className="text-sm font-medium text-cyan-700">Metamerism</h5>
                      <p className="text-xs text-muted-foreground mt-1">
                        Different alkyl groups attached to the same functional group (e.g., diethyl ether vs. methyl propyl ether).
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h4 className="font-medium text-cyan-700 mb-2">Stereoisomerism</h4>
                  <p className="text-muted-foreground mb-2">
                    Compounds with the same connectivity of atoms but different spatial arrangements.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded">
                      <h5 className="text-sm font-medium text-cyan-700">Geometrical Isomerism (cis-trans)</h5>
                      <p className="text-xs text-muted-foreground mt-1">
                        Different arrangements around a double bond or ring (e.g., cis-2-butene vs. trans-2-butene).
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <h5 className="text-sm font-medium text-cyan-700">Optical Isomerism</h5>
                      <p className="text-xs text-muted-foreground mt-1">
                        Non-superimposable mirror images due to a chiral center (e.g., lactic acid isomers).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reactions" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-medium mb-3">Important Organic Reactions</h3>
              <div className="space-y-4">
                <div className="bg-cyan-50 p-3 rounded">
                  <h4 className="font-medium text-cyan-700 mb-2">Addition Reactions</h4>
                  <p className="text-muted-foreground mb-2">
                    Addition of atoms or groups to a double or triple bond, converting it to a single bond.
                  </p>
                  <div className="bg-white p-2 rounded">
                    <p className="text-xs text-center">
                      H₂C=CH₂ + H₂ → H₃C-CH₃<br />
                      <span className="text-muted-foreground">(Hydrogenation of ethene to ethane)</span>
                    </p>
                  </div>
                </div>
                
                <div className="bg-cyan-50 p-3 rounded">
                  <h4 className="font-medium text-cyan-700 mb-2">Substitution Reactions</h4>
                  <p className="text-muted-foreground mb-2">
                    Replacement of an atom or group with another atom or group.
                  </p>
                  <div className="bg-white p-2 rounded">
                    <p className="text-xs text-center">
                      CH₃-Cl + OH⁻ → CH₃-OH + Cl⁻<br />
                      <span className="text-muted-foreground">(Nucleophilic substitution)</span>
                    </p>
                  </div>
                </div>
                
                <div className="bg-cyan-50 p-3 rounded">
                  <h4 className="font-medium text-cyan-700 mb-2">Elimination Reactions</h4>
                  <p className="text-muted-foreground mb-2">
                    Removal of atoms or groups from adjacent carbons, forming a double bond.
                  </p>
                  <div className="bg-white p-2 rounded">
                    <p className="text-xs text-center">
                      CH₃-CH₂-Br + OH⁻ → CH₂=CH₂ + H₂O + Br⁻<br />
                      <span className="text-muted-foreground">(Dehydrohalogenation)</span>
                    </p>
                  </div>
                </div>
                
                <div className="bg-cyan-50 p-3 rounded">
                  <h4 className="font-medium text-cyan-700 mb-2">Oxidation and Reduction</h4>
                  <p className="text-muted-foreground mb-2">
                    Changes in oxygen content or hydrogen content/oxidation state of carbon.
                  </p>
                  <div className="bg-white p-2 rounded">
                    <p className="text-xs text-center">
                      CH₃-CH₂-OH + [O] → CH₃-CHO + H₂O → CH₃-COOH<br />
                      <span className="text-muted-foreground">(Oxidation of ethanol to acetaldehyde to acetic acid)</span>
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <Separator className="my-8" />
          
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link to="/chemistry/electrochemistry" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Previous: Electrochemistry
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/chemistry" className="flex items-center gap-2">
                Back to Chemistry
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrganicChemistry;
