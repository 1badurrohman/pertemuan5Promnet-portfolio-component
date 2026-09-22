import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  const colors = {
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
      
      <Content colors={colors} projectData={projectData} scrollToSection={scrollToSection} />
      
      <Footer colors={colors} />
    </div>
  );
};

export default App;