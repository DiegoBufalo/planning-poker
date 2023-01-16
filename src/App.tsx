import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { RoomContextProvider } from "./context/room";
import { UserContextProvider } from "./context/user";
import { Roteador } from "./router";

export const App = (): JSX.Element => {
  return (
    <UserContextProvider>
      <RoomContextProvider>
        <Router>
          <div className="App">
            <Header />
            <Roteador />
          </div>
        </Router>
      </RoomContextProvider>
    </UserContextProvider>
  );
}
