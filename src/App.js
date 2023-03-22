import './App.css';
import Nav from  './components/nav'
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Footer from './components/footer'
import SignUp from './components/signUp';
import PrivateComp from './components/PrivateCompoent';
function App() {
  return (
    <div>
  <BrowserRouter>
    <Nav/>
   <Routes>
   <Route element={<PrivateComp/>}>
   <Route path='/' element={<h1>Producrt Listing component</h1>}></Route>
   <Route path='/add' element={<h1>add Products</h1>}></Route>
   <Route path='/update' element={<h1>Update Products</h1>}></Route>
   <Route path='/logout' element={<h1>Logout</h1>}></Route>
   <Route path='/profile' element={<h1>Profile</h1>}></Route>
   </Route>
   <Route path='/signup' element={<SignUp/>}></Route>
   
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
