import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Bens from "./pages/Bens";
import Localizacoes from "./pages/Localizacoes";
import Inventario from "./pages/Inventario";
import Depreciacao from "./pages/Depreciacao";
import Transferencias from "./pages/Transferencias";
import Relatorios from "./pages/Relatorios";
import Usuarios from "./pages/Usuarios";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/bens" element={<Bens />} />
            <Route path="/localizacoes" element={<Localizacoes />} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/depreciacao" element={<Depreciacao />} />
            <Route path="/transferencias" element={<Transferencias />} />
            <Route path="/relatorios" element={<Relatorios />} />
            <Route path="/usuarios" element={<Usuarios />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
