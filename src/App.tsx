
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Layouts
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Main Pages
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import ProtectedRoute from "./components/ProtectedRoute";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <Routes>
                {/* Main routes */}
                <Route 
                  path="/" 
                  element={<MainLayout><HomePage /></MainLayout>} 
                />
                <Route 
                  path="/index" 
                  element={<MainLayout><Index /></MainLayout>} 
                />
                <Route 
                  path="/products" 
                  element={<MainLayout><Products /></MainLayout>} 
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Admin routes */}
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute adminOnly>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/products"
                  element={
                    <ProtectedRoute adminOnly>
                      <AdminProducts />
                    </ProtectedRoute>
                  }
                />
                
                {/* 404 page */}
                <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
              </Routes>
            </TooltipProvider>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
