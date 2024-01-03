import About from "./ui/about/about";
import Button from "./ui/button/Button";
import "./index.css";
import Footer from "./ui/footer/Footer";
function App() {
  return (
    <main>
      {/* <Button btnInnerHtml="Explore Now!" isPrimary />
      <Button btnInnerHtml="Read More" isPrimary2 />
      <Button btnInnerHtml="Get In Touch" isPrimary3 /> */}
      <Button btnInnerHtml="Read More" />
      <Footer />
      <About />
    </main>
  );
}

export default App;
