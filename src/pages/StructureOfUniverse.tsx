
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from "framer-motion";

const StructureOfUniverse = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-blue-600 text-white py-12 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-90"></div>
            <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop" alt="Universe background" className="w-full h-full object-cover" />
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
              <Link to="/physics/astrophysics" className="text-white/80 hover:text-white text-sm flex items-center gap-1">
                Astrophysics
              </Link>
              <span>/</span>
              <span className="text-sm">Structure of the Universe</span>
            </div>
            <motion.h1 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Structure of the Universe
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore galaxies, galaxy clusters, and the large-scale structure of the universe
            </motion.p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-center mb-8">
            <motion.h2 
              className="text-2xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Structure of the Universe
            </motion.h2>
            <Button variant="outline" asChild className="group">
              <Link to="/physics/astrophysics">
                <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Astrophysics
              </Link>
            </Button>
          </div>

          <motion.div 
            className="prose prose-blue max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* The content from your ZIP file will go here */}
            <h2>Overview of the Universe</h2>
            <p>
              The universe is vast and contains billions of galaxies, each with billions of stars. 
              The structure of the universe can be understood at different scales, from planets 
              and stars to galaxies, galaxy clusters, and the cosmic web.
            </p>

            <h2>Galaxies</h2>
            <p>
              Galaxies are massive collections of stars, gas, dust, and dark matter, held together 
              by gravity. They come in various shapes and sizes, including:
            </p>
            <ul>
              <li><strong>Spiral galaxies</strong>: Flat, rotating disks with spiral arms</li>
              <li><strong>Elliptical galaxies</strong>: Spherical or ellipsoidal in shape</li>
              <li><strong>Irregular galaxies</strong>: Lack a distinct regular shape</li>
              <li><strong>Dwarf galaxies</strong>: Smaller galaxies with fewer stars</li>
            </ul>

            <h2>Galaxy Clusters</h2>
            <p>
              Galaxy clusters are gravitationally bound collections of galaxies. They are the 
              largest known gravitationally bound structures in the universe and can contain 
              hundreds to thousands of galaxies.
            </p>

            <h2>Large-Scale Structure</h2>
            <p>
              On the largest scales, galaxies and galaxy clusters form a cosmic web structure, 
              with dense regions called superclusters connected by filaments, separated by vast 
              voids. This structure formed due to tiny fluctuations in the density of the early 
              universe that were amplified by gravity over billions of years.
            </p>

            <h2>The Observable Universe</h2>
            <p>
              The observable universe is the region of space that we can theoretically observe 
              from Earth. It extends about 46.5 billion light-years in all directions, forming 
              a spherical volume centered on Earth.
            </p>

            <h2>The Expanding Universe</h2>
            <p>
              One of the most important discoveries in astrophysics is that the universe is 
              expanding. This expansion means that galaxies are moving away from each other, 
              and the space between them is stretching.
            </p>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StructureOfUniverse;
