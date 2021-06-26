import PageNav from './components/layout/PageNav/PageNav';
import SideMenu from './components/layout/SideMenu/SideMenu';
import MainPage from './components/pages/MainPage/MainPage';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Entities from './components/pages/Entities/Entities';
import Workspace from './components/pages/Workspace/Workspace';
import Profile from './components/pages/Profile/Profile';
import NotFound from './components/common/NotFound/NotFound';
import { GetUsers } from './redux/actions/usersActions';
import { GetComments } from './redux/actions/commentsActions';
import { GetPhotos } from './redux/actions/photosActions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetUsers());
    dispatch(GetComments());
    dispatch(GetPhotos());
}, [])

  return (
    <Router>
      <div className="app">
        <PageNav/>
        <div className="wrapper">
          <SideMenu />
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
            <Route path="/Profile" exact>
              <Profile />
            </Route>
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
