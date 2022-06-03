import "./App.css";

import Header from "./components/Header/Header";
import Menu from "./components/Main/Menu";
import { Switch, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Message from "./components/CommonComponents/Message";
import hotImg from './images/hot.png'
function App() {
 
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Menu />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="*">
          <Message text="sorry page not found!" img={hotImg}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
