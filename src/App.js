import "./styles.css";
import Search from "./Search";
import Today from "./Today";
import Forcast from "./Forcast";
import Footer from "./Footer";
import background from "./image/mountains-4.jpg";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <Search />
        <Today />
        <Forcast />
        <Footer />
      </div>
      <script src="src/index.js"></script>
    </div>
  );
}

export default App;
