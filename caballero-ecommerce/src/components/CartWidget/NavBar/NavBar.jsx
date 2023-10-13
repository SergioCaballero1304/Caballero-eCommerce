import { CartWidget } from "../CartWidget"


function NavBar() {
    return (
            <>
                <nav>
                    <ul>
                        <li>Inicio</li>
                        <li>Materas</li>
                        <li>Llaveros</li>
                    </ul>
                </nav>
                <CartWidget />
            </>
        )
}


export default NavBar