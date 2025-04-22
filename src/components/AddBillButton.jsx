import React from "react";
import "../styles/AddBillButton.css";

export default function AddBillButton({ onClick }) {
  return (
    <button className="add-bill-btn" onClick={onClick}>
      + Add Bill
    </button>
  );
}
