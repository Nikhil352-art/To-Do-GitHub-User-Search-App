import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <button onClick={() => navigate("/todo")}>To-Do</button>
      <button onClick={() => navigate("/github")} style={{ marginLeft: "1rem" }}>GitHub</button>
    </div>
  );
}