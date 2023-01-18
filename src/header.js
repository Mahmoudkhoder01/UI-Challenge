import React from "react"
import { Fragment } from "react"
import logo from './Zalisko.svg';

const Header = () => {

    const back = { backgroundImage: `url(${process.env.PUBLIC_URL + "/222.jpg"})`, backgroundAttachement: "fixed", backgroundPosition: "top" };

    return (
        <Fragment>
            <div className='bg-img' style={back}>
                <div>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid" style={{ position: "relative", top: "2rem" }}>
                            <a className="navbar-brand" href="/">
                                <img
                                    className="Logo-type"
                                    src={logo}
                                    style={{ filter: "invert(100%) sepia(1%) saturate(7422%) hue-rotate(344deg) brightness(109%) contrast(98%)" }}
                                    alt=""
                                ></img>
                            </a>
                            <div className="collapse navbar-collapse links" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item x">
                                        <a className="nav-link" href="1">
                                            GALLERY
                                        </a>
                                    </li>
                                    <li className="nav-item x">
                                        <a className="nav-link" href="1">
                                            INVEST
                                        </a>
                                    </li>
                                    <li className="nav-item x">
                                        <a className="nav-link" href="1">
                                            CONTACT
                                        </a>
                                    </li>
                                    <li className="nav-item x y" >
                                        <a className="nav-link" href="1">
                                            LOGIN
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="header-div">
                        <p className='zalisko' style={{ color: "grey", fontSize: "2rem" }}>Zalisko Gallery</p>
                        <p className="p-2"><span className='top' style={{ color: "white" }}>TOP</span> <span className='gallery' style={{ color: "#85ffbd" }}>Dresses</span></p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Header;