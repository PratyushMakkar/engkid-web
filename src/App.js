import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import FrontPage from './components/index/FrontPage';
import FilesScreen from './components/filesScreen/FilesScreen';
import { ReturnUserFiles } from './api/userService';
import SignInPage from './components/loginPage';

function App() {
  console.log(ReturnUserFiles("username15", "password"))
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
