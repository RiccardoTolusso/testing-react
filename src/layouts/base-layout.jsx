import { Outlet, Link } from "react-router-dom";

export default function Layout(){
    return (

        <>
            <header>
                <nav>
                    <ul>
                        <li>Pulsante 1</li>
                        <li>Pulsante 2</li>
                        <li>Pulsante 3</li>
                    </ul>
                </nav>
            </header>
            <section>
                <Outlet></Outlet>
            </section>
            <footer>
                Il mio bellissimo footer.
            </footer>
        </>
    )
}