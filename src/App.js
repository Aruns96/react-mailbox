
import { Switch,Route } from 'react-router-dom';
import './App.css';
import SignupPage from './pages/Signup';


function App() {
  return (
    <Switch>
      <Route path="/signup">
           <SignupPage/>
      </Route>
    </Switch>
  );
}

export default App;
