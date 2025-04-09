
import React from 'react';
import { ArrowLeft, ArrowRight, TestTube, Download, FileText, Info, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

const Electrochemistry = () => {
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
          <div className="prose max-w-none mb-8">
            <h2>Coming Soon</h2>
            <p>
              We're currently developing comprehensive content for this topic. Check back soon for detailed 
              explanations, interactive diagrams, and practice problems on electrochemistry.
            </p>
          </div>
          
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
