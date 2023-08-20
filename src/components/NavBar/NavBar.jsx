import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink, Outlet } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <header className="navbar">
        <div className="container">
          <div className="navbar__content">
            <NavLink 
            to="/"><h1>Driver's Tech</h1>
            </NavLink>
            <nav className="navbar__items">
              <NavLink
                to={"/category/procesadores"}
                style={({ isActive }) => ({
                  color: isActive ? "#51c363" : "rgb(255, 255, 250)",
                })}
              >
                Procesadores
              </NavLink>
              <NavLink
                to={"/category/torres"}
                style={({ isActive }) => ({
                  color: isActive ? "#51c363" : "rgb(255, 255, 250)",
                })}
              >
                Torres
              </NavLink>
              <NavLink
                to={"/category/graficas"}
                style={({ isActive }) => ({
                  color: isActive ? "#51c363" : "rgb(255, 255, 250)",
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
    </>
  );
};
