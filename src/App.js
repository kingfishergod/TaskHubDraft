import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PrivateRoute from "./components/PrivateRoute";
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp'
import Project from './pages/Project'
import { GlobalStyles } from './styles/Global';
import { Provider } from 'react-redux';
import { store } from './Store';
import NotFound from './pages/NotFound';


function App() {
  const  classes = GlobalStyles()
  return (
   <Provider store = {store}>
 <div className="app-container">
      <Router>
        <Header isAuth = {true} />
        <div className = {classes.toolbar} />
        <div className = "app-content" >

          <Switch>
          <PrivateRoute isAuth = {true} exact path = "/" >
            <Home />
          </PrivateRoute>
          <Route path = "/project/:id" component = {Project}  />
          <Route path = "/login" component = {Login} />
          <Route path = "/signup" component = {SignUp} />
          <Route path="*"  component = {NotFound}/>
            
         
          </Switch>

        </div>
      </Router>
    </div>
   </Provider>
  );
}

export default App;
