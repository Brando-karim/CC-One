import { useState } from "react";
import NavBar from "../components/NavBar";

const salaires = [
  {
    _id: "s1",
    nomsal: "Alami",
    prenomsal: "Sara",
    fonction: "Technicien",
    service: { codeser: "1", nomser: "Informatique" },
  },
  {
    _id: "s2",
    nomsal: "Bennani",
    prenomsal: "Omar",
    fonction: "Développeur",
    service: { codeser: "2", nomser: "Développement" },
  },
  {
    _id: "s3",
    nomsal: "Fakih",
    prenomsal: "Nadia",
    fonction: "Analyste",
    service: { codeser: "3", nomser: "Analyse" },
  },
  {
    _id: "s4",
    nomsal: "El Amrani",
    prenomsal: "Youssef",
    fonction: "Administrateur",
    service: { codeser: "4", nomser: "Réseaux" },
  },
  {
    _id: "s5",
    nomsal: "Zouine",
    prenomsal: "Laila",
    fonction: "Consultant",
    service: { codeser: "5", nomser: "Consulting" },
  },
  {
    _id: "s6",
    nomsal: "Tazi",
    prenomsal: "Karim",
    fonction: "Ingénieur",
    service: { codeser: "6", nomser: "Production" },
  },
  {
    _id: "s7",
    nomsal: "Mekouar",
    prenomsal: "Salma",
    fonction: "Responsable",
    service: { codeser: "7", nomser: "Marketing" },
  },
  {
    _id: "s8",
    nomsal: "Nouiri",
    prenomsal: "Hamid",
    fonction: "Opérateur",
    service: { codeser: "8", nomser: "Opérations" },
  },
  {
    _id: "s9",
    nomsal: "Kabbaj",
    prenomsal: "Fatima",
    fonction: "Chef de projet",
    service: { codeser: "9", nomser: "Projets" },
  },
  {
    _id: "s10",
    nomsal: "Rahal",
    prenomsal: "Ali",
    fonction: "Technicien",
    service: { codeser: "10", nomser: "Support" },
  },
];

export default function Composant3() {
  const [service, setService] = useState("");
  const [results, setResults] = useState([]);

  function handleSearch() {
    const filteredResults = salaires.filter(
      (salaire) =>
        salaire.service.nomser.toLowerCase() === service.toLowerCase()
    );
    setResults(filteredResults);
  }

  return (
    <div id="container" className="container">
    <div className="navbar">
      <NavBar />
    </div>

    <h1 className="text-center">Recherche par service:</h1>

    <input
      type="text"
      placeholder="Entrer le nom du service"
      value={service}
      onChange={(e) => setService(e.target.value)}
      className="form-control mb-3"
    />

    <button onClick={handleSearch} className="btn btn-primary w-100">
      Chercher
    </button>
      <div>
        <h2>Résultat</h2>
        {results.length > 0 ? (
          <ul>
            {results.map((salaire) => (
              <li key={salaire._id}>
                <strong>Nom:</strong> {salaire.nomsal} <strong>Prénom:</strong>{" "}
                {salaire.prenomsal}
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucun salarié n’est affecté à ce service.</p>
        )}
      </div>
    </div>
  );
}



