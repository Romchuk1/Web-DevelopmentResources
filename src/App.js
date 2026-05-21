import Header from "./components/Header";
import GameCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <GameCard
        title="CS_2"
        genre="Action"
        platform="PC"
      />

      <GameCard
        title="Dota2"
        genre="Action"
        platform="PC"
      />

      <GameCard
        title="FIFA 25"
        genre="Sports"
        platform="Xbox"
      />

      <Footer />
    </div>
  );
}

export default App;