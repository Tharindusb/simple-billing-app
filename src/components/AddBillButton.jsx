import React from "react";
import { FilePlus } from "lucide-react";
import "../styles/AddBillButton.css";

export default function AddBillButton({ onClick }) {
  return (
    <div className="tooltip">
      <button className="add-bill-btn" onClick={onClick} aria-label="Add Bill">
        <FilePlus size={20} />
      </button>
      <span className="tooltiptext">Add Bill</span>
    </div>
  );
}
