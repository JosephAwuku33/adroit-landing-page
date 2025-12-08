import { AnimatePresence } from "motion/react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";

function App() {
  return (
    <AnimatePresence>
      <Router>
        <Header />
        <main className="max-w-screen overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AnimatePresence>
  );
}

export default App;
