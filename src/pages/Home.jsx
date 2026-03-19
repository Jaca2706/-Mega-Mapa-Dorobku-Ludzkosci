import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Interaktywna Oś Czasu</h1>
      <p>Wybierz grupę aby zobaczyć ich projekt</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "40px" }}>
        
        <Link to="/group1">
          <button>Grupa 1</button>
        </Link>

        <Link to="/group2">
          <button>Grupa 2</button>
        </Link>

        <Link to="/group3">
          <button>Grupa 3</button>
        </Link>

        <Link to="/group4">
          <button>Grupa 4</button>
        </Link>

      </div>
    </div>
  );
}

export default Home;