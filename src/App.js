import "./App.css";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/product/Product";
import Strategies from "./components/strategies/Strategies";
import Price from "./components/price/Price";
import Clients from "./components/clients/Clients";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Product />
        <Strategies />
        <Price />
        <Clients />
      </main>
      <Footer />
    </>
  );
}

export default App;
