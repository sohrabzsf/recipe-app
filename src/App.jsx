import { AppProvider } from "./contexts/AppContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FindRecipes from "./pages/FindRecipes";
import MyCollection from "./pages/MyCollection";
import About from "./pages/About";

function App() {
  return (
    <AppProvider>
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
    </AppProvider>
  );
}

export default App;
