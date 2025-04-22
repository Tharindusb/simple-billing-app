// src/App.jsx
import React, { useState } from "react";
import { SettingsProvider } from "./context/SettingsContext";
import SupplierManagement from "./components/SupplierManagement";
import SettingsButton from "./components/SettingsButton";
import SettingsModal from "./components/SettingsModal";
import "./App.css";

function App() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <SettingsProvider>
      <div className="App">
        <SettingsButton onClick={() => setShowSettings(true)} />
        <SupplierManagement />
        {showSettings && (
          <SettingsModal onClose={() => setShowSettings(false)} />
        )}
      </div>
    </SettingsProvider>
  );
}

export default App;
