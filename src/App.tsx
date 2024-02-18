import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Footer from "./components/footer/Footer";
import Thanks from "./pages/thanks/Thanks";
import CookieBanner from "./components/cookieBanner/CookieBanner";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Home />} />
        <Route path="/faq" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <CookieBanner />
    </>
  );
};

export default App;
