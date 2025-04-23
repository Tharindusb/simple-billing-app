// src/components/SearchButton.jsx
import React from "react";
import { Search } from "lucide-react";
import "../styles/SearchButton.css";

export default function SearchButton({ onClick }) {
  return (
    <div className="tooltip">
      <button
        onClick={onClick}
        className="action-btn"
        aria-label="Search Suppliers"
      >
        <Search size={20} />
      </button>
      <span className="tooltiptext">Search</span>
    </div>
  );
}
