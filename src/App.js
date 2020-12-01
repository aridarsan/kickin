import { Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <footer />
    </div>
  )
}

export default App;
