import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Editorial from "./components/Editorial";
import Following from "./components/Following";
import FirstNav from "./components/FirstNav";
import SecondNav from "./components/SecondNav";

function App() {
  return (
    <BrowserRouter>
    <FirstNav/>
   <SecondNav />
   <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/editorial" component={Editorial} />
    <Route exact path="/following" component={Following} />
   </Switch>
    </BrowserRouter>
  );
}

export default App;