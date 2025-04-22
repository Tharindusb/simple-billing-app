import React from "react";
import "../styles/SupplierTable.css";

export default function SupplierTable({ suppliers }) {
  return (
    <table className="supplier-table">
      <thead>
        <tr>
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
          return (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.billRef}</td>
              <td>${s.total.toFixed(2)}</td>
              <td>${s.paid.toFixed(2)}</td>
              <td
                className={remaining > 0 ? "remaining-due" : "remaining-clear"}
              >
                ${remaining.toFixed(2)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
