// src/components/SettingsModal.jsx
import React, { useState, useEffect } from "react";
import { useSettings } from "../context/SettingsContext";
import "../styles/SettingsModal.css";

export default function SettingsModal({ onClose }) {
  const { currency, setCurrency, fontSize, setFontSize, theme, toggleTheme } =
    useSettings();

  // Local state to edit before applying
  const [draftCurrency, setDraftCurrency] = useState(currency);
  const [draftFontSize, setDraftFontSize] = useState(fontSize);

  // Keep local in sync if context changes elsewhere
  useEffect(() => setDraftCurrency(currency), [currency]);
  useEffect(() => setDraftFontSize(fontSize), [fontSize]);

  const handleApply = () => {
    setCurrency(draftCurrency);
    setFontSize(draftFontSize);
    onClose();
  };

  return (
    <div className="settings-overlay">
      <div className="settings-content">
        <h3>Application Settings</h3>

        <label>
          Currency
          <select
            value={draftCurrency}
            onChange={(e) => setDraftCurrency(e.target.value)}
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
            <option value="LKR">LKR (Rs.)</option>
            {/* add more as needed */}
          </select>
        </label>

        <label>
          Font Size
          <input
            type="number"
            min="10"
            max="24"
            value={draftFontSize}
            onChange={(e) => setDraftFontSize(Number(e.target.value))}
          />
        </label>

        <label>
          Theme
          <button onClick={toggleTheme} className="theme-toggle">
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </label>

        <div className="form-actions">
          <button onClick={onClose} className="btn-cancel">
            Cancel
          </button>
          <button onClick={handleApply} className="btn-submit">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
