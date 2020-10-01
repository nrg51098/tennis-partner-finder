import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../components/pages/Auth/Auth';
import EditPlayer from '../components/pages/EditPlayer/EditPlayer';
import UpdatePlayer from '../components/pages/UpdatePlayer/UpdatePlayer';
import Home from '../components/pages/Home/Home';
import Player from '../components/pages/Player/Player';
import Court from '../components/pages/Court/Court';
import MyNavbar from '../components/pages/MyNavbar/MyNavbar';
import SinglePlayer from '../components/pages/SinglePlayer/SinglePlayer';
import SingleCourt from '../components/pages/SingleCourt/SingleCourt';
import authData from '../helpers/data/authData';

import fbConnection from '../helpers/data/connection';

import './App.scss';
import playersData from '../helpers/data/playersData';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
  }

  createProfile = () => {
    const userId = authData.getUid();
    const newPlayer = {
      name: '',
      level: '',
      uid: userId,
      zipcode: '',
      homeCourt: '',
      timeAvailable: '',
      dayAvailable: '',
    };

    playersData.getAllPlayers()
      .then((players) => {
        console.warn(players);
        const profileStatus = players.some((player) => player.uid === userId);
        if (!profileStatus) {
          playersData.createPlayer(newPlayer)
            .then()
            .catch();
        }
      })
      .catch((err) => console.error('get players broke', err));
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
        this.createProfile();
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar authed={authed} />
            <div className="container">
              <Switch>
                <PrivateRoute path="/home" component={Home} authed={authed} />
                <PrivateRoute path="/court" component={Court} authed={authed} />
                <PrivateRoute path="/courts/:courtId" component={SingleCourt} authed={authed} />
                <PrivateRoute path="/player" component={Player} authed={authed} />
                <PrivateRoute path="/update" component={UpdatePlayer} authed={authed} />
                <PrivateRoute path="/edit/:playerId" component={EditPlayer} authed={authed} />
                <PrivateRoute path="/players/:playerId" component={SinglePlayer} authed={authed} />
                <PublicRoute path="/auth" component={Auth} authed={authed} />
                <Redirect from="*" to="/home"/>
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
