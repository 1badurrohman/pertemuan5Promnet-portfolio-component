import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const colors = {
    background: "#E8DCC8",
    section: "#F5EDE2",
    text: "#292626",
    brown: "#7A5230",
    beige: "#B9AC96",
    red: "#8F2929",
  };

  const projectData = [
    { image: "/poster open po lanyard.jpg.jpeg", title: "Open PO Lanyard" },
    { image: "/poster open po kemeja.jpg.jpeg", title: "Open PO Kemeja" },
    { image: "/poster open po kemeja dan kahim.jpeg", title: "Open PO Kemeja & Kahim" },
    { image: "/poster open po snack.jpg.jpeg", title: "Open PO Snack" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: `url('/background megamendung.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: colors.text,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <Header colors={colors} scrollToSection={scrollToSection} />
        <Routes>
          <Route
            path="/"
            element={
              <Content
                colors={colors}
                projectData={projectData}
                scrollToSection={scrollToSection}
              />
            }
          />
        </Routes>
        <Footer colors={colors} />
      </div>
    </Router>
  );
}

export default App;