import { useState } from "react"
import Categories from "./components/Categories"
import GifsExpo from "./components/GifsExpo"

function App() {
  const [categories, setCategories] = useState(["Spiderman", "Fast&Furious"])

  return (
    <div className="ms-5 mt-5 me-5">
      <h3>GIF DEMO APP</h3>
      <hr />
      <Categories categories={categories} setCategories={setCategories} />
      <GifsExpo categories={categories} />
    </div>
  )
}

export default App