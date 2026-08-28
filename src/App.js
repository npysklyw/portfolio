import React, { useEffect } from "react";
import { Home } from "./Pages/Mainpage/Home";
import { AppThemeProvider } from "./context/AppThemeContext";

export default function App() {
  useEffect(() => {
    document.title = "Nicholas Pysklywec";
  }, []);

  return (
    <AppThemeProvider>
      <Home />
    </AppThemeProvider>
  );
}
