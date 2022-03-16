import {useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
import firebase from "firebase";
import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import s from './style.module.css'
import cn from "classnames";

const firebaseConfig = {
  apiKey: "AIzaSyCifnGRSy-BfeVJDIK0jPzTiFSMSBftJiQ",
  authDomain: "pokemon-game-3bcbb.firebaseapp.com",
  databaseURL: "https://pokemon-game-3bcbb-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-3bcbb",
  storageBucket: "pokemon-game-3bcbb.appspot.com",
  messagingSenderId: "784449797593",
  appId: "1:784449797593:web:6846269046c314e1b5adc8"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref('pokemons').once('value', (snapshot)=>{
  console.log(snapshot.val())
})

const App = () => {
  const match = useRouteMatch('/')
  return (
      <Switch>
        <Route path="/404" render={() => <h1>404 Error</h1>} />
        
          <>
            <MenuHeader bgActive={!match.isExact}/>
            <div className={cn(s.wrap, {
              [s.isHomePage]: match.isExact
            })}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/home" component={HomePage} />
              <Route path="/game" component={GamePage} />
              <Route path="/about" render={() => <h1>ABOUT</h1>} />
              <Route render={() => (
                <Redirect to='./404' />
              )}/>
            </Switch>
            </div>
            <Footer />
          </>
        
      </Switch>
  );
};

export default App;
