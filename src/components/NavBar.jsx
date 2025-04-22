import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = ({ logo, links }) => {
    return (
        <nav>
            <div>
                <img src={logo} alt="Logo de la tienda" />
                <ul>
                <Link to= '/' >Home</Link>
                <Link to= '/catálogo' >Catálogo</Link>
                <Link to= '/contacto' >Contacto</Link>
                </ul>
            </div>
            <CartWidget quantity={0} /> {0}
        </nav>
    );
};

export default NavBar;