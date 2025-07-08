// src/App.tsx
import React from 'react'; // Removed useState and useEffect as they are no longer needed for LeadGate
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import your components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Import your page components
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Toolkit from "./pages/Toolkit";
import NotFound from "./pages/NotFound";

// Import new legal pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// LeadGate import is removed as it's no longer used in App.tsx

const queryClient = new QueryClient();

const App = () => {
  // Removed all LeadGate related state and effects (hasToolkitAccess, grantToolkitAccess)

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* The min-h-screen and flex flex-col ensure the footer sticks to the bottom */}
          <div className="min-h-screen bg-white font-sans flex flex-col">
            <Navigation /> {/* Your navigation bar */}

            {/* IMPORTANT: This <main> tag wraps all your page content */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />

                {/* Toolkit page now directly accessible without LeadGate */}
                <Route path="/toolkit" element={<Toolkit />} />

                {/* Legal pages routes */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer /> {/* The Footer component */}
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
