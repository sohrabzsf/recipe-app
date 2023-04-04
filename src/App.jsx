import { RecipesProvider } from "./contexts/RecipesContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import FindRecipes from "./Pages/FindRecipes";
import MyCollection from "./Pages/MyCollection";
import About from "./Pages/About";

function App() {
  return (
    <RecipesProvider>
      <Router>
        <div className="flex flex-col h-screen justify-between">
          <Navbar />
          <main className="flex flex-col flex-grow p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/findrecipes" element={<FindRecipes />} />
              <Route path="/mycollection" element={<MyCollection />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </RecipesProvider>
  );
}

export default App;
