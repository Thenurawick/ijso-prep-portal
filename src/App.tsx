
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
import NotFound from "./pages/NotFound";

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
          <Route path="/physics/mechanics" element={<Mechanics />} />
          <Route path="/physics/waves" element={<Waves />} />
          <Route path="/physics/light" element={<Light />} />
          <Route path="/physics/thermodynamics" element={<Thermodynamics />} />
          <Route path="/physics/electricity" element={<Electricity />} />
          <Route path="/physics/modern-physics" element={<ModernPhysics />} />
          <Route path="/physics/astrophysics" element={<Astrophysics />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
