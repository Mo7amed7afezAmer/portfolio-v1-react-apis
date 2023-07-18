const NavbarTop = (props) => {
    let name = "Portfolio";
    return (
        <nav className="nav-top d-flex">
            <h1 className="nav-brand">{ name }</h1>
            <div className="nav-toggler" onClick={ props.cha }>
                <span></span>
            </div>
        </nav>
    )
};

export default NavbarTop;