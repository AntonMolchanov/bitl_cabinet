import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ROUTES } from '../constants/routes'
import Faq from "../pages/Faq";
import News from "../pages/News";
import PersonalArea from "../pages/PersonalArea";
import Profile from "../pages/Profile";
import Referrals from "../pages/Referrals";
import Reports from "../pages/Reports";
import Transactions from "../pages/Transactions";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.personalArea} component={PersonalArea} />
        <Route path={ROUTES.refferals} component={Referrals} />
        <Route path={ROUTES.transactions} component={Transactions} />
        <Route path={ROUTES.reports} component={Reports} />
        <Route path={ROUTES.profile} component={Profile} />
        <Route path={ROUTES.faq} component={Faq} />
        <Route path={ROUTES.news} component={News} />
        <Redirect from="*" to={ROUTES.personalArea} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
