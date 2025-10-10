// src/App.tsx
import React from 'react';
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

// Waitlist Import
import Waitlist from './pages/Waitlist';

const queryClient = new QueryClient();

// A separate component to render your main app layout (with Nav/Footer)
const MainLayout = () => (
  <>
    <Navigation />
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/toolkit" element={<Toolkit />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        {/* IMPORTANT: This catch-all must be the last one in this Routes block */}
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </main>
    <Footer />
  </>
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* This top-level Routes block determines which layout to use */}
          <Routes>
            {/* 1. Dedicated, Full-Screen Route for the Lander (No Nav/Footer) */}
            <Route path="/waitlist" element={<Waitlist />} />

            {/* 2. Main App Routes (with Nav/Footer) */}
            {/* The "*" path here means "catch everything else" */}
            <Route path="*" element={<div className="min-h-screen bg-white font-sans flex flex-col"><MainLayout /></div>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;