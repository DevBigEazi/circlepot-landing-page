import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThirdwebProvider } from "thirdweb/react";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <ThirdwebProvider>
        <App />
      </ThirdwebProvider>
    </HelmetProvider>
  </StrictMode>,
);
