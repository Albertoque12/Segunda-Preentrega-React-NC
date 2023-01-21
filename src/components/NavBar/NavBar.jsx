import React from "react"
import { Link } from "react-router-dom"



const NavBar = (props) => {
    return(
        <>
            {/*<p className="navbar">Soy el NavBar {props.children} </p>*/}


            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link to='/'>
        <a class="navbar-brand" href="#">Home</a>
    </Link>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <Link to='/category/zapatos'>
                <a class="nav-link active" aria-current="page" href="#">Zapatos</a>
            </Link>
        </li>
        <li class="nav-item">
            <Link to='/category/playeras'>
                <a class="nav-link active" aria-current="page" href="#">Playeras</a>
            </Link>
        </li>
      </ul>
      <div>
        <Link to='/cart'>🛒</Link>
      </div>
    </div>
  </div>
</nav>

        </>
    )
}

export default NavBar