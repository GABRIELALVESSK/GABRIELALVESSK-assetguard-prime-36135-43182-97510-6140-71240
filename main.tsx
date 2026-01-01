import { createRoot } from "react-dom/client";
import { DataProvider } from "./contexts/DataContext";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <DataProvider>
    <App />
  </DataProvider>
);
