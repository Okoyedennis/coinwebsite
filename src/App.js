import "./App.css";
import Pages from "./Pages/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Pages} />
      </Switch>
    </Router>
  );
}

export default App;
