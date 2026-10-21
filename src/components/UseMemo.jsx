import { useMemo, useState } from "react";

const products = ["Shoes", "Shirt", "Shorts", "Watch", "Wallet", "Bag"];

function UseMemo() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const filtered = useMemo(() => {
    console.log("Filtering...");
    return products.filter((p) =>
      p.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]); // only re-runs when `search` changes

  return (
    <div style={{ background: darkMode ? "#222" : "#fff", color: darkMode ? "#fff" : "#000" }}>
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
      <button onClick={() => setDarkMode(!darkMode)}>Toggle theme</button>
      <ul>{filtered.map((p) => <li key={p}>{p}</li>)}</ul>
    </div>
  );
}

export default UseMemo;