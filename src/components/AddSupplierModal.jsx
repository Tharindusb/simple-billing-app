// src/components/AddSupplierModal.jsx
import React, { useState } from "react";
import "../styles/AddSupplierModal.css";

export default function AddSupplierModal({ onAddSupplier, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Supplier name is required.");
      return;
    }

    const newSupplier = {
      id: generateSupplierId(),
      name: name.trim(),
      email: email.trim(),
      tel: tel.trim(),
      address: address.trim(),
    };

    onAddSupplier(newSupplier);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Supplier</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Supplier Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Telephone Number</label>
            <input
              type="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div className="button-group">
            <button type="submit">Add Supplier</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Utility function to generate unique supplier IDs
let supplierIdCounter = 1;
function generateSupplierId() {
  const id = `SUP${supplierIdCounter.toString().padStart(3, "0")}`;
  supplierIdCounter += 1;
  return id;
}
