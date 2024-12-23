import React from "react";
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

export default function Table() {
  return (
    <div className="container py-4" style={{ fontFamily: "Arial, sans-serif" }}>
      <div>
        <NavBar />
      </div>
      <h2 className="text-center mb-4">Liste des Salariés</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover table-striped shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Nom</th>
              <th scope="col">Prénom</th>
              <th scope="col">Fonction</th>
              <th scope="col">Service</th>
            </tr>
          </thead>
          <tbody>
            {salaires.map((salaire, index) => (
              <tr key={salaire._id}>
                <td>{salaire.nomsal}</td>
                <td>{salaire.prenomsal}</td>
                <td>{salaire.fonction}</td>
                <td>{salaire.service.nomser}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
