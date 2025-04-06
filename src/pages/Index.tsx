
import React from 'react';
import { Atom, Beaker, FlaskConical } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubjectCard from '@/components/SubjectCard';

const Index = () => {
  const subjects = [
    {
      title: 'Physics',
      description: 'Master mechanics, thermodynamics, electricity and more.',
      icon: Atom,
      path: '/physics',
      color: 'bg-blue-600'
    },
    {
      title: 'Chemistry',
      description: 'Study elements, compounds, reactions and chemical principles.',
      icon: FlaskConical,
      path: '/chemistry',
      color: 'bg-green-600'
    },
    {
      title: 'Biology',
      description: 'Explore cells, genetics, evolution and biological systems.',
      icon: Beaker,
      path: '/biology',
      color: 'bg-purple-600'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-accent/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              IJSO Practice Questions Portal
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive practice materials to help you excel in the International Junior Science Olympiad.
            </p>
          </div>
        </section>
        
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-10">Explore Subjects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {subjects.map((subject) => (
                <SubjectCard 
                  key={subject.title}
                  title={subject.title}
                  description={subject.description}
                  icon={subject.icon}
                  path={subject.path}
                  color={subject.color}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
