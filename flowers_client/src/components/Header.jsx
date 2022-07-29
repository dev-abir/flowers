import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function Header() {
    return (
        <>
            <Navbar color="info">
                <NavbarBrand href="/">My flowers gallery</NavbarBrand>
            </Navbar>
        </>
    );
}

export default Header;
