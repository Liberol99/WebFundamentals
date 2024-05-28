import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link" to={'/about'}>About</Link>
                            {/* <a class="nav-link" href="/About">About <span class="sr-only">(current)</span></a> */}
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/contact">Contact <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/product">Product <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/products">Products <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header