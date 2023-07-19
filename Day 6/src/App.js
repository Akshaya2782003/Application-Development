import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/signup';
import Start from './components/start';
import Nav from './components/nav';
import Types from './components/types';
import Pricing from './components/pricing';
import SkypeButton from './components/skype';
import Side from './components/side';
import Top from './components/top';
import Move from './components/slide';
import Call from './components/call';
import Log from './components/log';
import Life from './components/life';
import LifePlans from './components/lifePlans'
import Footer from './components/footer';
import About from './components/about';
import Insurance from './components/insurance'
import { Layout } from './components/layout';
import Vehicle from './components/vehicle';
import Car from './components/car';
import Profile from './components/profile';
import { Provider } from 'react-redux';
import store from './components/store';
function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
      <Route path='/' element={<Log/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/nav' element={<Nav/>}/>
      <Route path='/top' element={<Top/>}/>
      <Route path='/side' element={<Side/>}/>
      <Route path='/start' element={<Start/>}/>
      <Route path='/types' element={<Types/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/life' element={<Life/>}/>
      <Route path='/call' element={<Call/>}/>
      <Route path='/skype' element={<SkypeButton/>}/>
      <Route path='/insurance' element={<Insurance/>}/>
      <Route path='/vehicle' element={<Vehicle/>}/>
      <Route path='/lifePlans' element={<LifePlans/>}/>
      <Route path='/slide' element={<Move/>}/>
      <Route path='/car' element={<Car/>}/>
      <Route path='/log' element={<Log/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/layout' element={<Layout/>}/>
      </Routes>
    </Router>
    </Provider>

 
  );
}

export default App