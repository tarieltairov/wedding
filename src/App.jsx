import { Calendar } from "./components/Calendar";
import { Hero } from "./components/Hero";
import { Present } from "./components/Present";
import "./styles/global.scss";

function App() {
  return (
    <div>
      <Hero />
      <Present />
      <Calendar />
    </div>
  );
}

export default App;
