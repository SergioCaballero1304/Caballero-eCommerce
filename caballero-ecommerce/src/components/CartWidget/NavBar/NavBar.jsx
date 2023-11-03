import { CartWidget } from "../CartWidget"
import { Link } from "react-router-dom"


function NavBar() {
    return (
            <>
                <nav>
                    <h1><Link to={'/'}>AG Soguería Criolla</Link></h1>
                    <ul>
                        <li><button><Link to={'/'}>Inicio</Link></button></li>
                        <li><button><Link to={'/materas'}>Materas</Link></button></li>
                        <li><button><Link to={'/llaveros'}>Llaveros</Link></button></li>
                    </ul>
                    <CartWidget />
                </nav>
            </>
        )
}


export default NavBar