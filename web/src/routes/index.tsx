import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Accounts from '../pages/Accounts';
import NewAccount from '../pages/NewAccount';
import AccountDetail from '../pages/AccountDetail';
import Objectives from '../pages/Objectives';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/accounts" exact component={Accounts} />
        <Route path="/accounts/create" component={NewAccount} />
        <Route path="/accounts/:id" component={AccountDetail} />
        <Route path="/objectives" component={Objectives} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
