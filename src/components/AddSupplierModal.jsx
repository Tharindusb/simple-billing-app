import React, { useState } from "react";
import "../styles/AddSupplierModal.css";

export default function AddSupplierModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    id: "",
    name: "",
    billRef: "",
    total: "",
    paid: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newSupplier = {
      id: form.id,
      name: form.name,
      billRef: form.billRef,
      total: parseFloat(form.total),
      paid: parseFloat(form.paid),
    };
    onAdd(newSupplier);
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Add New Supplier</h3>
        <form onSubmit={handleSubmit} className="supplier-form">
          <label>
            Supplier ID
            <input name="id" value={form.id} onChange={handleChange} required />
          </label>
          <label>
            Name
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Bill Ref #
            <input
              name="billRef"
              value={form.billRef}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Total Amount
            <input
              name="total"
              type="number"
              step="0.01"
              value={form.total}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Paid Amount
            <input
              name="paid"
              type="number"
              step="0.01"
              value={form.paid}
              onChange={handleChange}
              required
            />
          </label>
          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn-cancel">
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
