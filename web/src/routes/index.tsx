import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Accounts from '../pages/Accounts';
import NewAccount from '../pages/NewAccount';
import AccountDetail from '../pages/AccountDetail';
import Objectives from '../pages/Objectives';
import NewObjective from '../pages/NewObjective';
import ObjectiveDetail from '../pages/ObjectiveDetail';
import Categories from '../pages/Categories';
import NewCategory from '../pages/NewCategory';
import CategoryDetail from '../pages/CategoryDetail';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/accounts" exact component={Accounts} />
        <Route path="/accounts/create" component={NewAccount} />
        <Route path="/accounts/:id" component={AccountDetail} />

        <Route path="/objectives" exact component={Objectives} />
        <Route path="/objectives/create" component={NewObjective} />
        <Route path="/objectives/:id" component={ObjectiveDetail} />

        <Route path="/categories" exact component={Categories} />
        <Route path="/categories/create" component={NewCategory} />
        <Route path="/categories/:id" component={CategoryDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
