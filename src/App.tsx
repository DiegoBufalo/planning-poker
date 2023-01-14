import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { Roteador } from "./router";

export const App = (): JSX.Element => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Roteador />
      </div>
    </Router>
  );
}
