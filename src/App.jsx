import "./App.css";
import "./styles.css";

import CurrentWeather from "./CurrentWeather";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <Header />
      <CurrentWeather />
      <Footer />
    </div>
  );
}
