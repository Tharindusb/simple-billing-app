// src/components/SettingsButton.jsx
import React from "react";
import { Settings } from "lucide-react";
import "../styles/SettingsButton.css";

export default function SettingsButton({ onClick }) {
  return (
    <button
      className="settings-btn"
      onClick={onClick}
      aria-label="Open settings"
    >
      <Settings size={24} strokeWidth={2} />
    </button>
  );
}
