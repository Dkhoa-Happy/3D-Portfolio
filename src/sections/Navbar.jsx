import {useState, useEffect} from "react";
import {navLinks} from "../constants/index.js";
import {gsap} from "gsap";
import {Home, Info, Code, Mail} from "lucide-react"; // Importing icons from Lucide

const NavItems = ({
                      onClick = () => {
                      }
                  }) => (
    <ul className="nav-ul">
        {navLinks.map((item, index) => (
            <li
                key={item.id}
                className="nav-li"
                style={{opacity: 0, transform: "translateY(-10px)"}}
                data-index={index}
            >
                <a href={item.href} className="nav-li_a" onClick={onClick}>
                    <item.icon className="mr-2 text-white" size={20}/>
                    {item.name}
                </a>
            </li>
        ))}
    </ul>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // GSAP animation for nav items
        gsap.fromTo(
            ".nav-li",
            {opacity: 0, y: -10},
            {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 0.5,
                delay: 0.2,
            }
        );
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);

        // GSAP animation for sidebar
        const timeline = gsap.timeline();
        if (!isOpen) {
            timeline
                .to(".nav-sidebar", {maxHeight: "100vh", duration: 0.5, ease: "power3.out"})
                .fromTo(
                    ".nav-li",
                    {opacity: 0, y: -20},
                    {opacity: 1, y: 0, stagger: 0.1, duration: 0.3}
                );
        } else {
            timeline.to(".nav-sidebar", {maxHeight: "0", duration: 0.5, ease: "power3.in"});
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a
                        href="/"
                        className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
                    >
                        Dkhoa Happy
                    </a>
                    <button
                        onClick={toggleMenu}
                        className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                        aria-label="Toggle menu"
                    >
                        <img
                            src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                            alt="toggle"
                            className="w-6 h-6"
                        />
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems/>
                    </nav>
                </div>
            </div>
            <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"} overflow-hidden`}>
                <nav className="p-5">
                    <NavItems/>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
