import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>SophLex Dictionary</h1>
        </header>
        <Dictionary defaultKeyword="sunset" />
        <Footer />
      </div>
    </div>
  );
}
