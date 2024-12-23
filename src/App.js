import Formulaire from "./components/Formulaire";
import Table from "./components/Table";
import Filtrer from "./components/Filtrer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="formulaire" element={<Formulaire />} />
          <Route path="table" element={<Table />} />
          <Route path="chercher" element={<Filtrer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
