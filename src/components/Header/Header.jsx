import React from "react";

const AddToContacts = () => {
  const handleAddContact = () => {
    // Ձեր սերվերի վավեր հղումը
    window.location.href = "https://n13.netlify.app/Cont.vcf";
  };

  return (
    <button onClick={handleAddContact} style={buttonStyle}>
      Ավելացնել կոնտակտ
    </button>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default AddToContacts;
