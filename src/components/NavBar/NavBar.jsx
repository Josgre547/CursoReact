import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink, Outlet } from "react-router-dom";

export const NavBar = () => {
  //Logica
  return (
    <>
      <header className="navbar">
        <div className="container">
          <NavLink to="/">
              <h1>Driver's Tech</h1>
          </NavLink>
          <div className="navbar__content">
            <nav className="navbar__items">
              <NavLink
                to={"/category/procesadores"}
                style={({ isActive }) => ({
                  color: isActive ? "#51c363" : "#8686d2",
                })}
              >
                Procesadores
              </NavLink>
              <NavLink
                to={"/category/torres"}
                style={({ isActive }) => ({
                  color: isActive ? "#51c363" : "#8686d2",
                })}
              >
                Torres
              </NavLink>
              <NavLink
                to={"/category/graficas"}
                style={({ isActive }) => ({
                  color: isActive ? "#51c363" : "#8686d2",
                })}
              >
                Graficas
              </NavLink>
            </nav>
            <CartWidget />
          </div>
        </div>
      </header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};
