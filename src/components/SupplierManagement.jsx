// src/components/SupplierManagement.jsx
import React, { useState } from "react";
import SupplierTable from "./SupplierTable";
import AddSupplierButton from "./AddSupplierButton";
import AddSupplierModal from "./AddSupplierModal";
import AddBillButton from "./AddBillButton";
import AddBillModal from "./AddBillModal";
import "../styles/SupplierManagement.css";

export default function SupplierManagement() {
  const [suppliers, setSuppliers] = useState([]);
  const [bills, setBills] = useState([]); // or separate initialBills
  const [isSupplierModalOpen, setSupplierModalOpen] = useState(false);
  const [isBillModalOpen, setBillModalOpen] = useState(false); // (new)
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleAddSupplier(newSupplier) {
    setSuppliers((prev) => [...prev, newSupplier]);
    setSupplierModalOpen(false);
  }

  function handleAddBill(newBill) {
    setBills((prev) => [...prev, newBill]); // (new)
    setBillModalOpen(false); // (new)
  }

  return (
    <div className="supplier-management">
      <h2 className="sm-heading">Supplier Management</h2>
      <div className="action-buttons">
        <AddSupplierButton onClick={() => setSupplierModalOpen(true)} />
        <AddBillButton onClick={() => setBillModalOpen(true)} /> {/* new */}
      </div>
      <SupplierTable suppliers={suppliers} bills={bills} /> {/* pass bills */}
      {isSupplierModalOpen && (
        <AddSupplierModal
          onClose={() => setSupplierModalOpen(false)}
          onAddSupplier={handleAddSupplier}
        />
      )}
      {isBillModalOpen && ( // new
        <AddBillModal
          onClose={() => setBillModalOpen(false)}
          onAdd={handleAddBill}
          suppliers={suppliers}
        />
      )}
    </div>
  );
}
