import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { PassawordReset } from './pages/PasswordReset';

import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/home/solicitation" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/passaword-reset" component={PassawordReset} />
 
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
