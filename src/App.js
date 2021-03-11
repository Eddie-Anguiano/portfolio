import "./styles/main.scss";
import Home from "./components/Home/Home";
import SingleLinkList from "./components/SingleLinkList/SingleLinkList";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/singlelinklist" component={SingleLinkList} />
      </Switch>
    </div>
  );
}

export default App;
