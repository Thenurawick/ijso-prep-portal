import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from "framer-motion";

const StructureOfUniverse = () => {
  const [htmlContent, setHtmlContent] = useState<string>('');
  
  useEffect(() => {
    // Fetch the HTML content from the public directory
    fetch('/structure-of-universe.html')
      .then(response => {
        console.log('Fetch response status:', response.status);
        return response.text();
      })
      .then(data => {
        console.log('Data received, length:', data.length);
        // Extract the content we want from the HTML file (just the container content)
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const containerContent = doc.querySelector('.container')?.innerHTML;
        setHtmlContent(containerContent || '');
        console.log('Container content found:', !!containerContent);
      })
      .catch(error => {
        console.error('Error fetching HTML content:', error);
      });
  }, []);
  
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

          {htmlContent ? (
            <motion.div 
              className="prose prose-blue max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          ) : (
            <div className="flex justify-center py-12">
              <div className="animate-pulse flex flex-col gap-4 w-full">
                <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-8 bg-gray-200 rounded w-1/4 mt-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StructureOfUniverse;
