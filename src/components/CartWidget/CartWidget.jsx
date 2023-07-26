import { FaOpencart } from "react-icons/fa";
import "./CartWidget.css";

export const CartWidget = () => (
  <div className="cart-widget">
    <FaOpencart /> <span className="cart-widget__qty">(10)</span>
  </div>
);
