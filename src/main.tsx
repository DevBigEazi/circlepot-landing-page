import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DynamicProvider from "./components/DynamicProvider.tsx";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <DynamicProvider>
        <App />
      </DynamicProvider>
    </HelmetProvider>
  </StrictMode>,
);
