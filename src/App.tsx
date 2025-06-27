// src/App.tsx
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
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

// Import the LeadGate component
import LeadGate from "./components/Leadgate"; // <--- NEW IMPORT

// Import new legal pages
import PrivacyPolicy from "./pages/PrivacyPolicy"; // <--- NEW IMPORT
import TermsOfService from "./pages/TermsOfService"; // <--- NEW IMPORT

const queryClient = new QueryClient();

const App = () => {
  // State to manage access to the Toolkit page
  const [hasToolkitAccess, setHasToolkitAccess] = useState(false);

  // Check local storage on initial load to see if access was previously granted
  useEffect(() => {
    const storedAccess = localStorage.getItem('toolkit_access_granted');
    if (storedAccess === 'true') {
      setHasToolkitAccess(true);
    }
  }, []); // Empty dependency array means this runs once on mount

  // Function to grant access, called by LeadGate on form submission
  const grantToolkitAccess = () => {
    setHasToolkitAccess(true);
    // Note: LeadGate.tsx already sets localStorage.setItem('toolkit_access_granted', 'true');
    // So, no need to duplicate that here.
  };

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

                {/* Conditional rendering for the Toolkit page */}
                <Route
                  path="/toolkit"
                  element={
                    hasToolkitAccess ? (
                      <Toolkit />
                    ) : (
                      <LeadGate onAccessGranted={grantToolkitAccess} />
                    )
                  }
                />

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
