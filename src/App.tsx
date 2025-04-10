
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Physics from "./pages/Physics";
import Chemistry from "./pages/Chemistry";
import Biology from "./pages/Biology";
import Mechanics from "./pages/Mechanics";
import Waves from "./pages/Waves";
import Light from "./pages/Light";
import Thermodynamics from "./pages/Thermodynamics";
import Electricity from "./pages/Electricity";
import ModernPhysics from "./pages/ModernPhysics";
import Astrophysics from "./pages/Astrophysics";
import StructureOfUniverse from "./pages/StructureOfUniverse";
import NotFound from "./pages/NotFound";

// Chemistry routes
import AtomicStructure from "./pages/chemistry/AtomicStructure";
import ChemicalBonding from "./pages/chemistry/ChemicalBonding";
import StatesOfMatter from "./pages/chemistry/StatesOfMatter";
import Stoichiometry from "./pages/chemistry/Stoichiometry";
import ChemicalReactions from "./pages/chemistry/ChemicalReactions";
import AcidsBases from "./pages/chemistry/AcidsBases";
import Thermochemistry from "./pages/chemistry/Thermochemistry";
import Kinetics from "./pages/chemistry/Kinetics";
import Equilibrium from "./pages/chemistry/Equilibrium";
import Electrochemistry from "./pages/chemistry/Electrochemistry";
import OrganicChemistry from "./pages/chemistry/OrganicChemistry";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/physics" element={<Physics />} />
          <Route path="/chemistry" element={<Chemistry />} />
          <Route path="/biology" element={<Biology />} />
          
          {/* Physics routes */}
          <Route path="/physics/mechanics" element={<Mechanics />} />
          <Route path="/physics/waves" element={<Waves />} />
          <Route path="/physics/light" element={<Light />} />
          <Route path="/physics/thermodynamics" element={<Thermodynamics />} />
          <Route path="/physics/electricity" element={<Electricity />} />
          <Route path="/physics/modern-physics" element={<ModernPhysics />} />
          <Route path="/physics/astrophysics" element={<Astrophysics />} />
          <Route path="/physics/astrophysics/structure-of-universe" element={<StructureOfUniverse />} />
          
          {/* Chemistry routes */}
          <Route path="/chemistry/atomic-structure" element={<AtomicStructure />} />
          <Route path="/chemistry/chemical-bonding" element={<ChemicalBonding />} />
          <Route path="/chemistry/states-of-matter" element={<StatesOfMatter />} />
          <Route path="/chemistry/stoichiometry" element={<Stoichiometry />} />
          <Route path="/chemistry/chemical-reactions" element={<ChemicalReactions />} />
          <Route path="/chemistry/acids-bases" element={<AcidsBases />} />
          <Route path="/chemistry/thermochemistry" element={<Thermochemistry />} />
          <Route path="/chemistry/kinetics" element={<Kinetics />} />
          <Route path="/chemistry/equilibrium" element={<Equilibrium />} />
          <Route path="/chemistry/electrochemistry" element={<Electrochemistry />} />
          <Route path="/chemistry/organic" element={<OrganicChemistry />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
