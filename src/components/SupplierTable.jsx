// src/components/SupplierTable.jsx
import React from "react";
import { useSettings } from "../context/SettingsContext";
import "../styles/SupplierTable.css";

export default function SupplierTable({ suppliers }) {
  const { currency, fontSize } = useSettings();

  const format = (value) =>
    new Intl.NumberFormat(undefined, {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <table className="supplier-table" style={{ fontSize: `${fontSize}px` }}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Supplier ID</th>
          <th>Supplier Name</th>
          <th>Bill Ref No.</th>
          <th>Bill Total</th>
          <th>Paid Amount</th>
          <th>Remaining</th>
        </tr>
      </thead>
      <tbody>
        {suppliers.map((s) => {
          const remaining = s.total - s.paid;
          const formattedDate = new Date(s.date).toLocaleDateString();
          return (
            <tr key={`${s.id}-${s.billRef}`}>
              <td>{formattedDate}</td>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.billRef}</td>
              <td>{format(s.total)}</td>
              <td>{format(s.paid)}</td>
              <td
                className={remaining > 0 ? "remaining-due" : "remaining-clear"}
              >
                {format(remaining)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
