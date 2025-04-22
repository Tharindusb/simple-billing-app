import React, { useState } from "react";
import "../styles/AddBillModal.css";

export default function AddBillModal({ onClose, onAdd, suppliers }) {
  const [form, setForm] = useState({
    supplierId: suppliers.length > 0 ? suppliers[0].id : "",
    date: "",
    billRef: "",
    total: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAdd({
      supplierId: form.supplierId,
      date: form.date,
      billRef: form.billRef,
      total: parseFloat(form.total),
    });
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Add New Bill</h3>
        <form onSubmit={handleSubmit} className="bill-form">
          <label>
            Supplier
            <select
              name="supplierId"
              value={form.supplierId}
              onChange={handleChange}
              required
            >
              {suppliers.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Date
            <input
              name="date"
              type="date"
              value={form.date}
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
          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn-cancel">
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Add Bill
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
