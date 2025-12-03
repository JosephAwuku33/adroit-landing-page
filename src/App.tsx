import { AnimatePresence, motion } from "motion/react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
// import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";

function App() {
  return (
    <AnimatePresence>
      <Router>
        <Header />
        <motion.main
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </motion.main>
        <Footer />
      </Router>
    </AnimatePresence>
  );
}

export default App;
