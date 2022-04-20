import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import GitUsers from 'pages/GitUsers';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/gitusers">
        <GitUsers />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
