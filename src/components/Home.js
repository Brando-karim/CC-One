import NavBar from "./NavBar";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <NavBar />
      <header style={{ backgroundColor: "#f4f4f4", padding: "20px" }}>
        <h1>Welcome to the Home Page</h1>
      </header>
      <main style={{ padding: "20px" }}>
        <h2>Controle Continu N1</h2>
        <p>React Js</p>
      </main>

    </div>
  );
}
