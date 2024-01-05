import About from "./ui/about/About";

import "./global.css";
import Footer from "./ui/footer/Footer";
import ArticleSection from "./ui/articles/Articles";
import Header from "./ui/header/Header";
function App() {
  return (
    <main>
      <Header />
      <About />
      <ArticleSection />
      <Footer />
    </main>
  );
}

export default App;
