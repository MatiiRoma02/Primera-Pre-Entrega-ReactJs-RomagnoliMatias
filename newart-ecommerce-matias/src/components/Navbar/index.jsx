import "./styles.css";
import CartWidget from "./CartWidget";
function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <button>Inicio</button>
        <button>Sobre mi</button>
        <button>Local</button>
        <button>Tienda</button>
        <button>Contacto</button>
      </div>
      <CartWidget/>
    </nav>
  );
}
export default Navbar;
