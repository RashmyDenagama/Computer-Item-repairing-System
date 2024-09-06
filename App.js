import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListItemComponents from './Components/ListItemComponents';
import ItemComponent from './Components/ItemComponent'; // Import the AddItemComponent
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Route from react-router-dom
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';


function App() {
  return (
    <>

      {/* <ListItemComponents/> */}

      <BrowserRouter>
        <HeaderComponent />
        
        <Routes>
          <Route path='/' element= { <ListItemComponents />} > </Route>
          <Route path='/Items'element={<ListItemComponents />} > </Route>
          <Route path="/add-item" element={<ItemComponent />} ></Route> 
          <Route path='/edit-item/:id'element={<ItemComponent />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
        
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
