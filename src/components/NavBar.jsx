const NavBar = ({logo, links}) => {
    return (        
        <nav>
            <div>
                <img src={logo} alt="Logo de la librería" />
                <ul>
                    {links.map((link, index) => (
                        <li key={index}><a href={link.href}>{link.text}</a></li>
                    ))}
                </ul>
            </div>
        </nav>
);
}
