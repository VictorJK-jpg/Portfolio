// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Keep this one, remove duplicates
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import your components
import Navigation from "./components/Navigation"; // Your main navigation
import Footer from "./components/Footer";       // The new Footer component

// Import your page components
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Toolkit from "./pages/Toolkit"; // Ensure this file exists in src/pages
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
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
              <Route path="/toolkit" element={<Toolkit />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          
          <Footer /> {/* The Footer component */}
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
