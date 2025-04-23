import React from "react";
import { Plus } from "lucide-react";
import "../styles/AddSupplierButton.css";

export default function AddSupplierButton({ onClick }) {
  return (
    <div className="tooltip">
      <button
        className="add-supplier-btn"
        onClick={onClick}
        aria-label="Add Supplier"
      >
        <Plus size={20} />
      </button>
      <span className="tooltiptext">Add Supplier</span>
    </div>
  );
}
