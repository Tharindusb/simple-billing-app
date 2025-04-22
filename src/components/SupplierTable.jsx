// src/components/SupplierTable.jsx
import React from "react";
import { useSettings } from "../context/SettingsContext";
import "../styles/SupplierTable.css";

export default function SupplierTable({ suppliers, bills }) {
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
        {bills.map((b) => {
          const remaining = b.total - (b.paid ?? 0);
          const supplier = suppliers.find((s) => s.id === b.supplierId);
          return (
            <tr key={`${b.supplierId}-${b.billRef}`}>
              <td>{new Date(b.date).toLocaleDateString()}</td>
              <td>{b.supplierId}</td>
              <td>{supplier ? supplier.name : "Unknown"}</td>
              <td>{b.billRef}</td>
              <td>{format(b.total)}</td>
              <td>{format(b.paid ?? 0)}</td>
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
