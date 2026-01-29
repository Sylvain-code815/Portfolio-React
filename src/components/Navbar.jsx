import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <nav className="bg-primary text-secondary">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/" className="font-extrabold">SYLVAIN</Link>
                <div className="menu flex justify-evenly gap-x-6">
                        <Link to="/About">About</Link>
                        <Link to="/Contact">Contact</Link>
                        <Link to="/Home">Home</Link>
                        <Link to="/Projects">Projetcs</Link>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;