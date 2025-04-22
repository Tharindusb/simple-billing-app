import React, { useState } from "react";
import SupplierTable from "./SupplierTable";
import AddSupplierButton from "./AddSupplierButton";
import AddSupplierModal from "./AddSupplierModal";
import "../styles/SupplierManagement.css";

const initialSuppliers = [
  // example data; you can fetch from API instead
  {
    id: "SUP001",
    name: "Acme Corp",
    billRef: "BILL1001",
    total: 1200,
    paid: 800,
  },
  {
    id: "SUP002",
    name: "Global Supplies",
    billRef: "BILL1002",
    total: 500,
    paid: 200,
  },
];

export default function SupplierManagement() {
  const [suppliers, setSuppliers] = useState(initialSuppliers);
  const [isModalOpen, setModalOpen] = useState(false);

  function handleAdd(newSupplier) {
    setSuppliers((prev) => [...prev, newSupplier]);
    setModalOpen(false);
  }

  return (
    <div className="supplier-management">
      <h2 className="sm-heading">Supplier Management</h2>
      <AddSupplierButton onClick={() => setModalOpen(true)} />
      <SupplierTable suppliers={suppliers} />
      {isModalOpen && (
        <AddSupplierModal
          onClose={() => setModalOpen(false)}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
}
