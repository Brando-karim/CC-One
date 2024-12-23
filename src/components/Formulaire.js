import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Formulaire() {
  const [matricule, setMatricule] = useState("");
  const [marque, setMarque] = useState("");
  const [date, setDate] = useState("");
  const [color, setColor] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function HandleSubmit(e) {
    e.preventDefault();
    setIsSubmit(true);
    setDisabled(true);
  }

  return (
    
      <div className="container my-5 p-4 rounded shadow" style={{ backgroundColor: "#f9f9f9" }}>
        <div>
          <NavBar />
        </div>
        <form onSubmit={HandleSubmit} className="needs-validation" noValidate>
          <h2 className="text-center text-success mb-4">Formulaire de Véhicule</h2>
          <div className="mb-3">
            <label className="form-label">Matricule:</label>
            <input
              type="text"
              className="form-control"
              value={matricule}
              onChange={(e) => setMatricule(e.target.value)}
              disabled={disabled}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Marque:</label>
            <input
              type="text"
              className="form-control"
              value={marque}
              onChange={(e) => setMarque(e.target.value)}
              disabled={disabled}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Date de mise en circulation:</label>
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              disabled={disabled}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Couleur:</label>
            <input
              type="text"
              className="form-control"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              disabled={disabled}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Confirmer
          </button>
        </form>
        {isSubmit && (
          <Afficher matricule={matricule} marque={marque} date={date} color={color} />
        )}
      </div>
    );
  }
  
  function Afficher({ matricule, marque, date, color }) {
    if (!matricule || !marque || !date || !color) return null;
    return (
      <div className="container mt-4 p-4 rounded shadow" style={{ backgroundColor: "#ffffff" }}>
        <h2 className="text-center text-success">Récapitulatif des Informations</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Matricule:</strong> {matricule}
          </li>
          <li className="list-group-item">
            <strong>Marque:</strong> {marque}
          </li>
          <li className="list-group-item">
            <strong>Date de mise en circulation:</strong> {date}
          </li>
          <li className="list-group-item">
            <strong>Couleur:</strong> {color}
          </li>
        </ul>
      </div>
    );
  }
