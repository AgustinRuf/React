import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from "./components/NavBar";
import ItemListContainer from './components/pages/ItemListContainer';
import Contact from './components/pages/contact';
import Home from './components/pages/home';
import NotFound from './components/NotFound';

function App() {
const [count, setCount] = useState(0)

const links = [
  { href: "/", text: "Inicio" },
  { href: "/sobrenosotros", text: "Sobre nosotros" },
  { href: "/catálogo", text: "Catálogo" },
  { href: "/actividades", text: "Actividades" },
];

const logo = "/public/yerbaMalaLogo.png"; 
const bienvenida = "Bienvenido/a a nuestra librería";


return (
  <>
    <h1>{bienvenida}</h1>
    <NavBar logo={logo} links={links} />
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/catálogo" element={<ItemListContainer />} />
      <Route path="/contacto" element={<Contact/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);
}

export default App



