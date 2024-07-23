
import { Switch,Route,Redirect } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import LoginPage from "./pages/LoginPage"
import WelcomePage from "./pages/WelcomePage";
import ComposeMail from "./pages/ComposeMail"
import InboxMessage from "./pages/InboxMessage"

function App() {
  const isLogin = localStorage.getItem("token");
  let url;
  if (isLogin === null) {
    url = "/signup";
  } else {
    url = "/login";
  }
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to={url} />
      </Route>
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
      <Route path="/inbox/:id">
        <InboxMessage />
      </Route>
    </Switch>
  );
}

export default App;
