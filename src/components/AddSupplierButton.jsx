import React from "react";
import "../styles/AddSupplierButton.css";

export default function AddSupplierButton({ onClick }) {
  return (
    <button className="add-supplier-btn" onClick={onClick}>
      + Add Supplier
    </button>
  );
}
