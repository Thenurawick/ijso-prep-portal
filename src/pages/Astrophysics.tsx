
import React from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Download, Earth } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from "framer-motion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

const Astrophysics = () => {
  const subsections = [{
    title: "Structure of the Universe",
    content: "Explore the overall structure of the universe, including galaxies, galaxy clusters, and the large-scale structure.",
    downloadUrl: "/Structure-of-the-Universe.zip" // Internal URL pointing to our public directory
  }, {
    title: "Solar System",
    content: "Learn about our solar system, including the sun, planets, moons, asteroids, and comets."
  }, {
    title: "Celestial Mechanics",
    content: "Study the motion of celestial bodies under the influence of gravity."
  }, {
    title: "Gravity & Kepler's Laws",
    content: "Understand gravitational forces and Kepler's laws governing the motion of planets around the sun."
  }];
  
  const handleDownload = (title: string, url?: string) => {
    if (!url) {
      toast({
        title: "Coming Soon",
        description: `Resources for ${title} will be available soon.`,
        duration: 3000,
      });
      return;
    }
    
    // Create a link element to download the file
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.replace(/\s+/g, '-')}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download Started",
      description: `Your ${title} resources are being downloaded.`,
      duration: 3000,
    });
  };
  
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-blue-600 text-white py-12 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-90"></div>
            <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop" alt="Astrophysics background" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Link to="/" className="text-white/80 hover:text-white text-sm flex items-center gap-1">
                Home
              </Link>
              <span>/</span>
              <Link to="/physics" className="text-white/80 hover:text-white text-sm flex items-center gap-1">
                Physics
              </Link>
              <span>/</span>
              <span className="text-sm">Astrophysics</span>
            </div>
            <motion.h1 className="text-4xl font-bold mb-4" initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }}>
              Astrophysics
            </motion.h1>
            <motion.p className="text-xl max-w-3xl" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
              Explore stars, galaxies, and cosmology. Learn about celestial bodies, their motions, 
              and the fundamental laws that govern the universe on the largest scales.
            </motion.p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-center mb-8">
            <motion.h2 className="text-2xl font-bold" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5
          }}>Astrophysics</motion.h2>
            <Button variant="outline" asChild className="group">
              <Link to="/physics">
                <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Physics
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-12">
            {subsections.map((subsection, index) => <motion.div key={subsection.title} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }}>
                <Collapsible className="w-full">
                  <Card className="w-full">
                    <CollapsibleTrigger className="w-full">
                      <CardHeader className="flex flex-row items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors rounded-t-lg">
                        <CardTitle className="text-xl">{subsection.title}</CardTitle>
                        <ArrowRight className="h-5 w-5 text-gray-500 transition-transform ui-open:rotate-90" />
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="p-6 pt-0 border-t">
                        <p className="text-gray-600 mb-4">{subsection.content}</p>
                        <div className="flex justify-end">
                          <Button 
                            variant="outline" 
                            className="group flex gap-2"
                            onClick={() => handleDownload(subsection.title, subsection.downloadUrl)}
                          >
                            {subsection.downloadUrl ? (
                              <>
                                <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                                Download {subsection.title} Resources
                              </>
                            ) : (
                              <>
                                Learn about {subsection.title}
                                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                              </>
                            )}
                          </Button>
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              </motion.div>)}
          </div>
          
          <motion.div className="bg-blue-50 p-6 rounded-lg border border-blue-100" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.6
        }}>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Ready to practice astrophysics?</h3>
                <p className="text-muted-foreground mb-4">
                  Apply your knowledge with our collection of IJSO-style astrophysics problems. 
                  Test your understanding of celestial mechanics, gravitational forces, and more.
                </p>
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                  View Astrophysics Practice Problems
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default Astrophysics;
