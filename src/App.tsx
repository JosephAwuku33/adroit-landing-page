import { AnimatePresence } from "motion/react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";

function App() {
  return (
    <AnimatePresence>
      <div className="min-h-screen w-full overflow-x-hidden">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </AnimatePresence>
  );
}

export default App;
