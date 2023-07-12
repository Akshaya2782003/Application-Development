import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Start from './components/start';
import Nav from './components/nav';
import Types from './components/types';
import Pricing from './components/pricing';
import SkypeButton from './components/skype';
import Side from './components/side';
import Top from './components/top';
import Call from './components/call';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/nav' element={<Nav/>}/>
      <Route path='/top' element={<Top/>}/>
      <Route path='/side' element={<Side/>}/>
      <Route path='/start' element={<Start/>}/>
      <Route path='/types' element={<Types/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/call' element={<Call/>}/>
      <Route path='/skype' element={<SkypeButton/>}/>
      </Routes>
    </Router>
 
  );
}

export default App