import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FrontPage from './components/index/FrontPage';
import FilesScreen from './components/filesScreen/FilesScreen';
import { ReturnUserFiles } from './api/userService';
import SignInPage from './components/loginPage';

function App() {
  console.log(ReturnUserFiles("username15", "password"))
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FrontPage} />
        <Route path = "/files" component={FilesScreen}/>
      </Switch>
    </Router>
  );
}

export default App;
