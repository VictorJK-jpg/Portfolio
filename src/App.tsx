// src/App.tsx
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import your components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Lazy load your page components for better performance
const Home = lazy(() => import("./pages/Home"));
const Portfolio = lazy(() => import("./pages/My Work"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Toolkit = lazy(() => import("./pages/Toolkit"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy load legal pages
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

// Lazy load waitlist
const Waitlist = lazy(() => import('./pages/Waitlist'));

const queryClient = new QueryClient();

// A separate component to render your main app layout (with Nav/Footer)
const MainLayout = () => (
  <>
    <Navigation />
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        } />
        <Route path="/about" element={
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        } />
        <Route path="/contact" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        } />
        <Route path="/portfolio" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Portfolio />
          </Suspense>
        } />
        <Route path="/toolkit" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Toolkit />
          </Suspense>
        } />
        <Route path="/privacy-policy" element={
          <Suspense fallback={<div>Loading...</div>}>
            <PrivacyPolicy />
          </Suspense>
        } />
        <Route path="/terms-of-service" element={
          <Suspense fallback={<div>Loading...</div>}>
            <TermsOfService />
          </Suspense>
        } />
        {/* IMPORTANT: This catch-all must be the last one in this Routes block */}
        <Route path="*" element={
          <Suspense fallback={<div>Loading...</div>}>
            <NotFound />
          </Suspense>
        } /> 
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
            <Route path="/waitlist" element={
              <Suspense fallback={<div>Loading...</div>}>
                <Waitlist />
              </Suspense>
            } />

            {/* 2. Main App Routes (with Nav/Footer) */}
            {/* The "*" path here means "catch everything else" */}
            <Route path="*" element={<div className="min-h-screen bg-black text-white font-sans flex flex-col"><MainLayout /></div>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;