import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
const Navbar = () => {
  return <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-8 w-8" />
              <span className="font-bold text-xl">Theory</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground/10">
                Home
              </Link>
              <Link to="/physics" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground/10">
                Physics
              </Link>
              <Link to="/chemistry" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground/10">
                Chemistry
              </Link>
              <Link to="/biology" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground/10">
                Biology
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;