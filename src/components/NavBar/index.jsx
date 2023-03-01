import { CartWidget } from '../CartWidget';

export const Navbar = () => {
return (
    <nav className="navbarDisplay">
      {/* LOGO */}
    <div className='titlePage'>FOOTSHOP</div>
    <ul className="ulDisplay">
        <li className="liDisplay">Deportivas</li>
        <li className="liDisplay">Urbanas</li>
        <li className="liDisplay">Elegantes</li>
        <li className="liDisplay">Sobre Nosotros</li>
    </ul>
    <CartWidget />
    </nav>
);
};
