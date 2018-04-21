import React , { Component }  from "react";


 class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light col-lg-12 navHome" id="navbar">
        <img  />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse col-lg-3 offset-lg-8 " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
          <button type="button" className="btn" id="logbtn">Login</button>
        </div>
      </nav>
    );
  }
}


export default NavBar;
