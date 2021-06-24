import PageNav from './components/layout/PageNav/PageNav';
import SideMenu from './components/layout/SideMenu/SideMenu';
import MainPage from './components/pages/MainPage/MainPage';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Entities from './components/pages/Entities/Entities';
import Workspace from './components/pages/Workspace/Workspace';
import PublicationsContainer from './components/pages/PublicationsContainer/PublicationsContainer';
import Profile from './components/pages/Profile/Profile';
import NotFound from './components/common/NotFound/NotFound';


function App() {

  return (
    <Router>
      <div className="app">
        <PageNav />
        <div className="wrapper">
          <SideMenu className="sideMenu" />
          <Switch>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/Home" exact>
              <MainPage />
            </Route>
            <Route path="/Entities" exact>
              <Entities />
            </Route>
            <Route path="/Workspace" exact>
              <Workspace />
            </Route>
            <Route path="/Publications" exact>
              <PublicationsContainer />
            </Route>
            <Route path="/Profile" exact>
              <Profile />
            </Route>
            {/* <Route path="/People" exact>
              <NotFound />
            </Route>
            <Route path="/Administration" exact>
              <NotFound />
            </Route> */}
            <Route path="/*" exact>
              <NotFound />
            </Route>
          </Switch>

        </div>

      </div>
    </Router>

  );
}

export default App;
