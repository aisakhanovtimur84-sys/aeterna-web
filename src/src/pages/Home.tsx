import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>AETERNA</h1>
      <p>Digital Time Capsule Protocol</p>

      <Link to="/create">
        <button>Create Capsule</button>
      </Link>
    </div>
  );
}
