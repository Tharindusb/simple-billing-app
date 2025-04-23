// src/components/SearchModal.jsx
import React, { useState } from "react";
import "../styles/SearchModal.css";

export default function SearchModal({ suppliers, bills, onClose }) {
  const [query, setQuery] = useState("");
  const matches = suppliers.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );
  {
    /* filter logic :contentReference[oaicite:5]{index=5} */
  }

  return (
    <div className="modal-overlay">
      <div className="search-modal">
        <h3>Search Suppliers</h3>
        <input
          type="text"
          placeholder="Type to search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="results">
          {matches.length === 0 ? (
            <p>No matching suppliers.</p>
          ) : (
            matches.map((s) => {
              const sbills = bills.filter((b) => b.supplierId === s.id);
              {
                /* billing filter :contentReference[oaicite:6]{index=6} */
              }
              const total = sbills.reduce((sum, b) => sum + b.total, 0);
              {
                /* sum totals :contentReference[oaicite:7]{index=7} */
              }
              const paid = sbills.reduce((sum, b) => sum + (b.paid || 0), 0);
              {
                /* sum paid :contentReference[oaicite:8]{index=8} */
              }
              const balance = total - paid;
              return (
                <div key={s.id} className="supplier-card">
                  <h4>{s.name}</h4>
                  <p>Total Billed: {total.toFixed(2)}</p>
                  <p>Paid: {paid.toFixed(2)}</p>
                  <p>Balance: {balance.toFixed(2)}</p>
                  <ul>
                    {sbills.map((b) => (
                      <li key={b.billRef}>
                        {new Date(b.date).toLocaleDateString()} – {b.billRef}:{" "}
                        {b.total.toFixed(2)}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })
          )}
        </div>
        <button className="btn-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
