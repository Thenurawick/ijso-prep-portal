import React from 'react';
import { ArrowRight, BookOpen, Compass, Thermometer, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Physics = () => {
  const topics = [
    {
      title: "Mechanics",
      description: "Forces, motion, energy, and momentum",
      icon: Compass,
      path: "/physics/mechanics",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=500&auto=format&fit=crop",
      subtopics: [
        "Vectors", 
        "Newton's Laws", 
        "Forces and friction", 
        "Torque & Equilibrium", 
        "Center of Mass", 
        "Kinematic Formulas", 
        "Nature of Energy and Energy Conservation", 
        "Forms of Energy", 
        "Sources of Energy", 
        "Mechanical Energy & Work", 
        "Power & Efficiency", 
        "Momentum and Conservation of Momentum", 
        "Elastic & Inelastic Collisions", 
        "Centripetal Force", 
        "Circular Kinematics", 
        "Pressure & Pascal's Law", 
        "Buoyancy & Archimedes' Principle", 
        "Bernoulli's Principle", 
        "Hooke's Law and Elastic Motion", 
        "Harmonic Motion and Angular Frequency"
      ]
    },
    {
      title: "Waves",
      description: "Sound, light, and wave phenomena",
      icon: Compass,
      path: "/physics/waves",
      image: "https://images.unsplash.com/photo-1590751591468-6ba6c249a6ba?q=80&w=500&auto=format&fit=crop",
      subtopics: [
        "Wave Properties", 
        "Transersal and Logitudinal Waves", 
        "Superposition of Waves", 
        "Interference of Waves", 
        "Reflection and Transmission", 
        "Refraction", 
        "Standing Waves", 
        "Resonance", 
        "Sound Waves and Speed of Sound", 
        "Doppler Effect", 
        "Beats and Harmonics", 
        "Intensity and Loudness", 
        "Wave Equation"
      ]
    },
    {
      title: "Light",
      description: "Properties and behavior of light",
      icon: Compass,
      path: "/physics/light",
      image: "https://images.unsplash.com/photo-1520531158340-44015069e78e?q=80&w=500&auto=format&fit=crop",
      subtopics: [
        "Nature of Light", 
        "Reflection of Light", 
        "Refraction of Light and Snell's Law", 
        "Lenses and Mirrors", 
        "Lens and Mirror Formula", 
        "Magnification", 
        "Dispersion of Light", 
        "Colour and Filters", 
        "Diffraction", 
        "Interference", 
        "Optical Instruments"
      ]
    },
    {
      title: "Thermodynamics",
      description: "Heat, temperature, and energy transfer",
      icon: Thermometer,
      path: "/physics/thermodynamics",
      image: "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?q=80&w=500&auto=format&fit=crop",
      subtopics: [
        "Temperature Scales", 
        "Thermal Equilibrium", 
        "Mechanisms of Heat Transfer", 
        "Thermal Expansion", 
        "Specific Heat Capacity", 
        "Calorimeter", 
        "Change in States", 
        "Latent Heat", 
        "Heating Curves, Cooling Curves", 
        "Zeroth Law of Thermodynamics", 
        "First Law of Thermodynamics", 
        "Heat Engines"
      ]
    },
    {
      title: "Electricity & Magnetism",
      description: "Electric fields, circuits, and magnetic phenomena",
      icon: Zap,
      path: "/physics/electricity",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=500&auto=format&fit=crop",
      subtopics: [
        "Electric Charge and Properties", 
        "Coulomb's Law", 
        "Electric Field", 
        "Electric Potential and Potential Energy", 
        "Conductors and Insulators", 
        "Charing by Induction and Friction", 
        "Ohm's Law", 
        "Resistivity and Factors Affecting Resistance", 
        "Electric Power and Energy", 
        "Series and Parallel Circuits", 
        "Kirchoff's Laws", 
        "Capacitors and Capacitance", 
        "Magnetic Fields and Field Lines", 
        "Magnetic Force on a Current", 
        "Right Hand Rule", 
        "Magnetic Force due to a Wire, Loop, Solenoid", 
        "Electromagnetic Induction", 
        "Faraday's Law of Induction", 
        "Lenz's Law", 
        "Motional EMF", 
        "Transformers", 
        "Applications: Electric Motors, Generators"
      ]
    },
    {
      title: "Modern Physics",
      description: "Quantum mechanics, relativity, and nuclear physics",
      icon: Compass,
      path: "/physics/modern-physics",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=500&auto=format&fit=crop",
      subtopics: [
        "Structure of the Particles and the Atoms", 
        "Bohr Model of the Atom", 
        "Types of Radioactivity Decay", 
        "Properties of Radiation", 
        "Half-Life and Radioactive Decay Law", 
        "Nuclear Fission and Fusion", 
        "Photoelectric Effect", 
        "Wave - Particle Duality", 
        "de Broglie Wavelength", 
        "Basic Laser Principle"
      ]
    },
    {
      title: "Astrophysics",
      description: "Stars, galaxies, and cosmology",
      icon: Compass,
      path: "/physics/astrophysics",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=500&auto=format&fit=crop",
      subtopics: [
        "Structure of the Universe", 
        "Solar System", 
        "Celestial Mechanics", 
        "Gravity & Kepler's Laws"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-blue-600 text-white py-12 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-90"></div>
            <img 
              src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop" 
              alt="Physics background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Link to="/" className="text-white/80 hover:text-white text-sm flex items-center gap-1">
                Home
              </Link>
              <span>/</span>
              <span className="text-sm">Physics</span>
            </div>
            <motion.h1 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Physics
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore fundamental principles governing the universe through mechanics, waves, light, thermodynamics, 
              electricity, modern physics, and astrophysics. Practice problems designed for IJSO competition preparation.
            </motion.p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.h2 
            className="text-2xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Topics
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="h-full flex flex-col overflow-hidden">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={topic.image} 
                      alt={topic.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <topic.icon className="h-5 w-5 text-blue-600" />
                      <CardTitle>{topic.title}</CardTitle>
                    </div>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-end">
                    <Button variant="outline" asChild className="w-full justify-between mt-4 group">
                      <Link to={topic.path}>
                        Explore Topic 
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="bg-blue-50 p-6 rounded-lg border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Ready to practice?</h3>
                <p className="text-muted-foreground mb-4">
                  Start with our carefully curated collection of IJSO-style physics problems. 
                  Select a topic above to begin exploring subtopics and practice questions.
                </p>
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                  View All Physics Problems
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Physics;
