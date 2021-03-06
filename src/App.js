import "./styles/main.scss";
import Home from "./components/Home/Home";
import SingleLinkList from "./components/SingleLinkList/SingleLinkList";
import Success from "./components/Success/Success";
import Resume from "./components/Resume/Resume";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/singlelinklist" component={SingleLinkList} />
        <Route exact path="/success" component={Success} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    </div>
  );
}

export default App;
