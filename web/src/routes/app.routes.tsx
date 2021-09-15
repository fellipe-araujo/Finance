import { Switch } from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute';
import BottomBar from '../components/BottomBar';

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
import Transactions from '../pages/Transactions';
import NewTransaction from '../pages/NewTransaction';
import TransactionsReport from '../pages/TransactionsReport';

const AppRoutes = () => {
  return (
    <>
      <Switch>
        <PrivateRoute path="/" exact component={Home} />

        <PrivateRoute path="/accounts" exact component={Accounts} />
        <PrivateRoute path="/accounts/create" component={NewAccount} />
        <PrivateRoute path="/accounts/:id" component={AccountDetail} />

        <PrivateRoute path="/objectives" exact component={Objectives} />
        <PrivateRoute path="/objectives/create" component={NewObjective} />
        <PrivateRoute path="/objectives/:id" component={ObjectiveDetail} />

        <PrivateRoute path="/categories" exact component={Categories} />
        <PrivateRoute path="/categories/create" component={NewCategory} />
        <PrivateRoute path="/categories/:id" component={CategoryDetail} />

        <PrivateRoute path="/transactions" exact component={Transactions} />
        <PrivateRoute
          path="/transactions/create"
          exact
          component={NewTransaction}
        />
        <PrivateRoute
          path="/transactions/report/:yearId/:monthId"
          component={TransactionsReport}
        />
      </Switch>
      <BottomBar />
    </>
  );
};

export default AppRoutes;
