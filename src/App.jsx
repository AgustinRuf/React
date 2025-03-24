import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';

function App() {
const [count, setCount] = useState(0)

const links = [
  { href: "/", text: "Inicio" },
  { href: "/products", text: "Sobre nosotros" },
  { href: "/about", text: "Catálogo" },
  { href: "/contact", text: "Actividades" },
];

const logo = "../public/yerbaMalaLogo.png"; 
const bienvenida = "Bienvenido/a a nuestra librería";

return (
  <>
    <h1>¡Bienvenido/a a nuestra librería!</h1>
    <NavBar logo={logo} links={links} />
    <ItemListContainer bienvenida={bienvenida} />
  </>
);


}

export default App



