
import { Switch,Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import LoginPage from "./pages/LoginPage"
import WelcomePage from "./pages/WelcomePage";
import ComposeMail from "./pages/ComposeMail"


function App() {
  return (
    <Switch>
      <Route path="/signup">
           <Signup/>
      </Route>
      <Route path="/login">
           <LoginPage />
      </Route>
      <Route path="/welcome">
        <WelcomePage />
      </Route>
      <Route path="/compose">
        <ComposeMail />
      </Route>
    </Switch>
  );
}

export default App;
